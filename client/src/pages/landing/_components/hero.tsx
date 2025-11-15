import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <LeftCol />

        <RightCol />
      </div>
    </section>
  );
}

const LeftCol = () => (
  <div className="flex flex-col justify-center">
    <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full bg-white px-4 py-2 text-sm shadow-sm">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
      </span>
      <span className="text-gray-700 text-xs">Trusted by users worldwide</span>
    </div>

    <h1 className="mb-4 text-5xl font-bold leading-tight text-gray-900 lg:text-6xl">
      Smart Financial Management with AI
    </h1>

    <p className="mb-8 text-lg text-gray-600">
      Transform your financial decisions with AI-powered insights. Make smarter
      investments, track expenses, and achieve your financial goals
      effortlessly.
    </p>

    <Button className="mb-8 flex w-fit items-center gap-2 rounded-lg bg-primary px-8 py-4 text-white transition ">
      <span className="font-medium">Start Your Financial Journey</span>
      <ArrowRight className="h-5 w-5" />
    </Button>

    <div className="flex items-center gap-4">
      <div className="flex -space-x-2">
        <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-gradient-to-br from-purple-400 to-pink-400"></div>
        <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-cyan-400"></div>
        <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-gradient-to-br from-orange-400 to-red-400"></div>
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-900">14 Million+</div>
        <div className="text-sm text-gray-600">
          Trusted users managing $2B+ in assets with our AI-powered platform,
          growing every day.
        </div>
      </div>
    </div>
  </div>
);

const RightCol = () => (
  <div className="relative bg-red-00 transition-all duration-300 ease-in-out">
    <img
      src="https://images.pexels.com/photos/6694570/pexels-photo-6694570.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="Professional"
      className={cn(
        " ml-auto w-full rounded-2xl object-cover opacity-90 shadow-xl",
        "ring-4 ring-primary/30"
      )}
    />
    <img
      src="https://images.pexels.com/photos/3760824/pexels-photo-3760824.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="Professional"
      className="absolute -right-8 -top-8 h-48 w-48 rounded-2xl object-cover opacity-95 shadow-xl"
    />
    <img
      src="https://images.pexels.com/photos/3206079/pexels-photo-3206079.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="Professional"
      className="hidden md:block absolute -left-8 bottom-20 h-48 w-48 rounded-2xl object-cover opacity-95 shadow-xl"
    />
  </div>
);
