'use client'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import Login from "@/components/admin/Login"

const queryClient = new QueryClient()

export default function Page() {
  return(
    <QueryClientProvider client={queryClient}>
      <Login />
    </QueryClientProvider>
  )
}