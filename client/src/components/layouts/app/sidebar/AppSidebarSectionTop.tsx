import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ChartNoAxesCombinedIcon } from "lucide-react";

const SidebarSectionTop = () => {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <ChartNoAxesCombinedIcon />
                <span>Dashboard</span>
              </a>
            </SidebarMenuButton>
            <SidebarMenuBadge className="bg-primary/10 rounded-full">
              5
            </SidebarMenuBadge>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default SidebarSectionTop;
