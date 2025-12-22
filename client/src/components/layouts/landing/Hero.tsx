import { Card } from "@/components/ui/card";
import girl from "@/assets/girleating.png";

const Hero = () => {
  return (
    <div className="min-h-screen max-h-screen w-full grid grid-cols-2 grid-rows-[3fr_1fr]">
      <div className="flex justify-center items-center">
        <Card className="bg-main rounded-none shadow-xs">
          <div className="p-10">
            <p className="text-7xl font-extrabold">TALK LESS,</p>
            <p className="text-7xl font-extrabold">EAT MORE.</p>
          </div>
        </Card>
      </div>
      <div className="relative flex justify-center items-end">
        {/* Clipping container for the red circle */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute h-[80%] w-[80%] top-1/2 left-1/2 -translate-x-1/2 bg-destructive rounded-full"></div>
        </div>

        {/* Image on top */}
        <img src={girl} alt="sushi" className="h-3/4 relative z-10" />
      </div>

      <div className="col-span-2 flex justify-center items-center border-border border-1 bg-primary z-1">
        <div className="flex items-center justify-center overflow-hidden whitespace-nowrap w-full h-full">
          <div className="animate-marquee">
            {/* Duplicate text for seamless scrolling */}
            <span className="mx-4">This text scrolls endlessly →</span>
            <span className="mx-4">This text scrolls endlessly →</span>
            <span className="mx-4">This text scrolls endlessly →</span>
            <span className="mx-4">This text scrolls endlessly →</span>

            {/* Repeat again for seamless loop */}
            <span className="mx-4">This text scrolls endlessly →</span>
            <span className="mx-4">This text scrolls endlessly →</span>
            <span className="mx-4">This text scrolls endlessly →</span>
            <span className="mx-4">This text scrolls endlessly →</span>
          </div>

          <style>
            {`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); } /* move by half of container (half text) */
      }
      .animate-marquee {
        display: inline-flex;
        animation: marquee 10s linear infinite;
      }
    `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default Hero;
