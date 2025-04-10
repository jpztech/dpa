import { SidebarProvider, SidebarInset } from "renderer/components/ui/sidebar";
import { AppSidebar } from "renderer/components/app-sidebar";
import { SiteHeader } from "renderer/components/site-header";

export function MainContainer({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader title={title} />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
