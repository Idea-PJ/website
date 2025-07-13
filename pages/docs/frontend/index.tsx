import TitleComp from "@/components/TitleComp";
import { cn } from "@/utils";
import Link from "next/link";
import { ISectionTitle } from "@/types/common";
import DocLayout from "@/components/Layout/DocLayout";

const hostings = [
  {
    id: "amplify-hosting",
    name: "Amplify",
    url: "/docs/frontend/amplify-hosting",
  },
  {
    id: "hosting-on-vm",
    name: "Virtual Machine",
    url: "/docs/frontend/hosting-on-vm",
  },
  {
    id: "hosting-on-docker",
    name: "Docker",
    url: "/docs/frontend/hosting-on-docker",
  },
];

const sections: ISectionTitle[] = [
  { title: "Stack", id: "stack" },
  { title: "Design System", id: "design-system" },
  { title: "Hosting", id: "hosting" },
];

const HositingList = () => {
  return (
    <ul className="flex flex-col gap-3 mt-5">
      {hostings.map((item) => (
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

const Page = () => {
  return (
    <DocLayout sections={sections}>
      <section className="section-container">
        <TitleComp title="Front End" variant="title" />
        <p className="section-body">
          We used already accomplished web development framework in the
          industry, which is NextJS.
        </p>
        <p className="section-body">
          Web Development and Front End acturally quite similar when you think
          about it.
        </p>
        <ul className="list list-disc section-body">
          <li>Developer need to handle SEO</li>
          <li>Developer have to work on UI & UX for the users</li>
          <li>
            Developer have to think about how the website will work on Client
            Side {`( Browsers )`}
          </li>
          <li>Developer have to think about what to render on Servers</li>
        </ul>
      </section>
      <section className="section-container">
        <TitleComp {...sections[0]} />
        <h5 className="s1-b text-white/75 mt-5">Router</h5>
        <p className="section-body">
          NextJS come with two router which is page router and app router. Both
          page router and app router come with benefits and drawback.
        </p>
        <p className="section-body">
          Page Router come first, because of that most of our ( idea pj ) tech
          stack revolve around the page router.
        </p>
        <h5 className="s1-b text-white/75 mt-5">State Management</h5>
        <p className="section-body">
          State is a special variable in a React component that, when updated,
          automatically informs (or triggers) the component to re-render with
          the new value.
        </p>
        <p className="section-body">
          We group the state into categories, which are
        </p>
        <ul className="list list-disc section-body gap-5">
          <li>
            <h5 className="font-bold mb-2">Global State</h5>
            <p className="mb-2">
              A type of state defined outside of React components, typically in
              standalone stores (e.g. Zustand) or external data layers (e.g.
              TanStack Query). This state is then connected back to React
              components for rendering and interaction.
            </p>
            <p className="mb-5">
              In global state, data is managed outside the React component tree
              and shared across multiple components as needed.
            </p>
            <Link className={cn("flex gap-2 text-[#FF5C00] group")} href="/">
              <span className="group-hover:translate-x-[3px] default-transition">
                {">"}
              </span>
              Learn more
            </Link>
          </li>
          <li>
            <h5 className="font-bold mb-2">Local State</h5>
            <p className="mb-5">
              {
                "A type of state that is defined and managed directly within a React component using hooks like useState or useReducer. This state is scoped to the component where it's declared and is not accessible by other components unless passed down as props or shared via the Context API."
              }
            </p>
            <p className="mb-5">
              {
                "In local state, the data lives and updates inside a single component, making it ideal for handling component-specific logic such as input fields, toggle switches, modal visibility, or temporary UI feedback."
              }
            </p>
            <Link className={cn("flex gap-2 text-[#FF5C00] group")} href="/">
              <span className="group-hover:translate-x-[3px] default-transition">
                {">"}
              </span>
              Learn more
            </Link>
          </li>
        </ul>
        <h5 className="s1-b text-white/75 mt-5">Data Fetching & Mutations</h5>
        <p className="section-body">
          When fetching or mutating data from an API (separate backend), there’s
          one key consideration:
        </p>
        <p className="section-body">
          Does the data need to be available during the initial render (i.e.,
          server-side rendering)?
        </p>
        <ul className="list list-disc section-body gap-5">
          <li>
            <h5 className="font-bold mb-2">If yes ?</h5>
            <p className="mb-5">
              Fetch the data using getServerSideProps to ensure the page is
              pre-rendered with the required data.
            </p>
          </li>
          <li>
            <h5 className="font-bold mb-2">If no ?</h5>
            <p className="mb-5">
              {
                "Use useFetchQuery (an extension of TanStack Query’s useQuery) to handle client-side data fetching after the page loads."
              }
            </p>
          </li>
        </ul>
        <p className="section-body">
          Most mutations happen on the client side, so you generally don’t need
          to handle mutations in server-side logic.
        </p>
        <Link className={cn("flex gap-2 text-[#FF5C00] group")} href="/">
          <span className="group-hover:translate-x-[3px] default-transition">
            {">"}
          </span>
          Learn more
        </Link>
        <h5 className="s1-b text-white/75 mt-5">Styling</h5>
        <p className="section-body">
          Framework is only reliable when there is strong community to help you
          when face issues & errors.
        </p>
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
        <HositingList />
      </section>
    </DocLayout>
  );
};

export default Page;
