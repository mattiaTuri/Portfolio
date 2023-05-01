import { Container } from "postcss";
import HamburgerMenu from "./HamburgerMenu";
import DesktopMenu from "./DesktopMenu";

function Navbar() {
  return (
    <header className="fixed w-full z-10">
      <HamburgerMenu />
      <DesktopMenu />
    </header>
  );
}

export default Navbar;
