import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Eos } from "iconsax-reactjs";
import { ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" h-[10%] py-2 w-100% bg-primary flex items-center justify-center text-white">
      <p className="text-xs">
        Welcome to Cashlet - Your AI-Powered Financial Companion!
      </p>
      <ChevronRightIcon className="size-4" />
    </div>
  );
};

const Logo = () => {
  return (
    <Link to={"/"} className="flex items-center gap-2">
      <div className="bg-primary text-white h-6.5 w-6.5 rounded flex items-center justify-center">
        <Eos className="size-8" />
      </div>
      <span className="font-semibold text-lg text-primary">Cashlet</span>
    </Link>
  );
};

const navItems = [
  { name: "Product", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  return (
    <>
      <Banner />
      <header className="w-full px-4 py-4 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2">
              <Logo />
            </div>

            <nav className="hidden items-center  gap-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-xs text-black font-medium tracking-wide uppercase transition-all hover:text-primary hover:underline underline-offset-4 duration-300 ease-in-out"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-1">
              <Link
                to="/sign-up"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "hidden text-sm md:block"
                )}
              >
                Start Free Trial
              </Link>
              <Link
                to="/sign-in"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "text-sm"
                )}
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
