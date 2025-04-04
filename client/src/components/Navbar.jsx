import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleLogout } from "../helper/authFuncs.js";
import {
  IconHome,
  IconLogout,
  IconSettings,
  IconSwitchHorizontal,
} from "@tabler/icons-react";
import { Code, Group } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";

// Import CSS Module for scoped styling
import classes from "./NavbarSimple.module.scss";

// Define items in Navbar
const data = [
  { link: "/dashboard", label: "Dashboard", icon: IconHome },
  { link: "/settings", label: "Settings", icon: IconSettings },
];

export default function Dashboard() {
  const [active, setActive] = useState("Dashboard");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
        navigate(item.link);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <MantineLogo size={28} />
          <Code fw={700}>v3.1.2</Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a
          href="/switch"
          className={classes.link}
          onClick={(event) => {
            event.preventDefault();
            navigate("/switch");
          }}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a
          href="/logout"
          className={classes.link}
          onClick={(event) => {
            event.preventDefault();
            handleLogout(dispatch, navigate, event);
          }}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}
