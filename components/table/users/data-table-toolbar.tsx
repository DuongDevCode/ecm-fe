import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
export default function DataTableToolbar() {
  const router = useRouter()
  return (
    <div className="w-full text-right mb-3">
      <Button variant="outline" onClick={() => router.push('/register')}>Add new user</Button>
    </div>
  )
}