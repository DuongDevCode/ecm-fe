import { ColumnDef } from "@tanstack/react-table";
import { ITypeColTableSchema } from "./schema";
import Image from "next/image";
import QuantityItem from "./actions/Quatity";
import DelItem from "./actions/Del";
export const columns: ColumnDef<ITypeColTableSchema>[]= [
  {
    accessorKey: 'id',
    header: 'ID'
  },
  {
    accessorKey: 'information',
    header: 'Product',
    cell: ({row}) => {
      const size_color = JSON.parse(row.original.variantOptions)
      const infor = {
        img: row.original.thumbnail,
        name: row.original.productName,
        sku: row.original.productSku,
        size: size_color[0].option_text,
        color: size_color[1].option_text
      } 
      return(
        <div className="grid grid-cols-2 gap-x-1 max-w-md">
          <Image src={infor.img} width={100} height={100} style={{maxWidth: '100%', height: 'auto'}} alt="product_item_image" />
          <div className="flex flex-col gap-y-2">
            <p className="font-semibold">{infor.name}</p>
            <p>Sku: {infor.sku}</p>
            <p>Size: {infor.size}</p>
            <p>Color: {infor.color}</p>
          </div>
        </div>
      )
    }
  },
  {
    accessorKey: 'productPrice',
    header: 'Price',
    cell: ({row}) => {
      const price: {[key: string]: string | number} = structuredClone(row.getValue('productPrice'))
      return <h1>{price?.text}</h1>
    }
  },
  {
    accessorKey: 'qty',
    header: 'Quantity',
    cell: ({row}) => {
      const qtyItem: number = row.getValue('qty')
      return <QuantityItem qty={qtyItem} />
    }
  },
  {
    accessorKey: 'lineTotalInclTax',
    header: 'Total',
    cell: ({row}) => {
      const priceTotal: {[key: string]: string | number} = row.getValue('lineTotalInclTax')
      return <h1>{priceTotal?.text}</h1>
    }
  },
  {
    accessorKey: 'actions',
    header: 'Action',
    cell: ({row}) => {
      return <DelItem id={row.original.id} />
    }
  }
]