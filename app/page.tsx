// import FooterPage from "@/components/layout/Footer";
// import HeaderPage from "@/components/layout/header/Header";
// import ContentPage from "@/components/layout/Content";
import Link from "next/link"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen sm:pb-5 font-[family-name:var(--font-geist-sans)]">
      {/* <main>
        <HeaderPage />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <FooterPage />
      </footer> */}
      <div style={{ padding: "20px" }}>
      <h1>Danh sách bài viết</h1>
      <ul>
        <li>
          <Link href="/post/1">Bài viết 1</Link>
        </li>
        <li>
          <Link href="/post/2">Bài viết 2</Link>
        </li>
      </ul>
    </div>
    </div>
  )
}
