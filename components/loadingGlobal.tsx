'use client'
import { cn } from "@/lib/utils"
import { useStoreLoading } from "./store/Loading"
export default function LoadingGlobal() {
  const isLoading = useStoreLoading((state: any) => state.isLoading)
  if (!isLoading) return null
  return <div className="flex justify-center items-center text-sky-500 mt-24 text-xl bg-slate-400 z-999">
    Please wait loading
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("animate-spin")}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  </div>
}