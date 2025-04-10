"use client"

import {
    SearchIcon,
    SettingsIcon,
    ClipboardListIcon,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton, 
    SidebarHeader} from "renderer/components/ui/sidebar";
 
import { NavMain } from "renderer/components/nav-main";
import { NavSecondary } from "renderer/components/nav-secondary";

const data = {
  navMain: [
    {
      title: "Clipboard",
      url: "#/main/clipboard",
      icon: ClipboardListIcon,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: SettingsIcon,
    },
    {
      title: "Search",
      url: "#",
      icon: SearchIcon,
    },
  ],
}

function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar> ) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
                        <a href="#/">
                            <span className="text-base font-semibold">DPA</span>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} />
      </SidebarContent>
    </Sidebar>
  )
}

export {
    AppSidebar,
}