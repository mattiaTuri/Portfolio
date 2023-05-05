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
        <div className="h-80 w-full block overflow-hidden relative">
          <div className="absolute w-full h-full flex flex-col justify-center items-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl skew-y-[-5deg]">
              {title.toUpperCase()}
            </h2>
            <h3 className="text-sm md:text-base lg:text-2xl skew-y-[-5deg]">
              {subtitle}
            </h3>
          </div>
          <div className="h-full lg:hover:scale-110 duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]">
            <Image
              src={img}
              alt=""
              style={{ objectPosition: imgPosition }}
              className="h-full object-cover opacity-20"
            />
          </div>
        </div>
      </Link>
      <div className="p-4 md:flex lg:absolute lg:top-0 lg:flex-col lg:bg-[#0a090391] lg:h-full lg:w-80">
        <div className="py-4">
          <p className="text-sm">{description}</p>
        </div>
        <div className="flex flex-col">
          <ol className="flex flex-col py-4">
            {technology.map((elem) => {
              return (
                <li>
                  <span className="text-sm">{elem}</span>
                </li>
              );
            })}
          </ol>
          <div className="py-4">
            <Link
              href=""
              className="text-[#fbe094] hover:text-[#faa916] duration-300"
            >
              <Icon icon="akar-icons:github-fill" className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageContainer;
