import Link from "next/link";
import { Icon } from "@iconify/react";
import { Social } from "@/models/social";

function SocialContainer({ social }: { social: Social[] }) {
  return (
    <div className="pt-20 text-center">
      <div className="pb-4">
        <span className="text-sm md:text-base">Social</span>
      </div>
      <div className="flex overflow-hidden relative">
        {social.map((elem: any) => {
          return (
            <Link
              key={elem.id}
              href={elem.link}
              aria-label={elem.id}
              target="_blank"
              className="w-[100px] md:w-[150px] h-full flex justify-center relative duration-300 lg:hover:text-[#fbe094]"
            >
              <Icon icon={elem.classIcon} className="h-8 w-full" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SocialContainer;
