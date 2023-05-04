import Container from "@/components/shared/Container";
import SocialContainer from "./SocialContainer";
import CustomButton from "@/components/shared/CustomButton";

function Contacts() {
  return (
    <Container>
      <div className="w-full flex flex-col items-center p-8 pt-40">
        <div className="border-b border-[#faa916]">
          <h1 className="text-sm md:text-base">03 - CONTACTS</h1>
        </div>
        <div className="pt-20 flex flex-col items-center">
          <span className="text-sm md:text-base">E-mail</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl pt-4">
            turina.mattia@gmail.com
          </h2>
        </div>
        <SocialContainer />
        <div className="pt-20 flex flex-col">
          <span className="text-sm md:text-base pb-4">
            Feel free to contact me
          </span>
          <CustomButton href="" title="GET CV" />
        </div>
      </div>
    </Container>
  );
}

export default Contacts;
