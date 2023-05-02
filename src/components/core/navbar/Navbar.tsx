import HamburgerMenu from "./HamburgerMenu";
import DesktopMenu from "./DesktopMenu";
import Container from "@/components/shared/Container";

function Navbar() {
  return (
    <header className="fixed w-full z-10">
      <Container>
        <nav className="flex p-8 justify-end w-full">
          <HamburgerMenu />
          <DesktopMenu />
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
