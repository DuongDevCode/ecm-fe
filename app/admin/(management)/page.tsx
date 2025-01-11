'use client'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from '@/components/admin/layout/AppSidebar'

const queryClient = new QueryClient()

export default function AdminPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <AppSidebar />
        <main className='w-full h-full'>
          <SidebarTrigger />
          <div className='p-2'>
            {children}
          </div>
        </main>
      </SidebarProvider>
    </QueryClientProvider>
  )
}