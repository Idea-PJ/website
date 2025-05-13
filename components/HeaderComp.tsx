import { cn } from "@/utils";
import Link from "next/link";
import PageSearch from "./PageSearch";

const HeaderComp: React.FC = () => {
  return (
    <>
      <header
        className={cn(
          "w-screen h-[75px] fixed top-0 bg-(--background)",
          "px-[65px] flex items-center justify-between",
          "border-b border-b-white/10 z-30"
        )}
      >
        <Link href="/">
          <h1 className="h1-primary text-white/80 hover:text-white default-transition">
            Idea PJ
          </h1>
        </Link>
        <div className="flex gap-10 items-center">
          <PageSearch/>
          <ul className={cn("b1-b flex gap-[35px] text-white/50")}>
            <li className="text-white flex flex-col h-[30px] justify-between">
              <Link href="/docs">Docs</Link>
              <div className="w-full h-[2px] bg-gray-500 rounded-full"></div>
            </li>
            <li>
              <Link href="/guide">Guide</Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="w-screen h-[75px]"></div>
    </>
  );
};

export default HeaderComp;
