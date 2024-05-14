import Image from "next/image";

const BrandPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 py-20 px-16">
        <p>Trusted by Leading Companies</p>
        <div className="flex flex-row items-center justify-between gap-16">
          <Image
            src={"/logos/logo1.png"}
            alt="logo1"
            width={149}
            height={14}
          ></Image>
          <Image
            src={"/logos/logo3.png"}
            alt="logo1"
            width={149}
            height={14}
          ></Image>
          <Image
            src={"/logos/logo3.png"}
            alt="logo1"
            width={149}
            height={14}
          ></Image>
          <Image
            src={"/logos/logo4.png"}
            alt="logo1"
            width={149}
            height={14}
          ></Image>
        </div>
      </div>
    </>
  );
};

export default BrandPage;
