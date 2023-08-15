import Container from "@/components/shared/Container";
import Link from "next/link";

function DesktopMenu() {
  return (
    <Container>
      <nav className="hidden w-full md:flex md:items-center md:justify-between p-8 ">
        <div className="overflow-hidden relative flex">
          <Link
            href="#home"
            className="text-[#fbe094] text-sm relative duration-300 hover:translate-y-full before:content-['TM'] before:absolute before:top-[-100%] before:text-[#faa916]"
            scroll={false}
          >
            TM
          </Link>
        </div>

        <div className="overflow-hidden relative flex">
          <Link
            href="#home"
            className="px-4 text-[#fbe094] text-sm relative duration-300 lg:hover:translate-y-full lg:before:content-['HOME'] before:absolute before:top-[-100%] before:text-[#faa916]"
            scroll={false}
          >
            HOME
          </Link>
          <Link
            href="#projects"
            className="px-4 text-sm text-[#fbe094] relative duration-300 lg:hover:translate-y-full lg:before:content-['PROJECTS'] before:absolute before:top-[-100%] before:text-[#faa916]"
            scroll={false}
          >
            PROJECTS
          </Link>
          <Link
            href="#contacts"
            className="pl-4 text-sm text-[#fbe094] relative duration-300 lg:hover:translate-y-full lg:before:content-['CONTACTS'] before:absolute before:top-[-100%] before:text-[#faa916]"
            scroll={false}
          >
            CONTACTS
          </Link>
        </div>
      </nav>
    </Container>
  );
}

export default DesktopMenu;
