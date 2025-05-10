import { Poppins, Jersey_15 } from "next/font/google";
import { ReactNode } from "react";

type IProps = {
  children: ReactNode | ReactNode[];
};

const popins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jersey = Jersey_15({
    variable: "--font-jersey",
    subsets: ["latin"],
    weight: "400"
});

const FontRoot: React.FC<IProps> = ({ children }) => {
  return <div className={`${popins.variable} ${jersey.variable} font-sans`}>{children}</div>;
};

export default FontRoot;
