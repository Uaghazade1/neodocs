import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { CopyrightIcon, HeartIcon, TriangleIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t w-full h-16 items-center justify-center flex">
      <div className="container items-center justify-center h-full text-muted-foreground text-sm flex sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-1 justify-center whitespace-nowrap">
          <p className="text-center flex items-center gap-1">
            Build by
            <Link
              className=" text-primary text-center flex items-center gap-1"
              href="https://neosaas.dev"
            >
              NeoSaaS
              <span className="text-muted-foreground flex items-center gap-1">
                <CopyrightIcon className="w-3 h-3 text-muted-foreground" /> 2025
              </span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="https://vercel.com/templates/next.js/documentation-template"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <TriangleIcon className="h-[0.8rem] w-4 mr-2 text-primary fill-current" />
        Deploy
      </Link>
      <Link
        href="https://github.com/sponsors/nisabmohd"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <HeartIcon className="h-4 w-4 mr-2 text-red-600 fill-current" />
        Sponsor
      </Link>
    </>
  );
}
