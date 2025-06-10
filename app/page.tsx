import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[80.5vh] min-h-[78vh] flex-col sm:items-center justify-center text-center">
      <Link
        href="https://neosaas.dev"
        target="_blank"
        className="mb-5 sm:text-xs flex items-center sm:-mt-12"
      >
        <div className="rounded-full px-4 py-2 text-white font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
          <span className="">Buy latest version of NeoSaaS</span>
        </div>
      </Link>
      <h1 className="text-[1.80rem] leading-8 sm:px-8 md:leading-[4.5rem] font-bold mb-4 sm:text-6xl text-left sm:text-center">
        The documentation for NeoSaaS
      </h1>
      <p className="mb-8 md:text-lg text-base  max-w-[800px] text-muted-foreground text-left sm:text-center">
        This documentation shows you how to use NeoSaaS Boilerplate and how to
        build your own SaaS application from scratch.
      </p>
      <div className="sm:flex sm:flex-row grid grid-cols-2 items-center sm;gap-5 gap-3">
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "md" })}
        >
          Get Stared
          <MoveRightIcon className="w-4 h-4 font-extrabold ml-2" />
        </Link>
        
      </div>
      
    </div>
  );
}
