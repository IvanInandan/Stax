import { NavUser } from "../ui/nav-user";
import { SidebarFooter } from "../ui/sidebar";

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
