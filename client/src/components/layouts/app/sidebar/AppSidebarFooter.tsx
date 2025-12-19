import { NavUser } from "@/components/ui/nav-user";
import { SidebarFooter } from "@/components/ui/sidebar";

const AppSidebarFooter = () => {
  return (
    <SidebarFooter>
      <NavUser
        user={{
          name: "Ivan",
          email: "ci.inandan@gmail.com",
          avatar: "avatar",
        }}
      />
    </SidebarFooter>
  );
};

export default AppSidebarFooter;
