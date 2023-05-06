import Link from "next/link";
import Image from "next/image";
import { Project } from "@/models/project";
import { Icon } from "@iconify/react";
import CustomButton from "@/components/shared/CustomButton";

function ImageContainer({ project }: { project: Project }) {
  const { title, subtitle, description, technology, img, imgPosition } =
    project;

  return (
    <div className="relative mt-20">
      <div className="relative">
        <div className=" w-full block overflow-hidden relative">
          <Link
            href=""
            className="h-full absolute lg:hover:scale-110 duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)] z-10"
          >
            <Image
              src={img}
              alt=""
              style={{ objectPosition: imgPosition }}
              className="h-full object-cover opacity-50 lg:opacity-20"
            />
          </Link>
          <div className="hidden absolute w-full h-full lg:flex flex-col justify-center items-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl skew-y-[-5deg]">
              {title.toUpperCase()}
            </h2>
            <h3 className="text-sm md:text-base lg:text-2xl skew-y-[-5deg]">
              {subtitle}
            </h3>
          </div>
          <div className="p-10 relative flex flex-col bg-[#0a0903b4] h-full lg:w-80 z-20">
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
                        className="h-8 w-8 mr-4"
                        color="#fbe094"
                      />
                      <span className="text-sm">{elem.name}</span>
                    </li>
                  );
                })}
              </ol>
              <div className="py-4">
                <div className="py-2">
                  <CustomButton href="" title="GIT HUB" />
                </div>
                <div className="py-2">
                  <CustomButton href="" title="VIEW PROJECT" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageContainer;
