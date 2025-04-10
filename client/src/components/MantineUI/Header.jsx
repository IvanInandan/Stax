import { IconCheck } from "@tabler/icons-react";
import {
  Button,
  Group,
  Image,
  List,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import image from "../../img/hero.svg";
import classes from "./Header.module.scss";
import Reveal from "../TextReveal";

export default function Hero() {
  return (
    <div className="flex w-5/6 mx-auto items-center">
      <div>
        <Reveal>
          <div className="text-7xl text-white font-extrabold">
            A{" "}
            <span className="relative py-1 px-4 rounded bg-blue-400">
              {" "}
              MODERN
            </span>{" "}
            ALL-IN-ONE FINANCE APPLICATION
          </div>
        </Reveal>

        <Reveal>
          <div className="text-white mt-8 font-bold">
            Build fully functional accessible web applications faster than ever
            Mantine includes more than 120 customizable components and hooks to
            cover you in any situation
          </div>
        </Reveal>

        <List
          size="sm"
          icon={
            <ThemeIcon size={20} radius="xl">
              <IconCheck size={12} stroke={1.5} />
            </ThemeIcon>
          }
          className="mt-8"
        >
          <Reveal>
            <List.Item className="text-white py-1">
              <b>TypeScript based</b> - build type safe applications, all
              components and hooks export types
            </List.Item>
          </Reveal>

          <Reveal>
            <List.Item className="text-white py-1">
              <b>Free and open source</b> - all packages have MIT license, you
              can use Mantine in any project
            </List.Item>
          </Reveal>

          <Reveal>
            <List.Item className="text-white py-1">
              <b>No annoying focus ring</b> – focus ring will appear only when
              user navigates with keyboard
            </List.Item>
          </Reveal>
        </List>

        <Reveal>
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
        </Reveal>
      </div>

      <Image src={image} className={classes.image} />
    </div>
  );
}
