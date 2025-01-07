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
import { signInFormSchema } from "@/components/type/schema";
import { useRouter } from "next/navigation";
import { useStore } from "@/components/store/header/store";
import Link from "next/link";
import API from "@/config/api";

type signInSchema = z.infer<typeof signInFormSchema>

export default function SignInPage() {
  const router = useRouter()
  const [pwdShow, setPwdShow] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const onSet = useStore((state: any) => state.onSet)
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      pwd: "",
    } as signInSchema,
  })

  async function onSubmit(values: z.infer<typeof signInFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    let result: { [key: string]: string | boolean } = {
      message: "",
      success: false,
    };
    setLoading(true)
    const { email, pwd } = values
    try {
      const res = await fetch(API.LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          pwd
        })
      })
      const data = await res.json()
      if (data.code == 200 && data.data.id) {
        toast({
          title: "Notification",
          className: 'bg-success-500 text-white',
          description: data.message,
        });
        localStorage.setItem('current_user', JSON.stringify(data.data))
        onSet(data.data.fullname)
        router.push('/dashboard')
      } else throw new Error(data.data.message)
    } catch (err) {
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
    <div className="w-full m-auto flex justify-center" style={{ margin: '1rem auto 6rem' }}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-96">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email (*)</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <div className="flex justify-between items-center">
            <Button type="submit">Submit</Button>
            <Link href={'/register'} className="text-sky-500 hover:text-sky-600 underline">Resgister?</Link>
          </div>
        </form>
      </Form>
    </div>

  )
}