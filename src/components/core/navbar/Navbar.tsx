import HamburgerMenu from "./HamburgerMenu";
import DesktopMenu from "./DesktopMenu";
import Container from "@/components/shared/Container";

function Navbar() {
  return (
    <header className="fixed w-full z-10">
      <HamburgerMenu />
      <DesktopMenu />
    </header>
  );
}

export default Navbar;
