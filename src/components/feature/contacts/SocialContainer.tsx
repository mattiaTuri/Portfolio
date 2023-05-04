import Link from "next/link";
import { socialLink } from "@/data/social";
import { Icon } from "@iconify/react";
import style from "./contacts.module.css";

function SocialContainer() {
  return (
    <div className="pt-20 text-center">
      <span className="text-sm md:text-base">Social</span>
      <div className="flex pt-4">
        {socialLink.map((social) => {
          return (
            <div
              key={social.id}
              className="overflow-hidden w-[100px] md:w-[150px] flex justify-center"
            >
              <Link
                href={social.link}
                aria-label={social.id}
                target="_blank"
                className={`w-full flex justify-center relative duration-300 lg:hover:translate-y-full ${style.socialAnim}`}
                data-link={social.hoverText}
              >
                <Icon icon={social.classIcon} className="h-8 w-8" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SocialContainer;
