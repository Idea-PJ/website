

import HeaderComp from "@/components/HeaderComp";
import { ReactNode } from "react";
import SEOHeaders, { ISEO } from "@/components/SEOHeaders";
import FooterComp from "@/components/Footer";

interface IProps {
  title?: string;
  children: ReactNode | ReactNode[];
  seo?: ISEO;
}

const LearnLayout: React.FC<IProps> = ({ children, seo }) => {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <HeaderComp />
      <SEOHeaders {...seo} />
      <main className="w-screen flex justify-center px-[65px]">
        
        <article className="article-container">{children}</article>
       
      </main>
      <FooterComp />
    </div>
  );
};

export default LearnLayout;
