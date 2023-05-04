import Link from "next/link";

interface ButtonProps {
  title: string;
  href: string;
}

function CustomButton({ href, title }: ButtonProps) {
  return (
    <button className="border border-[#faa916] p-4 lg:hover:scale-90 duration-300 ease-in-out">
      <Link href={href} target="_blank">
        {title}
      </Link>
    </button>
  );
}

export default CustomButton;
