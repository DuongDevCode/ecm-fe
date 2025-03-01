import z from "zod";

const ITypeProd = z.object({
  size: z.string(),
  color: z.string(),
  count: z.string()
});

export type ITypeProdSchema = z.infer<typeof ITypeProd>;