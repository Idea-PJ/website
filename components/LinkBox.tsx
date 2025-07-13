import { cn } from "@/utils";
import { ArrowRightIcon } from "lucide-react";
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
        "bg-muted p-4 rounded-md box-border",
        "b1 overflow-x-auto relative group",
        "hover:bg-gray-light default-transition"
      )}
    >
      <h6 className="w-max b2-primary text-white/75">{text}</h6>
      <ArrowRightIcon
        size={18}
        className={cn(
          "b1-primary translate-x-[-5px] text-primary",
          "default-transition group-hover:translate-x-0"
        )}
      />
    </Link>
  );
};

export default LinkBox;
