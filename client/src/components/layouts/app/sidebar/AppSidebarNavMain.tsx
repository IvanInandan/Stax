import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  ArrowRightLeftIcon,
  ChartPieIcon,
  ChartSplineIcon,
  ClipboardListIcon,
  Clock9Icon,
  CrownIcon,
  HashIcon,
  UsersIcon,
  Heart,
  Utensils,
  Newspaper,
} from "lucide-react";

const SidebarNavMain = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Pages</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <Newspaper />
                <span>Feed</span>
              </a>
            </SidebarMenuButton>
            <SidebarMenuBadge className="bg-primary/10 rounded-full">
              3
            </SidebarMenuBadge>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <UsersIcon />
                <span>Discover</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <Utensils />
                <span>Your Recipes</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <Heart />
                <span>Favorites</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default SidebarNavMain;
