import { ISectionTitle } from "@/types/common";
import { cn } from "@/utils";
import { useState } from "react";
import { IoIosCheckmark, IoMdCopy } from "react-icons/io";

type IProps = Omit<ISectionTitle, "id"> & {
  id?: string;
  variant?: "section" | "title";
};

const TitleComp: React.FC<IProps> = ({ title, id, variant = "section" }) => {
  const [copied, setCopied] = useState(false);
  const Title = variant == "section" ? "h2" : "h1";
  const handleCopy = () => {
    const tag = variant == "section" ? `#${id}` : "";
    navigator.clipboard.writeText(`${window.location.href}${tag}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2s
  };
  return (
    <div className="flex gap-2 w-max max-w-screen items-center">
      <Title
        className={cn(
          variant == "title" ? "title1-primary" : "h2-primary",
          "w-max"
        )}
        id={id}
      >
        {title}
      </Title>
      <button
        type="button"
        className={cn(
          "text-xl cursor-pointer text-white/75",
          "w-[20px] h-[20px] relative"
        )}
        onClick={handleCopy}
      >
        <div className="absolute top-0 left-0 translate-y-[-5px]">
          {copied ? <IoIosCheckmark /> : <IoMdCopy />}
        </div>
      </button>
    </div>
  );
};

export default TitleComp;
