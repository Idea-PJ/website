import { cn } from "@/utils";
import Link from "next/link";

const FooterComp: React.FC = () => {
  return (
    <div
      className={cn(
        "w-screen min-h-[30vh] flex-center",
        "border-t-[1px] border-t-white/10"
      )}
    >
      <footer className={cn("grid grid-cols-2", "w-screen px-[75px]")}>
        <div className="flex flex-col gap-2">
          <h5 className="h2-primary text-white/80">About Us</h5>
          <p className="b1 text-white/60">
            IdeaPJ is an MIT-licensed open source project maintained by <br/> multiple companies.
          </p>
          <p className="s1 text-white/60 mt-5">
            &copy; {(new Date).getFullYear()} copyright MIT by Idea PJ
          </p>
        </div>
        <div className="flex flex-col gap-2 s1 text-white/60">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
        </div>
      </footer>
    </div>
  );
};

export default FooterComp;
