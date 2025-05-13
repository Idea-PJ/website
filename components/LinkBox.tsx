import { cn } from "@/utils";
import Link from "next/link";

type IProps = {
  text: string;
  url: string;
};

const LinkBox: React.FC<IProps> = ({ url, text }) => {
  return (
    <Link
      href={url}
      className={cn(
        "w-full  max-w-2xl flex justify-between ",
        "border border-gray-800 p-4 rounded-md box-border",
        "b1 overflow-x-auto relative group",
        "hover:border-gray-700 default-transition"
      )}
    >
      <h6 className="w-max b2-primary text-white/75">{text}</h6>
      <span className={cn(
        "b1-primary translate-x-[-5px]",
        "default-transition group-hover:translate-x-0"
    )}>{">"}</span>
    </Link>
  );
};

export default LinkBox;
