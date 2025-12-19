import { SidebarContent } from "@/components/ui/sidebar";
import SidebarNavMain from "./AppSidebarNavMain";
import SidebarNavSecondary from "./AppSidebarNavSecondary";
import SidebarSectionTop from "./AppSidebarSectionTop";

const AppSidebarContent = () => {
  return (
    <SidebarContent className="flex flex-col h-full">
      <SidebarSectionTop />
      <SidebarNavMain />
      <div className="mt-auto">
        <SidebarNavSecondary />
      </div>
    </SidebarContent>
  );
};

export default AppSidebarContent;
