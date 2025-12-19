import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "../sidebar/AppSidebar";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <AppSidebar />
        </Sidebar>
        <main className="flex flex-col flex-1">
          <AppHeader />
          {children}
          <AppFooter />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
