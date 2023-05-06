import Link from "next/link";
import Image from "next/image";
import { Project } from "@/models/project";
import { Icon } from "@iconify/react";

function ImageContainer({ project }: { project: Project }) {
  const { title, subtitle, description, technology, img, imgPosition } =
    project;

  return (
    <div className="relative mt-20">
      <Link href="" className="relative">
        <div className=" w-full block overflow-hidden relative">
          <div className="h-full absolute lg:hover:scale-110 duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)] z-10">
            <Image
              src={img}
              alt=""
              style={{ objectPosition: imgPosition }}
              className="h-full object-cover opacity-20"
            />
          </div>
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
                    <li key={index}>
                      <span className="text-sm">{elem}</span>
                    </li>
                  );
                })}
              </ol>
              <div className="py-4">
                <button className="text-[#fbe094] hover:text-[#faa916] duration-300">
                  <Icon icon="akar-icons:github-fill" className="h-8 w-8" />
                </button>
                <button className="text-[#fbe094] hover:text-[#faa916] duration-300 pl-4">
                  <Icon icon="pajamas:live-preview" className="h-8 w-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ImageContainer;
