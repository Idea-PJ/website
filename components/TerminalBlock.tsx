import { cn } from "@/utils";
import React, { ReactNode, useState } from "react";
import { IoIosCheckmark, IoMdCopy } from "react-icons/io";


type IProps = {
 cmd: string
 children: ReactNode | ReactNode[]
}

const TerminalBlock: React.FC<IProps> = ({cmd, children}) => {
    const [copied, setCopied] = useState(false);

const handleCopy = () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2s
  };
  return (
    <div
      className={cn(
        "bg-black text-white p-4 rounded-lg",
        "border border-gray-700 w-full max-w-2xl",
        "relative"
      )}
    >
      <div className="flex items-center gap-2 mb-4 s1">
        <span className="text-gray-400 s1-primary">{">"}</span>
        <span className="text-gray-300">Terminal</span>
      </div>
      <pre className="bg-gray-900 p-4 rounded-md b1 overflow-x-auto">
        <code>
            {children}
        </code>
      </pre>
      <button
        type="button"
        className="absolute top-3 right-4 text-xl cursor-pointer"
        onClick={handleCopy}
      >
        {copied ? <IoIosCheckmark /> : <IoMdCopy />}
      </button>
    </div>
  );
};

export default TerminalBlock;
