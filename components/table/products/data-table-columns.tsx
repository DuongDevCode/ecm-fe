import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import moment from "moment";
// import DelAction from "./actions/del";
export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "rowIndex",
    header: "STT",
  },
  {
    accessorKey: "image_url",
    header: "Image",
    cell: ({row}) => {
      return (
        <Image src={row.original.image_url} alt={row.original.name} width={100} height={100} />
      )
    }
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  // {
  //   accessorKey: "description",
  //   header: "Description",
  // },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "rating",
    header: "Rating",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({row}) => {
      return moment(row.getValue('createdAt')).format("DD/MM/YYYY HH:mm:ss")
    }
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({row}) => {
      return moment(row.getValue('updatedAt')).format("DD/MM/YYYY HH:mm:ss")
    }
  }
  // {
  //   accessorKey: 'action',
  //   header: 'Action',
  //   cell: ({row}) => {
  //     return <DelAction id={row.original.id} name={row.original.fullname} />
  //   }
  // }
];