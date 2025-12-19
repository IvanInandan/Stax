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
                <ChartSplineIcon />
                <span>Content Performance</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <UsersIcon />
                <span>Audience Insight</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <ChartPieIcon />
                <span>Engagement Metrics</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <HashIcon />
                <span>Hashtag Performance</span>
              </a>
            </SidebarMenuButton>
            <SidebarMenuBadge className="bg-primary/10 rounded-full">
              3
            </SidebarMenuBadge>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <ArrowRightLeftIcon />
                <span>Competitor Analysis</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <Clock9Icon />
                <span>Campaign Tracking</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <ClipboardListIcon />
                <span>Sentiment Tracking</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <CrownIcon />
                <span>Influencer</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default SidebarNavMain;
