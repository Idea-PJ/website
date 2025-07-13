import { cn } from "@/utils";
import Link from "next/link";
import PageSearch from "./PageSearch";

const HeaderComp: React.FC = () => {
  return (
    <>
      <header
        className={cn(
          "w-screen h-[75px] fixed top-0 bg-(--background)",
          "px-[65px] grid grid-cols-3 items-center",
          "border-b border-b-white/10 z-30"
        )}
      >
        <Link className="grid-cols-1" href="/">
          <h1 className="h1-primary text-white/80 hover:text-white default-transition">
            Idea P
            <span className="text-primary">J</span>
          </h1>
        </Link>
        <ul className={cn("b1-b flex-center gap-[25px]",
        "-translate-x-[10px] text-white/50")}>
          <li className="text-white flex flex-col h-[30px] justify-between">
            <Link href="/docs">Docs</Link>
            <div className="w-full h-[2px] bg-primary rounded-full"></div>
          </li>
          <li>
            <Link href="/guide">Learn</Link>
          </li>
          <li>
            <Link href="/guide">Guide</Link>
          </li>
        </ul>
        <div className="w-full flex justify-end grid-cols-1">
          <PageSearch />
        </div>
      </header>
      <div className="w-screen h-[75px]"></div>
    </>
  );
};

export default HeaderComp;
