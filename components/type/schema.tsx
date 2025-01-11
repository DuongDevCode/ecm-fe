import z from 'zod'

export const signInFormSchema = z.object({
  phone: z.string().min(2, {
    message: "Phone isn't available.",
  }),
  pwd: z.string().min(2, {
    message: "Password isn't available",
  }),
});

export const RegisterFormSchema = z.object({
  email: z.string().min(2, {
    message: "Username isn't available.",
  }),
  pwd: z.string().min(2, {
    message: "Password isn't available",
  }),
  fullname: z.string().min(2, { message: "Fullname isn't available" }),
  address: z.string(),
  position: z.string(),
  phone: z.string(),
});

export const LoginManagerFormSchema = z.object({
  phone: z.string().min(2, {
    message: "Phone isn't available.",
  }),
  pwd: z.string().min(2, {
    message: "Password isn't available",
  }),
});

export const loginResponseSchema = z.object({
  code: z.number().or(z.string()),
  data: z.object({
    id: z.number(),
    fullname: z.string(),
    email: z.string(),
    address: z.string(),
    phone: z.string(),
    position: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
  }),
  message: z.string(),
});
export type LoginValidSchema = z.infer<typeof loginResponseSchema>

export interface RegisterSchema {
  phone: string
  pwd: string
}

export interface LoginError {
  message: string;
  statusCode: number;
}

export interface ItemSidebar {
  title:string,
  url: string,
  icon: any,
}