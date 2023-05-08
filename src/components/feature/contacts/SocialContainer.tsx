import Link from "next/link";
import { Icon } from "@iconify/react";

function SocialContainer() {
  return (
    <div className="pt-20 text-center">
      <div className="pb-4">
        <span className="text-sm md:text-base">Social</span>
      </div>
      <div className="flex overflow-hidden relative">
        <Link
          href="https://github.com/mattiaTuri"
          aria-label="github"
          target="_blank"
          className="w-[100px] md:w-[150px] h-full flex justify-center relative duration-300 lg:hover:translate-y-full before:content-['@mattiaTuri'] before:absolute before:top-[-100%]"
        >
          <Icon icon="akar-icons:github-fill" className="h-8 w-full" />
        </Link>
        <Link
          href="https://www.instagram.com/mattia_turina/"
          aria-label="instagram"
          target="_blank"
          className="w-[100px] md:w-[150px] h-full flex justify-center relative duration-300 lg:hover:translate-y-full before:content-['@mattia_turina'] before:absolute before:top-[-100%]"
        >
          <Icon icon="akar-icons:instagram-fill" className="h-8 w-full" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/mattia-turina-957195192/"
          aria-label="linkedin"
          target="_blank"
          className="w-[100px] md:w-[150px] h-full flex justify-center relative duration-300 lg:hover:translate-y-full before:content-['@mattiaturina'] before:absolute before:top-[-100%]"
        >
          <Icon icon="akar-icons:linkedin-box-fill" className="h-8 w-full" />
        </Link>
      </div>
    </div>
  );
}

export default SocialContainer;
