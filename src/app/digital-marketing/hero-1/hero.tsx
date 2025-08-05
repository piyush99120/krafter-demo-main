
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "./button";
import { Badge } from "./badge";

function Hero() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col">
            <div >
              <Badge variant="outline">We&apos;re live!</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left text-black font-regular">
                This is the start of something!
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-black text-left">
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster than
                ever.
              </p>
            </div>
            <div className="flex flex-row gap-4 text-black">
              <Button size="lg" className="gap-4 text-white" variant="outline">
                Jump on a call <PhoneCall className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4">
                Sign up here <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gray-200 rounded-md aspect-square"></div>
            <div className="bg-gray-200 rounded-md row-span-2"></div>
            <div className="bg-gray-200 rounded-md aspect-square"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
