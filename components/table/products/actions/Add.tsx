import { SquarePlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
export default function AddProductButton() {
  return (
    // <button className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white rounded-md px-2 py-1" onClick={() => router.push('/admin/register')}>
    //       <SquarePlusIcon className="h-4 w-4" />
    //     </button>
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-sky-600 hover:bg-sky-700 text-white rounded-md px-2 py-1" variant="outline">
          <SquarePlusIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add product new</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          llll
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}