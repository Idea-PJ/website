import { cn } from "@/utils";
import { useLenis } from "lenis/react";

import { useEffect, useState } from "react";

const sections = ["installation", "what-is-ideapj", "frameworks"];

const SectionNav: React.FC = () => {
  const [active, setActive] = useState<string>("installation");
  const lenis = useLenis();
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el && lenis) {
      lenis.scrollTo(el, { offset: -100 });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      let closestSection = "";
      let minOffset = Number.POSITIVE_INFINITY;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const offset = Math.abs(rect.top); // Distance from top of viewport
          if (offset < minOffset) {
            minOffset = offset;
            closestSection = id; // Keep the one closest to top
          }
        }
      }
      setActive(closestSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // call on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItem = (id: string, label: string) => (
    <button
      type="button"
      onClick={() => handleScrollTo(id)}
      className={cn(
        "s1 text-white/50 default-transition section-nav-item",
        "text-left cursor-pointer",
        active == id ? "text-white/90" : ""
      )}
    >
      {label}
    </button>
  );
  return (
    <aside className={cn("w-[300px] min-h-screen h-max relative")}>
      <div className="flex flex-col mt-[75px] fixed ">
        <h1 className="b1-b text-white/80">On this page</h1>
        <nav className="relative flex flex-col gap-4 mt-5">
          {navItem("installation", "Installation")}
          {navItem("what-is-ideapj", "What is idea pj?")}
          {navItem("frameworks", "Frameworks")}
        </nav>
      </div>
    </aside>
  );
};

export default SectionNav;
