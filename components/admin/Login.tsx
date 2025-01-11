'use client'
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginManagerFormSchema, LoginValidSchema, RegisterSchema, LoginError } from "@/components/type/schema";
import { Form, FormLabel, FormMessage, FormControl, FormItem, FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo/logoHeaderEcm";
import { useMutation } from "@tanstack/react-query";
import API from "@/config/api";
import { toast } from "@/hooks/use-toast";
import {useRouter} from "next/navigation";
import { encrypt } from "@/lib/utils";
export default function Login() {
  const router = useRouter()
  const form = useForm<z.infer<typeof LoginManagerFormSchema>>({
    resolver: zodResolver(LoginManagerFormSchema),
    defaultValues: {
      phone: '',
      pwd: '',
    } as RegisterSchema,
  })

  const mutateLogin = useMutation<LoginValidSchema, LoginError, { phone: string; pwd: string }>({
    mutationFn: (formData) =>
      fetch(API.LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: encrypt(JSON.stringify(formData))
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
    const encrypt_pwd = encrypt(values.pwd)
    const payload = {
      phone: values.phone,
      pwd: encrypt_pwd
    }
    mutateLogin.mutate(payload)
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Form {...form}>
        <form className="flex flex-col gap-4 border rounded-md border-gray-200 py-4 px-8 shadow-2xl w-[468px]" onSubmit={form.handleSubmit(onSubmit)}>
          <Logo width={60} height={60} colorCustomizing="" url='' />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="sans-serif text-gray-500">Phone</FormLabel>
                  <FormControl>
                    <Input type='number' min={0} placeholder="phone" value={field.value} onChange={field.onChange} disabled={mutateLogin.isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name="pwd"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="sans-serif text-gray-500">Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" value={field.value} onChange={field.onChange} disabled={mutateLogin.isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <Button variant={'default'} type='submit' disabled={mutateLogin.isPending}>Login</Button>
        </form>
      </Form>
    </div>
  )
}