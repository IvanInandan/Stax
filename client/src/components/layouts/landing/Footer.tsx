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
    <div className="bg-sidebar pt-20 pb-10 px-10 border-red-500 border-2">
      <div className="flex border-black border-2">
        {/* LEFT */}
        <div className="flex-grow border-white border-2">
          <p className="text-7xl text-white">FOOTER</p>
        </div>

        {/* RIGHT */}
        <div className="basis-1/3 flex-shrink-0 border-white border-2">
          <form>
            <FieldSeparator />
            <FieldGroup>
              <div className="flex items-center">
                <Field className="grow border-sidebar-border border-2">
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
