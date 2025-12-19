import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  CalendarClockIcon,
  SettingsIcon,
  SquareActivityIcon,
  Undo2Icon,
  UsersIcon,
} from "lucide-react";

const SidebarNavSecondary = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Supporting Features</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <SquareActivityIcon />
                <span>Real Time Monitoring</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <CalendarClockIcon />
                <span>Schedule Post & Calendar</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <Undo2Icon />
                <span>Report & Export</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <SettingsIcon />
                <span>Settings & Integrations</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <UsersIcon />
                <span>User Management</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default SidebarNavSecondary;
