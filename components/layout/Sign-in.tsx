import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useStore } from "../store/header/store";

export default function SignInModal() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const isUser = useStore((state: any) => state.isUser)
  const onRemove = useStore((state: any) => state.onRemove)
  const onSet = useStore((state: any) => state.onSet)

  useEffect(() => {
    const user = localStorage.getItem('current_user')
    if (user) onSet(JSON.parse(user).fullname)
  }, [])

  const onClick = () => {
    localStorage.removeItem('current_user')
    onRemove()
    router.push('/sign-in')
  }
  return (
    <div className="flex items-center">
      <Button
        variant="outline"
        className="border-none hover:bg-white"
        onClick={() => router.push('/sign-in')}
      >
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Button>
      {isUser &&
        <>
          <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="border-none hover:bg-white shadow-white">{isUser}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you logout sure?</AlertDialogTitle>
                {/* <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your
                  account and remove your data from our servers.
                </AlertDialogDescription> */}
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={onClick}>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      }
    </div>

  )
}
