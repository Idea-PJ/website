import TitleComp from "@/components/TitleComp";
import TerminalBlock from "@/components/TerminalBlock";
import { cn } from "@/utils";
import Link from "next/link";
import { ISectionTitle } from "@/types/common";
import LinkBox from "@/components/LinkBox";
import DocLayout from "@/components/Layout/DocLayout";

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

const sections: ISectionTitle[] = [
  { title: "Installation", id: "installation" },
  { title: "What is Idea PJ?", id: "what-is-ideapj" },
  { title: "Frameworks", id: "frameworks" },
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
    <DocLayout sections={sections}>
      <section className="section-container">
        <TitleComp title="Getting Started" variant="title" />
        <p className="section-body">
          Our goal is to make sure that your project delivers clients
          requirements without compromising the quality.
        </p>
        <p className="section-body">
          PJ framework are build with progressive, scable & community in mind.
        </p>
        <h5 className="s1-b text-white/75 mt-5">Progressive</h5>
        <p className="section-body">
          By progress, we mean that our frameworks are design to grow with you.
          Either you are fresher into the industry or experince senior who is in
          field for decades, our frameworks are design to embrace productivity
        </p>
        <h5 className="s1-b text-white/75 mt-5">Scable</h5>
        <p className="section-body">
          Enterpise systems needs to scable. By scable we mean project need to
          efficient & need to be able to add more developer when needed.
        </p>
        <h5 className="s1-b text-white/75 mt-5">Community</h5>
        <p className="section-body">
          Framework is only reliable when there is strong community to help you
          when face issues & errors.
        </p>
      </section>
      <section className="section-container">
        <TitleComp {...sections[0]} />
        <p className="section-body">
          PJ come with its own cli which you can use to create, update, matain &
          monitor your projects.
        </p>
        <p className="section-body">
          First you need to install our cli globally on your machine.
        </p>
        <TerminalBlock
          cmd={{
            copy: "npm i @ideapj/cli -g",
            comment: "install cli globally",
            code: (
              <>
                <span className="text-red-400">npm</span>{" "}
                <span className="text-teal-400">i</span>{" "}
                <span className="text-gray-400">@ideapj/cli</span>{" "}
                <span className="text-yellow-400">-g</span>{" "}
              </>
            ),
          }}
        />
        <div className="flex flex-col gap-3 mt-5">
          <LinkBox
            text="Continue developmening Front End"
            url="/docs/frontend"
          />
          <LinkBox text="Continue developmening Back End" url="/docs/backend" />
        </div>
      </section>
      <section className="section-container">
        <TitleComp {...sections[1]} />
        <p className="section-body">
          Idea PJ consist of methologies, frameworks & tools that make sure
          development team delivers what client needs
        </p>
        <p className="section-body">
          Idea PJ is currently matained by mutliple companies.
        </p>
        <CompanyLinks />
      </section>
      <section className="section-container">
        <TitleComp {...sections[2]} />
        <p className="section-body">
          PJ frameworks add more structure on other frameworks instead of trying
          to build everything from stretch.
        </p>

        <p className="section-body">
          {" "}
          In that way developers who join to company are already familer with
          the frameworks & tools. Because of that we are able to reduce onboard
          time for developer to join the project or starting new project.
        </p>
        <FrameworkList />
      </section>
    </DocLayout>
  );
};

export default DocPage;
