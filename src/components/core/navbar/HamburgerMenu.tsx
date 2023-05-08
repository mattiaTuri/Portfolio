import Link from "next/link";
import { useState } from "react";
import Container from "@/components/shared/Container";

function HamburgerMenu() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const openHamburgerMenu = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true);
  };

  return (
    <div className="md:hidden">
      <Container>
        <nav className="flex p-8 justify-between w-full">
          <Link href="/">TM</Link>
          <button
            className={`h-[20px] flex flex-col justify-between relative duration-700 ease z-10 ${
              openMenu && "rotate-180"
            }`}
            onClick={() => openHamburgerMenu()}
          >
            <span
              className={`h-[2px] w-[25px] bg-[#faa916] duration-300 ease delay-100 ${
                openMenu && "origin-bottom-right -rotate-45"
              }`}
            ></span>
            <span
              className={`h-[2px] w-[25px] bg-[#faa916] duration-300 ease delay-100  ${
                openMenu && "opacity-0"
              }`}
            ></span>
            <span
              className={`h-[2px] w-[25px] bg-[#faa916] duration-300 ease delay-100  ${
                openMenu && "origin-top-right rotate-45"
              }`}
            ></span>
          </button>
        </nav>
      </Container>
      <div
        className={`absolute top-0  w-screen h-screen text-[#C3A06A] flex flex-col bg-black justify-center items-center duration-500 ${
          openMenu ? "left-0" : "left-[-100%]"
        }`}
      >
        <Link href="/" className="text-2xl" onClick={() => setOpenMenu(false)}>
          HOME
        </Link>
        <Link
          href="#projects"
          className="text-2xl py-10"
          onClick={() => setOpenMenu(false)}
        >
          PROJECTS
        </Link>
        <Link
          href="#contacts"
          className="text-2xl"
          onClick={() => setOpenMenu(false)}
        >
          CONTACTS
        </Link>
      </div>
    </div>
  );
}

export default HamburgerMenu;
