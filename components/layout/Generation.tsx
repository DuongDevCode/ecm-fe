'use client'
import HeaderPage from "./header/desktop"
import FooterPage from "./Footer"
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
      <main className="grid grid-rows-[20px_1fr_20px] h-screen sm:pb-5 font-[family-name:var(--font-geist-sans)] relative">
        <HeaderPage />
        <div className="mt-[73px]">
          {children}
        </div>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center absolute bottom-0 text-center">
          <FooterPage />
        </footer>
      </main>
    </QueryClientProvider>
  )
}