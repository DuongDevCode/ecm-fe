'use client'
import HeaderPage from "./header/Desktop"
import LoadingGlobal from "../loadingGlobal"
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function GenerationPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="grid grid-rows-[20px_1fr_20px] h-screen sm:pb-5 font-[family-name:var(--font-geist-sans)]">
        <HeaderPage />
        <div className="mt-[73px]">
          {children}
        </div>
      </main>
      <LoadingGlobal />
    </QueryClientProvider>
  )
}