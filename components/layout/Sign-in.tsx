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
import { useStore } from "../store/Header";
import { User } from "lucide-react";
import Cart from "../cart";

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
      <Cart />
      <button className="bg-gray-300 p-2 rounded-full hover:bg-gray-400"
        onClick={() => router.push('/sign-in')}
      >
        <User className="w-4 h-4" />
      </button>
      {isUser &&
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="border-none hover:bg-white shadow-white">{isUser}</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you logout sure?</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={onClick}>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      }
    </div>
  )
}
