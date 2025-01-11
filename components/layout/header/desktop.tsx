"use client";
import Image from "next/image";
// import NavigationMenu from "../searchNavbar";
import SignInModal from "../Sign-in";
// import { CarouselPlugin } from "../carousel";
import { AlignJustify } from "lucide-react";
import styles from '@/styles/styles.module.css'
// import {MobileHeader} from "@/app/components/layout/header/mobile";
import { MobileHeader } from "./mobile";
import { useRouter } from "next/navigation";
// import NavMenu from "../NavBarMenu";
import Logo from "@/components/Logo/logoHeaderEcm";
import NavMenu from "../NavBarMenu";

export default function HeaderPage() {
  const router = useRouter()
  return (
    <section className="absolute top-0 w-full border-b border-b-gray-200 shadow-lg">
      <div className={`p-4 z-20 ${styles['header-align']}`}>

        {/* DESKTOP RESPONSIVE */}
        <div className={`${styles['header-desktop']} flex justify-between w-full`}>
          <NavMenu />
          <Logo width={40} height={40} colorCustomizing="" url="/dashboard" />
          <SignInModal />
        </div>

        {/* MOBILE RESPONSIVE */}
        <div className={`${styles['header-mobile-tablet']} flex justify-items-start`}>
          <MobileHeader />
        </div>
      </div>
    </section>

  )
}
