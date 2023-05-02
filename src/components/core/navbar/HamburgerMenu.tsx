import Link from "next/link";
import { useState } from "react";
import style from "./navbar.module.css"

function HamburgerMenu() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const openHamburgerMenu = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true);
  };

  return (
      <div className="md:hidden">
        <button
        className={style.button}
        onClick={() => openHamburgerMenu()}
      >    
      menu
      </button>
      <div className={`absolute top-0 left-[-100%] w-screen h-screen text-[#C3A06A] flex flex-col bg-[#000000f1] justify-center items-center duration-500 ${openMenu && style.activeMenu}`}>
        <Link
            href="/"
            className="text-2xl"
            onClick={() => setOpenMenu(false)}
          >
            HOME
          </Link>
          <Link
            href="/"
            className="text-2xl"
            onClick={() => setOpenMenu(false)}
          >
            WORKS
          </Link>
          <Link
            href="/"
            className="text-2xl"
            onClick={() => setOpenMenu(false)}
          >
            ABOUT ME
          </Link>
          <Link href="/"
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
