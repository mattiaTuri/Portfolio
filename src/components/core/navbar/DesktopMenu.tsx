import Container from "@/components/shared/Container";
import Link from "next/link";

function DesktopMenu() {
  return (
    <Container>
      <nav className="hidden md:flex p-8 justify-between w-full">
        <div className="skew-y-[-5deg]">
          <div>
            <span>TURINA</span>
          </div>
          <div>
            <span>MATTIA</span>
          </div>
        </div>
        <div className="flex items-center">
          <Link href="" className="px-4">
            HOME
          </Link>
          <Link href="" className="px-4">
            WORKS
          </Link>
          <Link href="" className="px-4">
            ABOUT ME
          </Link>
          <Link href="" className="px-4">
            CONTACTS
          </Link>
        </div>
      </nav>
    </Container>
  );
}

export default DesktopMenu;
