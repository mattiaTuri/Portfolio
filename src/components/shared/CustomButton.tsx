import { Icon } from "@iconify/react";
import Link from "next/link";

interface ButtonProps {
  title: string;
  href: string;
  icon: string;
}

function CustomButton({ href, title, icon }: ButtonProps) {
  return (
    <button className="border border-[#faa916] p-4 lg:hover:scale-90 duration-300 ease-in-out w-full">
      <Link
        href={href}
        target="_blank"
        className="flex justify-center items-center gap-4 text-sm lg:text-base"
      >
        {title}
        <Icon icon={icon} className="h-6 w-6" />
      </Link>
    </button>
  );
}

export default CustomButton;
