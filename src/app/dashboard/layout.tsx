import Sidebar from "@/components/sidebar";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4 sm:ml-64 mt-16 w-full">{children}</div>
    </div>
  );
}
