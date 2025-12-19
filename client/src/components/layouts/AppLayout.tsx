import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "../sidebar/AppSidebar";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <AppSidebar />
        </Sidebar>
        <main className="flex-1">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
