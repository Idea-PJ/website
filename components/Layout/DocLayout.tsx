import { ISectionTitle } from "@/types/common";
import FooterComp from "../Footer";
import HeaderComp from "../HeaderComp";
import SectionNav from "../SectionNav";
import SideNav from "../SideNav";
import { ReactNode } from "react";
import SEOHeaders, { ISEO } from "../SEOHeaders";

interface IProps {
  sections: ISectionTitle[];
  title?: string;
  children: ReactNode | ReactNode[];
  seo?: ISEO;
}

const DocLayout: React.FC<IProps> = ({ sections, children, seo }) => {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <HeaderComp />
      <SEOHeaders {...seo} />
      <main className="w-screen flex justify-between px-[65px]">
        <SideNav />
        <article className="article-container">{children}</article>
        <SectionNav menus={sections} />
      </main>
      <FooterComp />
    </div>
  );
};

export default DocLayout;
