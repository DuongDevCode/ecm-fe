import z from 'zod'
export const ITypeColTable = z.object({
  id: z.number(),
  thumbnail: z.string(),
  productName: z.string(),
  productSku: z.string(),
  variantOptions: z.string(),
  productUrl: z.number(),
  qty: z.number(),
  productPrice: z.object({
    value: z.number(),
    text: z.string()
  }),
  lineTotalInclTax: z.object({
    value: z.number(),
    text: z.string()
  })
})

export type ITypeColTableSchema = z.infer<typeof ITypeColTable>