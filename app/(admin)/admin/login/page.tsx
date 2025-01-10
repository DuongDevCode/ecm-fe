'use client'
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginManagerFormSchema } from "@/components/type/schema";
import { Form, FormLabel, FormMessage, FormControl, FormItem, FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo";
interface RegisterSchema {
  email: string
  pwd: string
}

export default function Login() {
  const form = useForm<z.infer<typeof LoginManagerFormSchema>>({
    resolver: zodResolver(LoginManagerFormSchema),
    defaultValues: {
      email: '',
      pwd: '',
    } as RegisterSchema,
  })
  const onSubmit = async (values: z.infer<typeof LoginManagerFormSchema>) => {
    // Do something with the form values.
    console.log(values)
  }

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Logic kiểm tra giá trị
    if (!value) 
      form.setError("email", { type: "required", message: "Email is required" });
    else if (!/\S+@\S+\.\S+/.test(value))
      form.setError("email", { type: "pattern", message: "Invalid email format" });
    else 
      form.clearErrors("email"); // Xóa lỗi nếu giá trị hợp lệ
    form.setValue("email", value);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Form {...form}>
        <form className="flex flex-col gap-4 border rounded-md border-gray-200 py-4 px-8 shadow-2xl w-[468px]" onSubmit={form.handleSubmit(onSubmit)}>
          <Logo width={60} height={60} colorCustomizing="" url='' />
          <FormField
            control={form.control}
            name="email"
            render={({field}) => {
              return (
                <FormItem>
                  <FormLabel className="sans-serif text-gray-500">Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" value={field.value} onChange={handleChangeEmail} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name="pwd"
            render={({field}) => {
              return (
                <FormItem>
                  <FormLabel className="sans-serif text-gray-500">Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <Button variant={'default'} type='submit'>Login</Button>
        </form>
      </Form>
    </div>
  )
}