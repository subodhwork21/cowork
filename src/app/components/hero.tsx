import Image from "next/image";
import Button from "@/app/components/button";
const HeroPage = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-between md:py-28 py-4 px-16 ">
      <div className="lg:w-[50%] w-full flex flex-col lg:items-start lg:justify-start items-center justify-center lg:mb-none mb-12">
        <h1 className="lg:text-[96px]  lg:leading-[100px] font-bold mb-8 md:text-[50px] text-[50px] lg:text-left text-center leading-[60px]">
          Elevate Your Workspace with Cowork
        </h1>
        <p className="lg:w-[480px] w-full lg:mb-8 mb-12 lg:leading-[40px]leading-[40px] text-center lg:text-left">
          Welcome to Cowork – where innovation meets collaboration in the heart
          of productivity! Unleash 🚀 your potential in our thoughtfully
          designed coworking spaces, tailored to inspire creativity and foster
          connections.
        </p>
        <Button bgcolor="bg-black" content="Claim Your Spot" />
      </div>
      <div className="lg:w-[50%] w-full">
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
