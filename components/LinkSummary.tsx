import { cn } from "@/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export type ILinkSummary = {
  id: string;
  title: string;
  url: string;
  stack: {
    id: string;
    name: string;
  }[];
  summary: string | ReactNode;
  level: 1 | 2 | 3 | 4 | 5;
};

const levels = [
  {
    id: 1,
    name: "Intern",
  },
  {
    id: 2,
    name: "Junior",
  },
  {
    id: 3,
    name: "Mid",
  },
  {
    id: 4,
    name: "Senior",
  },
  {
    id: 5,
    name: "Lead",
  },
];

const LevelComp: React.FC<{
  level: number;
}> = ({level}) => {
  const find = levels.find(item => item.id == level);
  if(!find) return <></>
  return (
    <div className="flex gap-2 text-xs font-bold justify-end items-center">
      <h6 className="font-bold">{find.name}</h6>
      <div className={cn("grid grid-cols-5 gap-[3px]", "w-[45px] h-[15px]")}>
        {[...Array(5)].map((item, index) => (
          <div
            className={cn(
              "w-full h-full rounded-sm",
              index < level ? "bg-white" : "bg-white/50 "
            )}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

const LinkSummary: React.FC<ILinkSummary> = ({ url, title, stack, level, summary }) => {
  return (
    <Link
      className={cn(
        "flex flex-col gap-5 group",
        "bg-muted p-7 rounded-md box-border",
        "hover:bg-gray-light default-transition"
      )}
      href={url}
    >
      <div
        className={cn("w-full  max-w-2xl flex ", "justify-between b1 relative")}
      >
        <h6 className="w-full b2-primary text-3xl text-white/75">{title}</h6>
        <ArrowRightIcon
          size={18}
          className={cn(
            "b1-primary translate-x-[-5px] text-primary",
            "default-transition group-hover:translate-x-0"
          )}
        />
      </div>
      <div className="section-body flex flex-col">
          {summary}
      </div>
      <hr className="opacity-50" />
      <div className="grid grid-cols-3 gap-3 items-center">
        <div className="flex col-span-2 flex-wrap gap-3">
          {stack.map((item) => (
            <div
              className={cn(
                "text-sm font-bold bg-black/50",
                "font-bold px-3 py-1 rounded",
                "text-white/70"
              )}
              key={item.id}
            >
              {item.name}
            </div>
          ))}
        </div>
        <LevelComp level={level} />
      </div>
    </Link>
  );
};

export default LinkSummary;
