'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Eye, EyeOff } from "lucide-react";
import { RegisterFormSchema } from "@/components/type/schema";
import { useRouter } from "next/navigation";
import API from "@/config/api";
type RegisterSchema = z.infer<typeof RegisterFormSchema>

export default function RegisterPage() {
  const router = useRouter()
  const arrField = ['fullname','email','address','phone', 'position']
  const [pwdShow, setPwdShow] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      email: '',
      pwd: '',
      fullname: '',
      address: '',
      position: '',
      phone: ''
    } as RegisterSchema,
  })

  async function onSubmit(values: z.infer<typeof RegisterFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // let result: { [key: string]: string | boolean } = {
    //   message: "",
    //   success: false,
    // };
    setLoading(true)
    // const { email, pwd } = values
    try {
      const res = await fetch(API.USER.CREATE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
        })
      const data = await res.json()
      if (data.code == 200 && data.data.id) {
        toast({
          title: "Notification",
          className: 'bg-success-500 text-white',
          description: data.message,
        });
        router.back()
      } else throw new Error(data.data.message)
    } catch(err) {
      toast({
        title: "Notification",
        variant: 'destructive',
        description: err instanceof Error ? err.message : '',
      });
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full m-auto flex justify-center" style={{margin: '1rem auto 6rem'}}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-96">
          {
            arrField.map((item: string, index: number) =>
              <FormField
                key={index}
                control={form.control}
                name={item as 'address' | 'email' | 'fullname' | 'phone'}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{item} (*)</FormLabel>
                    <FormControl>
                      <Input placeholder={item} {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )
          }
          <FormField
            control={form.control}
            name="pwd"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password (*)</FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input type={pwdShow ? 'text' : 'password'} className="pr-7" placeholder="Password" {...field} required />
                  </FormControl>
                  <FormMessage />
                  <button type="button" className="absolute right-3 top-3" onClick={() => setPwdShow(!pwdShow)}>
                    {pwdShow ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>

  )
}