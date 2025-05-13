import { cn } from "@/utils";
import React, { ReactNode, useState } from "react";
import { IoIosCheckmark, IoMdCopy } from "react-icons/io";

type ICMD = {
  copy: string;
  code: ReactNode | ReactNode[];
  comment?: string;
};

type IProps = {
  cmd: ICMD | ICMD[];
};

const Prompt: React.FC<ICMD> = ({ code, copy, comment }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = (copy: string) => {
    navigator.clipboard.writeText(copy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2s
  };
  return (
    <pre className="bg-gray-900 p-4 rounded-md b1 overflow-x-auto relative">
      {comment && (
        <>
          <div className="s1 text-gray-500 mb-3">
            {"//"}&nbsp;{comment}
          </div>
          
        </>
      )}
      <code>{code}</code>
      <button
        type="button"
        className="absolute right-4 text-xl cursor-pointer"
        onClick={() => handleCopy(copy)}
      >
        {copied ? <IoIosCheckmark /> : <IoMdCopy />}
      </button>
    </pre>
  );
};

const TerminalBlock: React.FC<IProps> = ({ cmd }) => {
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
      <div className="flex flex-col gap-5 mt-5">
        {Array.isArray(cmd) ? (
          <>
            {cmd.map((item, index) => (
              <Prompt {...item} key={index} />
            ))}
          </>
        ) : (
          <Prompt {...cmd} />
        )}
      </div>
    </div>
  );
};

export default TerminalBlock;
