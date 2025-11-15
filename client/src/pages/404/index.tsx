import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const NotFound404: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 dark:bg-gray-950">
      <div className="w-full max-w-md text-center">
        <h1 className="mb-6 text-7xl font-bold text-black dark:text-white md:text-8xl">
          404
        </h1>

        <h2 className="mb-3 text-xl font-semibold text-black dark:text-white md:text-2xl">
          This page didn't load!
        </h2>

        <p className="mb-8 text-sm text-gray-600 dark:text-gray-400 md:text-base">
          The page you're looking for doesn't seem to exist. It might have been
          moved or deleted. Please check the URL or return to the homepage.
        </p>

        <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/" className={cn(buttonVariants({ variant: "default" }))}>
            Go back
          </Link>
          <Button variant="outline">Report problem</Button>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          Need help?{" "}
          <span className="text-gray-800 dark:text-gray-300">
            Reach out to us at{" "}
          </span>
          <Button
          variant="link"
            className="font-medium text-black underline dark:text-white px-0 hover:text-primary"
          >
            support@cashlet.com
          </Button>
        </p>
      </div>
    </div>
  );
};

export default NotFound404;
