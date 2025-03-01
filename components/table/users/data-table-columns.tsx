import { ColumnDef } from "@tanstack/react-table";
import DelAction from "./actions/Del";
export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "fullname",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "phone",
    header: "phoneNumber",
  },
  {
    accessorKey: "position",
    header: "Position",
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({row}) => {
      return <DelAction id={row.original.id} name={row.original.fullname} />
    }
  }
];