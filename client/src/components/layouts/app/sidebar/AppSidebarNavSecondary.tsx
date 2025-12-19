import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Apple, ShoppingBasket, UserRound } from "lucide-react";

const SidebarNavSecondary = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Features</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <ShoppingBasket />
                <span>Shopping List</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <Apple />
                <span>Nutrition Tracker</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default SidebarNavSecondary;
