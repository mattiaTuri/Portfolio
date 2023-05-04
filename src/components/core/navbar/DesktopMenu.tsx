import Container from "@/components/shared/Container";
import Link from "next/link";
import style from "./navbar.module.css";

function DesktopMenu() {
  return (
    <Container>
      <nav className="hidden w-full md:flex md:items-center md:justify-end p-8 ">
        <div className="overflow-hidden relative flex">
          <Link
            href="/"
            className={`px-4 text-sm relative ${style.navLink} duration-300 hover:translate-y-full`}
            data-link="HOME"
          >
            HOME
          </Link>
          <Link
            href="/"
            className={`px-4 text-sm  relative ${style.navLink} duration-300 hover:translate-y-full`}
            data-link="WORKS"
          >
            WORKS
          </Link>
          <Link
            href="/"
            className={`px-4 text-sm  relative ${style.navLink} duration-300 hover:translate-y-full`}
            data-link="ABOUT ME"
          >
            ABOUT ME
          </Link>
          <Link
            href="/"
            className={`px-4 text-sm  relative ${style.navLink} duration-300 hover:translate-y-full`}
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
