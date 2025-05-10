import { cn } from "@/utils";
import Link from "next/link";


const SideNavItem = ({ text }: { text: string }) => {
  return (
    <li className="w-full 0">
      <Link href="/docs" className={cn(
        "flex items-center gap-[13px] group",
        "text-white/70 hover:text-white",
        "default-transition",
    )}>
        <span className={cn(
            "s1-primary default-transition",
            "group-hover:translate-x-[5px]"
        )}>{">"}</span>
        <span className={cn(
            "s1-m translate-y-[1px]",
        )}>{text}</span>
      </Link>
    </li>
  );
}

const SideNav: React.FC = () => {
  return (
    <aside className={cn("w-[200px] min-h-screen h-max ")}>
      <ul className="flex flex-col gap-[20px] mt-[75px] fixed ">
        <SideNavItem text="Getting Started" />
        <SideNavItem text="Front End" />
        <SideNavItem text="Back End" />
        <SideNavItem text="Git" />
      </ul>
    </aside>
  );
};

export default SideNav;
