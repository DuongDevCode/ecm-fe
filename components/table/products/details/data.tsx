import z from 'zod'

export const isDataDetailsProductsSchema = z.object({
  name: z.string().min(2, {
    message: "Name isn't available.",
  }),
  description: z.string(),
  price: z.string().min(2, {
    message: "Price isn't available.",
  }),
  category_id: z.string().nullable().optional(),
  brand_id: z.string().nullable().optional(),
  quantity: z.string().min(2, {
    message: "Quantity isn't available.",
  }),
  image_data: z.instanceof(Uint8Array).nullable().optional(),
  rating: z.string(),
  createdAt: z.string().nullable().optional(),
  updatedAt: z.string().nullable().optional()
})

export type dataDetailsProductsSchema = z.infer<typeof isDataDetailsProductsSchema>

export const dataDetailsProducts: dataDetailsProductsSchema = {
  image_data: null, 
  name: '', 
  description: '', 
  price: '', 
  quantity: '',
  rating: ''
}