import { Card } from "@/components/ui/card";

const Features = () => {
  return (
    <div className="min-h-screen max-h-screen w-full flex items-center justify-center">
      <div className="h-full w-1/2 flex items-center justify-center gap-20 flex-1 px-30">
        <Card className="h-[50vh] w-full shadow" />
        <Card className="h-[50vh] w-full shadow" />
        <Card className="h-[50vh] w-full shadow" />
      </div>
    </div>
  );
};

export default Features;
