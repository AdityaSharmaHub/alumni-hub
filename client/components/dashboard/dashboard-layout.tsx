"use client";

import { AppSidebar } from "@/components/dashboard/dashboard-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex min-h-screen">
        <SidebarProvider>
        <AppSidebar role={"student"} />
        <main className="flex-1 p-4">
            <SidebarTrigger />
            <div className="m-2">
              {children}
            </div>
        </main>
        </SidebarProvider>       
    </div>
  );
}