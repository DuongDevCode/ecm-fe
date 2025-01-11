import { Button } from "@/components/ui/button"
import API from "@/config/api"
import { toast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2Icon } from "lucide-react";
export default function DelAction({ id, name }: { id: number, name: string }) {
  const [open, setOpen] = useState<boolean>(false)
  const queryClient = useQueryClient()

  const onDel = async () => {
    try {
      const res = await fetch(
        `${API.USER.ACTIONS.replace(':id', id.toString())}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      }
      )
      const data = await res.json()
      return data
    } catch (err) {
      if (err instanceof Error)
        return err.message
    }
  }

  const confirmDel = useMutation({
    mutationFn: onDel,
    onSuccess(data: any) {
      toast({
        title: "Notification",
        description: data.message,
      });
      queryClient.invalidateQueries({queryKey: ['users']})
    },
    onError: (err) => {
      toast({
        title: "Notification",
        variant: 'destructive',
        description: err.message,
      });
      setOpen(false)
    }
  })

  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <Button variant={'secondary'}>
            <Trash2Icon className="w-4 h-4 text-red-500" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you delete sure {name}?</AlertDialogTitle>
          </AlertDialogHeader>
          <div className="flex justify-end items-center">
            <Button className="mr-2" variant={'outline'} onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => confirmDel.mutateAsync()}>Ok</Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}