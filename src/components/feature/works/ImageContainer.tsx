import Link from "next/link";
import Image from "next/image";
import { Project } from "@/models/project";
import { Icon } from "@iconify/react";
import CustomButton from "@/components/shared/CustomButton";

function ImageContainer({ project }: { project: Project }) {
  const {
    title,
    subtitle,
    link_github,
    link_preview,
    description,
    technology,
    img,
    imgPosition,
  } = project;

  return (
    <div className="relative mt-20">
      <div className="relative">
        <div className="w-full block overflow-hidden relative">
          <Link
            href={link_preview}
            className="h-full absolute lg:hover:scale-110 duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
            target="_blank"
          >
            <Image
              src={img}
              alt=""
              style={{ objectPosition: imgPosition }}
              className="h-full object-cover opacity-50"
            />
            <div className="hidden absolute top-0 w-full h-full lg:flex flex-col justify-center items-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl skew-y-[-5deg]">
                {title.toUpperCase()}
              </h2>
              <h3 className="text-sm md:text-base lg:text-2xl skew-y-[-5deg]">
                {subtitle}
              </h3>
            </div>
          </Link>
          <div className="p-8 relative flex flex-col bg-[#0a0903b4] h-full lg:w-80 z-20">
            <div className="lg:hidden">
              <h2 className="text-base">{title.toUpperCase()}</h2>
              <h3 className="text-sm md:text-base">{subtitle}</h3>
            </div>
            <div className="py-4">
              <p className="text-sm">{description}</p>
            </div>
            <div className="flex flex-col">
              <ol className="flex flex-col py-4">
                {technology.map((elem, index) => {
                  return (
                    <li key={index} className="flex items-center py-1">
                      <Icon
                        icon={elem.icon}
                        className="h-6 w-6 mr-4"
                        color="#fbe094"
                      />
                      <span className="text-sm">{elem.name}</span>
                    </li>
                  );
                })}
              </ol>
            </div>
            <div className="py-4 w-full flex gap-5 lg:flex-col">
              <CustomButton
                href={link_github}
                title="GITHUB"
                icon="akar-icons:github-fill"
              />
              <CustomButton
                href={link_preview}
                title="VIEW"
                icon="tabler:external-link"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageContainer;
