import { IconCheck } from "@tabler/icons-react";
import {
  Button,
  Container,
  Group,
  Image,
  List,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import image from "../../img/hero.svg";
import classes from "./Header.module.scss";
import { div } from "motion/react-client";

export default function Hero() {
  return (
    <div className={classes.inner}>
      <div className={classes.content}>
        <Title className={classes.title}>
          A <span className={classes.highlight}>modern</span> all-in-one <br />{" "}
          finance application
        </Title>
        <Text c="dimmed" mt="md">
          Build fully functional accessible web applications faster than ever –
          Mantine includes more than 120 customizable components and hooks to
          cover you in any situation
        </Text>

        <List
          mt={30}
          spacing="sm"
          size="sm"
          icon={
            <ThemeIcon size={20} radius="xl">
              <IconCheck size={12} stroke={1.5} />
            </ThemeIcon>
          }
        >
          <List.Item>
            <b>TypeScript based</b> – build type safe applications, all
            components and hooks export types
          </List.Item>
          <List.Item>
            <b>Free and open source</b> – all packages have MIT license, you can
            use Mantine in any project
          </List.Item>
          <List.Item>
            <b>No annoying focus ring</b> – focus ring will appear only when
            user navigates with keyboard
          </List.Item>
        </List>

        <Group mt={30}>
          <Button radius="xl" size="md" className={classes.control}>
            Get started
          </Button>
          <Button
            variant="default"
            radius="xl"
            size="md"
            className={classes.control}
            component="a"
            href="https://github.com/IvanInandan/wallet-watcher"
            target="_blank"
          >
            Source code
          </Button>
        </Group>
      </div>

      <Image src={image} className={classes.image} />
    </div>
  );
}
