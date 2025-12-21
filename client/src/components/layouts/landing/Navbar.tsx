import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Logo from "@/assets/logo";

import LoginModal from "@/components/modals/auth/LoginModal";
import { TextRoll } from "@/components/ui/skiper-ui/skiper58";
import ThemeToggleButton from "@/components/ui/ThemeToggleButton";

const navigationData = [
  { title: "home", href: "#" },
  { title: "about", href: "#" },
  { title: "contact", href: "#" },
];

const Navbar = () => {
  return (
    <header className="bg-transparent sticky top-0 z-50">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-7 sm:px-6">
        <div className="flex">
          <Logo className="text-foreground gap-3" />
        </div>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 font-medium text-muted-foreground md:flex lg:gap-16">
          <a
            href="#"
            className="hover:text-primary max-md:hidden inline-block transform transition-transform duration-300 hover:scale-120"
          >
            <TextRoll center>home</TextRoll>
          </a>

          <a
            href="#"
            className="hover:text-primary max-md:hidden inline-block transform transition-transform duration-300 hover:scale-120"
          >
            <TextRoll center>about</TextRoll>
          </a>

          <a
            href="#"
            className="hover:text-primary max-md:hidden inline-block transform transition-transform duration-300 hover:scale-120"
          >
            <TextRoll center>contact</TextRoll>
          </a>
        </div>

        <div className="flex items-center gap-6">
          <LoginModal />
          <ThemeToggleButton />
          <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden" asChild>
              <Button variant="outline" size="icon">
                <MenuIcon />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuGroup>
                {navigationData.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <a href={item.href}>{item.title}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
