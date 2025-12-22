import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <div className="bg-sidebar pt-20 pb-10 px-10">
      <div className="flex">
        {/* LEFT */}
        <div className=""></div>

        {/* RIGHT */}
        <div className="basis-1/3">
          {/* <form>
            <FieldSeparator />
            <FieldGroup>
              <div className="flex items-center">
                <Field className="grow border-sidebar-border">
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className="shadow-none text-white"
                  />
                </Field>
                <Field className="basis-1/6 border-sidebar-border border-r-2 border-y-2">
                  <Button
                    className="shadow-none w-full bg-primary"
                    type="submit"
                    variant="ghost"
                  >
                    Subscribe
                  </Button>
                </Field>
              </div>
            </FieldGroup>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
