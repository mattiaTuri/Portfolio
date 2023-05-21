import Container from "@/components/shared/Container";
import SocialContainer from "./SocialContainer";
import CustomButton from "@/components/shared/CustomButton";
import { social } from "../../../data/social";

function Contacts() {
  return (
    <Container>
      <div
        id="contacts"
        className="w-full flex flex-col items-center p-8 pt-40"
      >
        <div className="border-b border-[#faa916]">
          <h1 className="text-2xl md:text-3xl">CONTACTS</h1>
        </div>
        <div className="pt-20 flex flex-col items-center">
          <span className="text-sm md:text-base pb-4">
            Feel free to contact me
          </span>
          <CustomButton
            href="/assets/pdf/TurinaMattiaCV.pdf"
            title="GET CV"
            icon="ph:read-cv-logo-bold"
          />
        </div>
        <div className="pt-20 flex flex-col items-center">
          <span className="text-sm md:text-base">E-mail</span>
          <h2 className="text-baase md:text-2xl lg:text-3xl pt-4">
            turina.mattia@gmail.com
          </h2>
        </div>
        <SocialContainer social={social} />
      </div>
    </Container>
  );
}

export default Contacts;
