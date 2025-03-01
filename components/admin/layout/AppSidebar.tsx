import { Calendar, Home, Inbox, Search, Settings, ArchiveIcon, UserCircle, LogOutIcon } from "lucide-react"
import LogoAdmin from "@/components/logo/Admin"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useRouter } from "next/navigation"
import { ItemSidebar } from "@/components/type/schema"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Products",
    url: "/admin/products",
    icon: ArchiveIcon,
  },
  // {
  //   title: "Calendar",
  //   url: "#",
  //   icon: Calendar,
  // },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "User",
    url: "/admin/users",
    icon: UserCircle,
  },
  {
    title: "Logout",
    url: "/admin/login",
    icon: LogOutIcon,
  }
]

export function AppSidebar() {
  const router = useRouter()
  const onClick = (e: React.MouseEvent<HTMLButtonElement>, item: ItemSidebar) => {
    e.preventDefault()
    if (item.url == '/admin/login')
      localStorage.removeItem('current_user')
    router.push(item.url)
  }
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <LogoAdmin />
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-3 px-2">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <button type="button" className="text-black font-semibold" onClick={(e) => onClick(e, item)}>
                      <item.icon />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
