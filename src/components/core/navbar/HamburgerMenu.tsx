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
        <nav className="flex p-8 justify-end w-full">
          <button
            className={`${style.button} ${openMenu && style.buttonAnim}`}
            onClick={() => openHamburgerMenu()}
          >
            <span
              className={`${style.line} ${openMenu && style.firstLineAnim}`}
            ></span>
            <span
              className={`${style.line} ${openMenu && style.secondLineAnim}`}
            ></span>
            <span
              className={`${style.line} ${openMenu && style.thirdLineAnim}`}
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
          WORKS
        </Link>
        <Link href="/" className="text-2xl" onClick={() => setOpenMenu(false)}>
          CONTACTS
        </Link>
      </div>
    </div>
  );
}

export default HamburgerMenu;
