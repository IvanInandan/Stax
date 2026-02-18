import { Card } from "@/components/ui/card";

const Features = () => {
  return (
    <div className="min-h-screen max-h-screen w-full flex items-center justify-center">
      <div className="h-full w-1/2 flex items-center justify-center gap-20 flex-1 px-30">
        <Card className="h-[50vh] w-full shadow-[16px_16px_0px_0px_hsl(0_0%_0%_/1)] hover:translate-x-[12px] hover:translate-y-[12px] hover:shadow-none transition-all duration-100">
          helo
        </Card>
        <Card className="h-[50vh] w-full shadow-[16px_16px_0px_0px_hsl(0_0%_0%_/1)] hover:translate-x-[16px] hover:translate-y-[16px] hover:shadow-none transition-all duration-100">
          Helo
        </Card>

        <Card className="h-[50vh] w-full shadow-[16px_16px_0px_0px_hsl(0_0%_0%_/1)] hover:translate-x-[16px] hover:translate-y-[16px] hover:shadow-none transition-all duration-100">
          helo
        </Card>
      </div>
    </div>
  );
};

export default Features;
