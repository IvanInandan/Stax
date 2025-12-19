import { Button } from "@/components/ui/button";

interface RegisterFormProps {
  onSwitchForm?: () => void;
}

const RegisterForm = ({ onSwitchForm }: RegisterFormProps) => {
  return (
    <div>
      <h1>Register</h1>
      <Button onClick={() => onSwitchForm?.()}>Login</Button>
    </div>
  );
};

export default RegisterForm;
