import LinkBox from "@/components/LinkBox";
import TitleComp from "@/components/TitleComp";
import LearnLayout from "@/layouts/LearnLayout";

const paths = [
  {
    id: "fontend",
    name: "Front End",
    url: "/learn/frontend",
  },
  {
    id: "backend",
    name: "Back End",
    url: "/learn/backend",
  },
  {
    id: "git",
    name: "Git",
    url: "/learn/git",
  },
  {
    id: "dev-ops",
    name: "DevOps",
    url: "/learn/dev-ops",
  },
  {
    id: "web-design",
    name: "Web Design",
    url: "/learn/web-design",
  },
  {
    id: "dsa",
    name: "DSA",
    url: "/learn/web-design",
  },
  {
    id: "design-patterns",
    name: "Design Patterns",
    url: "/learn/design-patterns",
  },
  {
    id: "react-native",
    name: "React Native",
    url: "/learn/react-native",
  },
];

const Page: React.FC = () => {
  return (
    <LearnLayout>
      <section className="section-container">
        <TitleComp title="Learning Paths" variant="title" />
        <div className="grid grid-cols-3 gap-5 mt-5">
          {paths.map((item) => (
            <LinkBox {...item} text={item.name} key={item.id} />
          ))}
        </div>
      </section>
    </LearnLayout>
  );
};

export default Page;
