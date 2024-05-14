import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/button";

const Header = () => {
  return (
    <section className="max-w-[1440px] font-regularSans">
      <nav className="flex px-16 py-4  flex-row justify-between items-center">
        <div className="font-extrabold">
          <Link href={"/"}>
            <Image src="/Logo.png" width={120} height={24} alt="logo" />
          </Link>
        </div>
        <ul className="flex justify-between flex-row items-center gap-12">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Events</li>
          <li className="cursor-pointer">
            <Button content="Login" bgcolor="bg-white" />
          </li>
          <li className="cursor-pointer">
            <Button content="Sign Up" bgcolor="bg-black" />
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
