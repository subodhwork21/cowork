import Image from "next/image";
import Button from "@/app/components/button";
const HeroPage = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between md:py-28 py-4 px-16 ">
      <div className="md:w-[50%] w-full flex flex-col md:items-start md:justify-start items-center justify-center md:mb-none mb-12">
        <h1 className="lg:text-[96px] md:leading-[100px] font-bold mb-8 md:text-[64px] text-[50px] md:text-left text-center ">
          Elevate Your Workspace with Cowork
        </h1>
        <p className="md:w-[480px] w-full md:mb-8 mb-12 md:leading-[40px]leading-[40px] text-center md:text-left">
          Welcome to Cowork – where innovation meets collaboration in the heart
          of productivity! Unleash 🚀 your potential in our thoughtfully
          designed coworking spaces, tailored to inspire creativity and foster
          connections.
        </p>
        <Button bgcolor="bg-black" content="Claim Your Spot" />
      </div>
      <div className="md:w-[50%] w-full">
        <Image
          className="object-fill"
          src={"/images/heroimage.png"}
          height={640}
          width={640}
          alt="heroimage"
        ></Image>
      </div>
    </div>
  );
};

export default HeroPage;
