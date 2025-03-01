import { dataDetailsProductsSchema } from "./Data"
import { useForm, Form } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { FormLabel, FormItem, FormControl, FormMessage, FormField } from "@/components/ui/form"
import Image from "next/image"
export default function DetailPage({
  data
}: {
  data: dataDetailsProductsSchema
}) {
  const form = useForm({
    defaultValues: data
  })
  console.log(data)
  const onSubmit = async (data: dataDetailsProductsSchema) => {
    console.log(data)
  }
  return (
    <div>
      {/* <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            {
              data && Object.keys(data).map((key: any, idx: number) => (
                <FormField
                  key={idx}
                  control={form.control}
                  name={key}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{key}</FormLabel>
                      <FormControl>
                        {
                          key === 'image_data' ? (
                            field.value ?
                              <></>
                             :
                              <div>upload file</div>
                          ) :
                          <Input {...field} />
                        }
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))
            }
          </div>
        </form>
      </Form> */}
      The system is updating...
    </div>
  )
}