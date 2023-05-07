import Link from "next/link";
import { useState } from "react";
import style from "./navbar.module.css";
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
            className={`h-[20px] flex flex-col justify-between relative duration-700 ease text-white z-10 ${
              openMenu && style.buttonAnim
            }`}
            onClick={() => openHamburgerMenu()}
          >
            <span
              className={`h-[2px] w-[25px] bg-[#faa916] duration-300 ease delay-100 ${
                openMenu && style.firstLineAnim
              }`}
            ></span>
            <span
              className={`h-[2px] w-[25px] bg-[#faa916] duration-300 ease delay-100  ${
                openMenu && style.secondLineAnim
              }`}
            ></span>
            <span
              className={`h-[2px] w-[25px] bg-[#faa916] duration-300 ease delay-100  ${
                openMenu && style.thirdLineAnim
              }`}
            ></span>
          </button>
        </nav>
      </Container>
      <div
        className={`absolute top-0 left-[-100%] w-screen h-screen text-[#C3A06A] flex flex-col bg-black justify-center items-center duration-500 ${
          openMenu && style.activeMenu
        }`}
      >
        <Link href="/" className="text-2xl" onClick={() => setOpenMenu(false)}>
          HOME
        </Link>
        <Link
          href="/"
          className="text-2xl py-10"
          onClick={() => setOpenMenu(false)}
        >
          PROJECTS
        </Link>
        <Link href="/" className="text-2xl" onClick={() => setOpenMenu(false)}>
          CONTACTS
        </Link>
      </div>
    </div>
  );
}

export default HamburgerMenu;
