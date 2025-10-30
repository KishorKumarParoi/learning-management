"use client"
import Loading from "@/components/ui/Loading";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AppSidebar from "./AppSidebar";
import DashboardNavbar from "@/components/ui/DashboardNavbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [courseId, setCourseId] = useState<string | null>(null)
    const { user, isLoaded } = useUser();

    // handle use Effect isCoursePage
    if (!isLoaded) return <Loading />
    if (!user) return <div>Please sign in to access this page.</div>

    return (
        <SidebarProvider>
            <div className="dashboard">
                <AppSidebar />
                {/* Sidebar will go here */}
                <div className="dashboard__content">
                    {/* Chapter sidebar will go */}
                    <div className={cn("dashboard__main")} style={{ height: "100vh" }}>
                        <DashboardNavbar isCoursePage={!!courseId} />
                        <main className="dashboard__body">{children}</main>
                    </div>
                </div>
            </div>
        </SidebarProvider>
    )
}