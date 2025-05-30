import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import { ActionIcon, Anchor, Group } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./Footer.module.scss";

const links = [
  { link: "#", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Store" },
  { link: "#", label: "Careers" },
];

export default function Footer() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <MantineLogo size={28} />

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <a href="https://www.linkedin.com/in/ivaninandan/">
              <IconBrandLinkedin size={18} stroke={1.5} color="white" />
            </a>
          </ActionIcon>

          <ActionIcon size="lg" variant="default" radius="xl">
            <a href="https://github.com/IvanInandan/">
              <IconBrandGithub size={18} stroke={1.5} color="white" />
            </a>
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
