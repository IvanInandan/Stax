import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogOverlay,
  DialogClose,
} from "@radix-ui/react-dialog";
import { LoginForm } from "../../forms/auth/LoginForm";
import { Button } from "../../ui/button";
import { X } from "lucide-react";

const LoginModal = () => {
  return (
    <Dialog>
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

          <LoginForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
