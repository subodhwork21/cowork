import Link from "next/link";
import Image from "next/image";
import Button from "./button";

const Footer = () => {
  return (
    <section className="px-16 py-16 w-full">
      <div className="w-full grid grid-cols-10 bg-black text-white px-12 py-12 rounded-[50px] gap-16">
        <div className="flex flex-col justify-center items-start gap-4 col-span-5 pr-12">
          <Link href={"/"}>
            <Image
              className="invert"
              src="/Logo.png"
              width={120}
              height={24}
              alt="logo"
            />
          </Link>
          <p>
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className="flex flex-row gap-4 w-full">
            <div className="flex flex-col gap-4 w-full">
              <input
                className="outline-none focus:outline-none bg-black text-white"
                type="text"
                placeholder="Enter your email "
              />
              <div className="border border-b-1 w-full"></div>
            </div>
            <div>
              <Button content="Subscribe" bgcolor="bg-white"></Button>
            </div>
          </div>
          <p>
            By subscribing you agree to with our Privacy Policy and provide
            consent to receive updates from our company.
          </p>
        </div>
        <div className="grid grid-cols-3 col-span-5">
          <div className="flex flex-col gap-4 w-full">
            <Link href={""}>
              <p className="uppercase font-bold">Explore More</p>
            </Link>
            <Link href={""}>
              <p className="">Home</p>
            </Link>
            <Link href={""}>
              <p>About </p>
            </Link>
            <Link href={""}>
              <p>Pricing </p>
            </Link>
            <Link href={""}>
              <p>Blog </p>
            </Link>
            <Link href={""}>
              <p>Events </p>
            </Link>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <Link href={""}>
              <p className="uppercase font-bold">Stay Connected</p>
            </Link>
            <Link href={""}>
              <p>Subscribe</p>
            </Link>
            <Link href={""}>
              <p>Member Stories </p>
            </Link>
            <Link href={""}>
              <p>Locations </p>
            </Link>
            <Link href={""}>
              <p>Write for Us </p>
            </Link>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <Link href={""}>
              <p className="uppercase font-bold">Follow Us</p>
            </Link>
            <Link href={""}>
              <p>Facebook</p>
            </Link>
            <Link href={""}>
              <p>Instagram </p>
            </Link>
            <Link href={""}>
              <p>X </p>
            </Link>
            <Link href={""}>
              <p>LinkedIn </p>
            </Link>
            <Link href={""}>
              <p>Youtube </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-12 flex justify-between items-center">
        <p>© 2024 Cowork. All rights reserved.</p>
        <div className="flex flex-row gap-4">
          <Link className="underline" href={""}>
            Privacy Policy
          </Link>
          <Link className="underline" href={""}>
            Terms of Service
          </Link>
          <Link className="underline" href={""}>
            Cookies Settings
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
