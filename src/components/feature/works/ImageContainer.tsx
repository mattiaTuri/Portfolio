import Link from "next/link";
import Image from "next/image";
import { Project } from "@/models/project";

function ImageContainer({ project }: { project: Project }) {
  const { id, title, subtitle, img, imgPosition } = project;

  return (
    <div className="pt-20">
      <Link href={`works/${id}`} className="h-80 w-full block relative pt-10">
        <div className="absolute w-full h-full flex flex-col justify-center items-center skew-y-[-5deg]">
          <h3 className="text-2xl md:text-3xl lg:text-5xl">
            {title.toUpperCase()}
          </h3>
          <span className="text-base md:text-1xl lg:text-2xl">{subtitle}</span>
        </div>
        <div className="h-full overflow-hidden">
          <Image
            src={img}
            alt=""
            style={{ objectPosition: imgPosition }}
            className="h-full object-cover opacity-10 hover:scale-110 duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
          />
        </div>
      </Link>
    </div>
  );
}

export default ImageContainer;
