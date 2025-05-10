import { cn } from "@/utils";
import Link from "next/link";

const HeaderComp: React.FC = () => {
  return (
    <>
    <header
      className={cn(
        "w-screen h-[75px] fixed top-0 bg-(--background)",
        "px-[65px] flex items-center justify-between",
        "border-b border-b-white/10 z-50"
      )}
    >
      <Link href="/">
        <h1 className="h1-primary text-white/80 hover:text-white default-transition">Idea PJ</h1>
      </Link>
      <ul className={cn("b1-b flex gap-[35px] text-white/50")}>
        <li className="text-white flex flex-col h-[30px] justify-between">
          <Link href="/docs">Docs</Link>
          <div className="w-full h-[2px] bg-yellow-600 rounded-full"></div>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </header>
    <div className="w-screen h-[75px]"></div>
    </>
  );
};

export default HeaderComp;
