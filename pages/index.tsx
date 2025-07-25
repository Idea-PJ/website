import SEOHeaders from "@/components/SEOHeaders";
import { cn } from "@/utils";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SEOHeaders />
      <div className="w-screen h-screen flex justify-center items-center bg-black text-white">
        <div className="flex gap-16 items-center">
          <h1 className="title1-primary text-[10rem]">Idea P<span className="text-primary">J</span></h1>
          <div className="max-w-[200px] flex flex-col gap-5 text">
            <p>
              Build production ready app that follows the <br />{" "}
              <span className="text-primary font-bold">
                industry standards
              </span>{" "}
              .
            </p>
            <div className={cn(
              "relative w-[120px] h-[35px] flex-center group",
              "bg-white rounded-full"
            )}>
              <Link
                className={cn(
                  "text-sm w-max text-center bg-black",
                  "border border-white rounded-full",
                  "w-full h-full flex-center default-transition",
                  "group-hover:translate-x-[-1px] group-hover:translate-y-[-1px]"
                )}
                href="/docs"
              >
                View Docs
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
