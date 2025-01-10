import z from 'zod'

export const signInFormSchema = z.object({
  email: z.string().min(2, {
    message: "Username isn't available.",
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
  email: z.string().min(2, {
    message: "Username isn't available.",
  }),
  pwd: z.string().min(2, {
    message: "Password isn't available",
  }),
});