import Link from "next/link";
import Image from "next/image";
import { Project } from "@/models/project";

function ImageContainer({ project }: { project: Project }) {
  const { title, subtitle, img, imgPosition } = project;

  return (
    <div className="pt-32">
      <Link href="" className="h-80 w-full block relative">
        <div className="absolute w-full h-full flex flex-col justify-center items-center">
          <h3 className="text-5xl">{title}</h3>
          <span>{subtitle}</span>
        </div>
        <div className="h-full overflow-hidden">
          <Image
            src={img}
            alt=""
            style={{ objectPosition: imgPosition }}
            className="h-full object-cover opacity-20 hover:scale-110 duration-300 ease-[cubic-bezier(0.25, 1, 0.5, 1)]"
          />
        </div>
      </Link>
    </div>
  );
}

export default ImageContainer;
