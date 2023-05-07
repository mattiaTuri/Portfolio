import Container from "@/components/shared/Container";
import Link from "next/link";
import style from "./navbar.module.css";

function DesktopMenu() {
  return (
    <Container>
      <nav className="hidden w-full md:flex md:items-center md:justify-between p-8 ">
        <Link href="/">TM</Link>
        <div className="overflow-hidden relative flex">
          <Link
            href="/"
            className={`px-4 text-[#fbe094] text-sm relative ${style.navLink} duration-300 hover:translate-y-full`}
            data-link="HOME"
          >
            HOME
          </Link>
          <Link
            href="#works"
            className={`px-4 text-sm text-[#fbe094] relative ${style.navLink} duration-300 hover:translate-y-full`}
            data-link="PROJECTS"
          >
            PROJECTS
          </Link>
          <Link
            href="#contacts"
            className={`pl-4 text-sm text-[#fbe094] relative ${style.navLink} duration-300 hover:translate-y-full`}
            data-link="CONTACTS"
          >
            CONTACTS
          </Link>
        </div>
      </nav>
    </Container>
  );
}

export default DesktopMenu;
