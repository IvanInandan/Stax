import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@radix-ui/react-dialog";
import { Button } from "../../ui/button";
import { X } from "lucide-react";
import { useState } from "react";

import { LoginForm } from "@/components/forms/auth/LoginForm";
import { RegisterForm } from "@/components/forms/auth/RegisterForm";

const LoginModal = () => {
  const [form, setForm] = useState("login");
  const [open, setOpen] = useState(false);

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setForm("login");
    }
    setOpen(isOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className="bg-secondary hover:bg-primary" size="sm">
          login / register
        </Button>
      </DialogTrigger>

      <DialogOverlay className="fixed inset-0 bg-black/50" />

      <DialogContent className="fixed inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-md relative">
          <DialogClose asChild>
            <Button
              size="icon"
              className="absolute -top-3 -right-3 bg-destructive hover:bg-destructive"
            >
              <X />
            </Button>
          </DialogClose>
          <DialogTitle /> <DialogDescription />
          {form === "login" ? (
            <LoginForm onSwitchForm={() => setForm("register")} />
          ) : (
            <RegisterForm onSwitchForm={() => setForm("login")} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
