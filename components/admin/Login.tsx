'use client'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginManagerFormSchema, LoginValidSchema, RegisterSchema, LoginError } from "@/components/type/schema";
import { Form, FormLabel, FormMessage, FormControl, FormItem, FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/logo/HeaderEcm";
import { useMutation } from "@tanstack/react-query";
import API from "@/config/api";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { encrypt } from "@/lib/utils";
import { formatStrUpperCase } from "@/lib/utils";
import { getFieldNameLoginOrRegister } from "@/lib/constants";
export default function Login() {
  const router = useRouter()
  const [isRegister, setIsRegister] = useState<boolean>(false)
  const arrField = ['fullname', 'dob', 'email', 'address', 'position', 'phone', 'pwd']
  const form = useForm<z.infer<typeof LoginManagerFormSchema>>({
    resolver: zodResolver(LoginManagerFormSchema),
    defaultValues: {
      fullname: '',
      dob: '',
      address: '',
      email: '',
      position: '',
      phone: '',
      pwd: ''
    } as RegisterSchema,
  })

  const mutateLogin = useMutation<LoginValidSchema, LoginError, { body: { phone: string; pwd: string, email?: string, fullname?: string, address?: string, position?: string }, api: string }>({
    mutationFn: (formData) =>
      fetch(formData.api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: encrypt(JSON.stringify(formData.body))
        })
      }).then((res) => res.json()),
    onSuccess(data) {
      if (data.code == 200) {
        toast({
          title: "Notification",
          className: 'bg-success-500 text-white',
          description: data.message,
        });
        localStorage.setItem('current_user', data.data.toString())
        router.push('/admin/dashboard')
      } else throw new Error(data.message)
    }, onError(err) {
      toast({
        title: "Notification",
        variant: 'destructive',
        description: err.message,
      });
    }
  })

  const onSubmit = async (values: z.infer<typeof LoginManagerFormSchema>) => {
    if (isRegister) {
      const encrypt_pwd = encrypt(values.pwd)
      const payload = {
        body: {
          fullname: values.fullname,
          dob: values.dob,
          email: values.email,
          address: values.address,
          position: values.position,
          phone: values.phone,
          pwd: encrypt_pwd
        },
        api: API.USER.CREATE
      }
      mutateLogin.mutate(payload)
    } else {
      const encrypt_pwd = encrypt(values.pwd)
      const payload = {
        body: {
          phone: values.phone,
          pwd: encrypt_pwd,
        },
        api: API.LOGIN
      }
      mutateLogin.mutate(payload)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Form {...form}>
        <form className="flex flex-col gap-4 border rounded-md border-gray-200 py-4 px-8 shadow-2xl w-[468px]" onSubmit={form.handleSubmit(onSubmit)}>
          <Logo width={60} height={60} colorCustomizing="" url='/admin/login' />
          {
            arrField?.map((item: string, idx: number) =>
              <FormField
                key={idx}
                control={form.control}
                name={item as keyof z.infer<typeof LoginManagerFormSchema>}
                render={({ field }) => {
                  return (
                    <>
                      {
                        (isRegister || (!isRegister && ['pwd', 'phone'].includes(item))) ? (
                          <FormItem>
                            <FormLabel className="sans-serif text-gray-500">{getFieldNameLoginOrRegister(item)}</FormLabel>
                            <FormControl>
                              <Input type={item == 'pwd' ? 'password' : (item == 'phone' ? 'number' : 'text')} min={0} placeholder={`Nhập ${getFieldNameLoginOrRegister(item).toLocaleLowerCase()}`} value={field.value} onChange={field.onChange} disabled={mutateLogin.isPending} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        ) : null
                      }
                    </>
                  )
                }}
              />
            )
          }
          <Button variant={'default'} type='submit' disabled={mutateLogin.isPending}>{getFieldNameLoginOrRegister(isRegister ? 'register' : 'login')}</Button>
          <button type="button" className="text-left text-sky-500 underline hover:text-sky-600" onClick={() => setIsRegister(!isRegister)}>
            {getFieldNameLoginOrRegister(isRegister ? 'back_to_login' : 'create_an_account')}
          </button>
        </form>
      </Form>
    </div>
  )
}