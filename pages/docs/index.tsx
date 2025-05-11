import HeaderComp from "@/components/HeaderComp";
import SectionNav from "@/components/SectionNav";
import SideNav from "@/components/SideNav";
import TerminalBlock from "@/components/TerminalBlock";
import { cn } from "@/utils";
import Link from "next/link";

const companies = [
  {
    id: "potato-rocket",
    name: "Potato Rocket",
    url: "https://potatorocket.co/",
  },
  {
    id: "binary-lab",
    name: "Binary Lab",
    url: "https://binarylab.io/",
  },
  {
    id: "saya",
    name: "Saya",
    url: "https://www.saya.education/",
  },
  {
    id: "sales-sync",
    name: "Sales Sync",
    url: "https://salessync.biz/",
  },
];
const frameworks = [
  {
    id: "fontend",
    name: "Front End",
    url: "/docs/frontend",
  },
  {
    id: "backend",
    name: "Back End",
    url: "/docs/backend",
  },
];

const CompanyLinks = () => {
  return (
    <ul className="flex flex-col gap-3 mt-5">
      {companies.map((item) => (
        <li key={item.id}>
          <Link
            className={cn("s1-b flex gap-2 text-orange-300/80 group")}
            href={item.url}
            target="_blank"
          >
            <span className="s1-p group-hover:translate-x-[3px] default-transition">
              {">"}
            </span>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const FrameworkList = () => {
  return (
    <ul className="flex flex-col gap-3 mt-5">
      {frameworks.map((item) => (
        <li key={item.id}>
          <Link
            className={cn("s1-b flex gap-2 text-teal-300/80 group")}
            href={item.url}
            target="_blank"
          >
            <span className="s1-p group-hover:translate-x-[3px] default-transition">
              {">"}
            </span>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const DocPage = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <HeaderComp />
      <main className="w-screen flex justify-between px-[65px]">
        <SideNav />
        <article className="article-container">
          <section className="section-container">
            <h1 className="title1-primary">Getting Started</h1>
            <p className="section-body">
              Our goal is to make sure that your project delivers clients
              requirements without compromising the quality.
            </p>
            <p className="section-body">
              PJ framework are build with progressive, scable & community in mind.
            </p>
            <h5 className="s1-b text-white/75 mt-5">Progressive</h5>
            <p className="section-body">By progress, we mean that our frameworks are design to grow with you. Either you are fresher into the industry or experince senior who is in field for decades, our frameworks are design to embrace productivity</p>
            <h5 className="s1-b text-white/75 mt-5">Scable</h5>
            <p className="section-body">Enterpise systems needs to scable. By scable we mean project need to efficient & need to be able to add more developer when needed.</p>
            <h5 className="s1-b text-white/75 mt-5">Community</h5>
            <p className="section-body">Framework is only reliable when there is strong community to help you when face issues & errors.</p>
          </section>
          <section className="section-container" id="installation">
            <h2 className="h2-primary">Installation</h2>
            <p className="section-body">
              PJ come with its own cli which you can use to create, update, matain & monitor your projects.
            </p>
            <p className="section-body">
              First you need to install our cli globally on your machine.
            </p>
            <TerminalBlock cmd="npm i @ideapj/cli">
              <span className="text-red-400">npm</span>{" "}
              <span className="text-teal-400">i</span>{" "}
              <span className="text-yellow-400">-g</span>{" "}
              <span className="text-gray-400">@ideapj/cli</span>
            </TerminalBlock>
          </section>
          <section className="section-container" id="what-is-ideapj">
            <h2 className="h2-primary text-white/90">What is Idea PJ?</h2>
            <p className="section-body">
              Idea PJ consist of methologies, frameworks & tools that make sure
              development team delivers what client needs
            </p>
            <p className="section-body">
              Idea PJ is currently matained by mutliple companies.
            </p>
            <CompanyLinks />
          </section>
          <section className="section-container" id="frameworks">
            <h2 className="h2-primary">Frameworks</h2>
            <p className="section-body">
              PJ frameworks add more structure on other frameworks instead of
              trying to build everything from stretch.
            </p>

            <p className="section-body">
              {" "}
              In that way developers who join to company are already familer
              with the frameworks & tools. Because of that we are able to reduce
              onboard time for developer to join the project or starting new
              project.
            </p>
            <FrameworkList />
          </section>
        </article>
        <SectionNav />
      </main>
    </div>
  );
};

export default DocPage;
