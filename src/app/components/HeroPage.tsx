import Image from "next/image";
import Button from "./Button";
const HeroPage = () => {
  return (
    <div className="flex flex-row items-center justify-between py-28 px-16">
      <div className="w-[50%] flex flex-col items-start justify-start">
        <p className="text-[96px] leading-[100px] font-bold mb-8">
          Elevate Your Workspace with Cowork
        </p>
        <p className="w-[480px] mb-8">
          Welcome to Cowork – where innovation meets collaboration in the heart
          of productivity! Unleash 🚀 your potential in our thoughtfully
          designed coworking spaces, tailored to inspire creativity and foster
          connections.
        </p>
        <Button bgcolor="bg-black" content="Claim Your Spot" />
      </div>
      <div className="w-[50%]">
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
