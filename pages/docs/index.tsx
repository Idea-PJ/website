import HeaderComp from "@/components/HeaderComp";
import SideNav from "@/components/SideNav";

const DocPage = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <HeaderComp/>
      <main className="w-screen flex justify-between px-[65px]">
        <SideNav />
        <article className="w-[700px] min-h-screen h-max py-[65px] flex flex-col gap-[35px]">
          <section className="flex flex-col gap-[8px]">
            <h1 className="title1-primary">Getting Started</h1>
            <p className="b1 text-white/70">
              Our goal to make sure the project meet industry standard without
              overusing the resources.
            </p>
          </section>
          <section className="flex flex-col gap-[8px]">
            <h2 className="h2-primary">Front End</h2>
            <p className="b1 text-white/70">
              Our goal to make sure the project meet industry standard without
              overusing the resources.
            </p>
            <p className="b1 text-white/70">
              Our goal to make sure the project meet industry standard without
              overusing the resources.
            </p>
            <p className="b1 text-white/70">
              Our goal to make sure the project meet industry standard without
              overusing the resources.
            </p>
          </section>
          <section className="flex flex-col gap-[8px]">
            <h2 className="h2-primary">Back End</h2>
            <p className="b1 text-white/70">
              Our goal to make sure the project meet industry standard without
              overusing the resources.
            </p>
            <p className="b1 text-white/70">
              Our goal to make sure the project meet industry standard without
              overusing the resources.
            </p>
            <p className="b1 text-white/70">
              Our goal to make sure the project meet industry standard without
              overusing the resources.
            </p>
          </section>
          <section className="flex flex-col gap-[8px]">
            <h2 className="h2-primary">Git</h2>
            <p className="b1 text-white/70">
              Our goal to make sure the project meet industry standard without
              overusing the resources.
            </p>
            <p className="b1 text-white/70">
              Our goal to make sure the project meet industry standard without
              overusing the resources.
            </p>
            <p className="b1 text-white/70">
              Our goal to make sure the project meet industry standard without
              overusing the resources.
            </p>
          </section>
        </article>
        <aside className="w-[300px] min-h-screen h-max"></aside>
      </main>
    </div>
  );
};

export default DocPage;
