"use client";
import React from "react";
import HeroPage from "@/app/components/hero";
import BrandPage from "@/app/components/brand";
import Image from "next/image";
import Button from "@/app/components/button";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const page = () => {
  return (
    <>
      <HeroPage />
      <BrandPage />
      <div className="py-28 md:px-16 px-8 flex flex-col items-center justify-center gap-6 max-w-[1440px] mx-auto">
        <h2 className="lg:text-[48px] md: font-bold md:text-[35px] text-[24px]">
          Why Choose Cowork?
        </h2>
        <div className="grid grid-cols-3 items-start justify-between w-full md:gap-0 gap-8">
          <div className="col-span-3 lg:col-span-1 w-full  flex flex-col justify-center items-center gap-4">
            <Image
              src={"/logos/Planet.png"}
              alt="planet"
              width={48}
              height={48}
            ></Image>
            <p className="text-center lg:text-[24px] text-[16px]">
              Flexible Spaces
            </p>
            <p className="text-center">
              Whether you are a solopreneur, startup, or an established
              enterprise, our flexible office solutions cater to your evolving
              needs.
            </p>
          </div>
          <div className="w-full col-span-3  lg:col-span-1 flex flex-col justify-center items-center gap-4">
            <Image
              src={"/logos/CreditCard.png"}
              alt="credit_card"
              width={48}
              height={48}
            ></Image>
            <p className="text-center lg:text-[24px] text-[16px]">
              Transparent Pricing
            </p>
            <p className="text-center">
              Choose a plan that suits your budget and business objectives, and
              experience the value of a premium coworking space without breaking
              the bank.
            </p>
          </div>
          <div className="w-full col-span-3 lg:col-span-1 flex flex-col justify-center items-center gap-4">
            <Image
              src={"/logos/UserList.png"}
              alt="user_list"
              width={48}
              height={48}
            ></Image>
            <p className="text-center lg:text-[24px] text-[16px]">
              Tailored Memberships
            </p>
            <p className="text-center">
              Whether you prefer the flexibility of a hot desk or the
              exclusivity of a private office, Cowork offers tailored solutions
              to suit every working style.
            </p>
          </div>
        </div>
      </div>
      <section className="w-full flex flex-col items-center justify-center">
        <div className="max-w-[768px] w-full flex flex-col items-center justify-center gap-4 md:px-0 px-[20px]">
          <span>-</span>
          <p className="text-[12px] font-bold uppercase">A Virtual Tour</p>
          <h2 className="lg:text-[48px] md:text-[35px] text-[24px] text-center font-bold">
            Explore Cowork Through Our Lens
          </h2>
          <p className="text-center text-[16px] md:text-[13px] mb-8">
            Experience the essence of Cowork before setting foot in our dynamic
            spaces. Our immersive video tour gives you a sneak peek into the
            vibrant atmosphere, cutting-edge facilities, and collaborative
            energy that define the Cowork experience.
          </p>
          <Button content="Explore Spaces" bgcolor="bg-white" />
        </div>

        <div className="mt-20 relative px-5">
          <Image
            className="md:w-[1312px] md:h-[700px] w-full h-[320px]"
            src={"/images/Image.png"}
            width={1312}
            height={700}
            alt="videoimage"
          ></Image>
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <Image
              src={"/logos/Play Button.png"}
              alt="play_btn"
              height={128}
              width={102.4}
            ></Image>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto mt-20 w-full grid grid-cols-2 items-center justify-between md:px-16 md:gap-4 gap-10 py-28 px-8">
          <div className="md:col-span-1 col-span-2">
            <p className="text-[12px] mb-4 uppercase font-bold md:text-left text-center">
              Cowork in Numbers
            </p>
            <h2 className="lg:text-[48px] font-bold md:text-[35px] text-[24px] md:text-left text-center">
              Transformative Statistics That Speak Volumes
            </h2>
            <div className="grid grid-cols-2 gap-4 mt-8 items-end">
              <div className="flex md:items-start justify-center flex-col items-center">
                <p className="text-[48px] font-bold">240%</p>
                <p>Community Growth</p>
              </div>
              <div className="flex md:items-start justify-center flex-col items-center">
                <p className="text-[48px] font-bold">99%</p>
                <p> Technology Uptime </p>
              </div>
              <div className="flex md:items-start justify-center flex-col items-center">
                <p className="text-[48px] font-bold">50%</p>
                <p>Happy Members</p>
              </div>
              <div className="flex md:items-start justify-center flex-col items-center">
                <p className="text-[48px] font-bold">100%</p>
                <p>Renewable Energy Sources</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center md:col-span-1 col-span-2">
            <Image
              // className="md:col-span-1 col-span-2"
              src={"/images/statImage.png"}
              alt="statImage"
              width={616}
              height={640}
            ></Image>
          </div>
        </div>

        <div className="md:px-16 py-28 px-5 w-full flex-col max-w-[1440px] mx-auto">
          <p className="text-[12px] w-full text-center font-bold uppercase">
            Cowork in Words
          </p>
          <h2 className="md:text-[48px] text-[24px] w-full text-center font-bold">
            Hear It from Our Clients
          </h2>
          <div className="md:hidden mt-[72px] flex justify-center items-center w-full">
            <Swiper
              spaceBetween={50}
              slidesPerView={"auto"}
              className="w-[360px]"
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="lg:col-span-1 w-[360px] col-span-3 py-8 px-8 gap-6 flex flex-col justify-center items-center bg-lightGreen rounded-[24px]">
                  <Image
                    className="rounded-full aspect-square object-cover object-right-top"
                    src={"/images/person1.avif"}
                    width={56}
                    height={56}
                    alt="person1"
                  ></Image>
                  <p className="text-left">
                    The 24/7 access and secure facilities have been incredibly
                    convenient for my teams flexible schedules. We love the
                    coworking space
                  </p>
                  <div className="w-full">
                    <p className="text-center font-bold">Liam Brown</p>
                    <p className="text-center">
                      Software Engineer, TechStartup Innovations
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="lg:col-span-1 w-[360px] col-span-3 py-8 px-8 gap-6 flex flex-col justify-center items-center bg-lightGray rounded-[24px] ">
                  <Image
                    className="rounded-full aspect-square object-cover object-right-top"
                    src={"/images/person2.png"}
                    width={56}
                    height={56}
                    alt="person1"
                  ></Image>
                  <p className="text-left">
                    The aesthetics of Cowork are inspiring. The attention to
                    detail in the design creates an atmosphere that sparks
                    creativity. Its a place where ideas flow effortlessly, and
                    collaboration happens organically.
                  </p>
                  <div className="w-full">
                    <p className="text-center font-bold">Liam Brown</p>
                    <p className="text-center">
                      Software Engineer, TechStartup Innovations
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="lg:col-span-1 w-[360px] col-span-3 py-8 px-8 gap-6 flex flex-col justify-center items-center bg-skyBlue rounded-[24px]">
                  <Image
                    className="rounded-full aspect-square object-cover object-right-top"
                    src={"/images/person3.avif"}
                    width={56}
                    height={56}
                    alt="person1"
                  ></Image>
                  <p className="text-left">
                    As a freelance designer, I was getting tired of working from
                    home or coffee shops. The coworking space has provided me
                    with a productive and professional environment to focus on
                    my work
                  </p>
                  <div className="w-full">
                    <p className="text-center font-bold">Michael Thompson</p>
                    <p className="text-center">Graphic Designer, DesignCo</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="py-8 px-8 gap-6 flex flex-col justify-center items-center bg-shinyPink rounded-[24px] w-[360px]">
                  <Image
                    className="rounded-full aspect-square object-cover object-right-top"
                    src={"/images/person1.avif"}
                    width={56}
                    height={56}
                    alt="person1"
                  ></Image>
                  <p className="text-left">
                    The coworking space has been a wonderful resource for my
                    team. The open floor plan and dedicated private offices
                    allow us to collaborate and concentrate as needed.
                  </p>
                  <div className="w-full">
                    <p className="text-center font-bold">David Wilson</p>
                    <p className="text-center">
                      Project Manager, SoftwareSolutions LLC
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="py-8 px-8 gap-6 flex flex-col justify-center items-center bg-lightOrange rounded-[24px] w-[360px]">
                  <Image
                    className="rounded-full aspect-square object-cover object-right-top"
                    src={"/images/person2.png"}
                    width={56}
                    height={56}
                    alt="person1"
                  ></Image>
                  <p className="text-left">
                    The flexible membership options and amenities like
                    high-speed internet, printers, and meeting rooms have made
                    this coworking space a perfect fit for my small business.
                  </p>
                  <div className="w-full">
                    <p className="text-center font-bold"> Alex Nguyen</p>
                    <p className="text-center">
                      Marketing Consultant, Maverick Marketing
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="grid-cols-3 justify-between items-center gap-16 mt-10 px-[41px] py-5 lg:py-0 md:grid hidden">
            <div className="xl:col-span-1 min-w-[360px] col-span-3 py-8 px-8 gap-6 flex flex-col justify-center items-center bg-lightGreen rounded-[24px]">
              <Image
                className="rounded-full aspect-square object-cover object-right-top"
                src={"/images/person1.avif"}
                width={56}
                height={56}
                alt="person1"
              ></Image>
              <p className="text-left">
                The 24/7 access and secure facilities have been incredibly
                convenient for my teams flexible schedules. We love the
                coworking space
              </p>
              <div className="w-full">
                <p className="text-center font-bold">Liam Brown</p>
                <p className="text-center">
                  Software Engineer, TechStartup Innovations
                </p>
              </div>
            </div>

            <div className="xl:col-span-1 min-w-[360px] col-span-3 py-8 px-8 gap-6 flex flex-col justify-center items-center bg-lightGray rounded-[24px] xl:mb-16">
              <Image
                className="rounded-full aspect-square object-cover object-right-top"
                src={"/images/person2.png"}
                width={56}
                height={56}
                alt="person1"
              ></Image>
              <p className="text-left">
                The aesthetics of Cowork are inspiring. The attention to detail
                in the design creates an atmosphere that sparks creativity. Its
                a place where ideas flow effortlessly, and collaboration happens
                organically.
              </p>
              <div className="w-full">
                <p className="text-center font-bold">Liam Brown</p>
                <p className="text-center">
                  Software Engineer, TechStartup Innovations
                </p>
              </div>
            </div>
            <div className="xl:col-span-1 min-w-[360px] col-span-3 py-8 px-8 gap-6 flex flex-col justify-center items-center bg-skyBlue rounded-[24px] xl:mt-4">
              <Image
                className="rounded-full aspect-square object-cover object-right-top"
                src={"/images/person3.avif"}
                width={56}
                height={56}
                alt="person1"
              ></Image>
              <p className="text-left">
                As a freelance designer, I was getting tired of working from
                home or coffee shops. The coworking space has provided me with a
                productive and professional environment to focus on my work
              </p>
              <div className="w-full">
                <p className="text-center font-bold">Michael Thompson</p>
                <p className="text-center">Graphic Designer, DesignCo</p>
              </div>
            </div>
          </div>
          <div className="grid-cols-2 justify-center items-center gap-16 xl:px-[258px] px-[41px] hidden md:grid xl:mt-0 mt-12">
            <div className="xl:col-span-1 col-span-2 min-w-[360px] py-8 px-8 gap-6 flex flex-col justify-center items-center bg-shinyPink rounded-[24px] ">
              <Image
                className="rounded-full aspect-square object-cover object-right-top"
                src={"/images/person1.avif"}
                width={56}
                height={56}
                alt="person1"
              ></Image>
              <p className="text-left">
                The coworking space has been a wonderful resource for my team.
                The open floor plan and dedicated private offices allow us to
                collaborate and concentrate as needed.
              </p>
              <div className="w-full">
                <p className="text-center font-bold">David Wilson</p>
                <p className="text-center">
                  Project Manager, SoftwareSolutions LLC
                </p>
              </div>
            </div>
            <div className="xl:col-span-1 col-span-2 min-w-[360px] py-8 px-8 gap-6 flex flex-col justify-center items-center bg-lightOrange rounded-[24px] mt-16 ">
              <Image
                className="rounded-full aspect-square object-cover object-right-top"
                src={"/images/person2.png"}
                width={56}
                height={56}
                alt="person1"
              ></Image>
              <p className="text-left">
                The flexible membership options and amenities like high-speed
                internet, printers, and meeting rooms have made this coworking
                space a perfect fit for my small business.
              </p>
              <div className="w-full">
                <p className="text-center font-bold"> Alex Nguyen</p>
                <p className="text-center">
                  Marketing Consultant, Maverick Marketing
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:px-16 px-8 py-16 grid grid-cols-5 gap-16 max-w-[1440px] mx-auto">
          <div className="xl:col-span-2 col-span-5">
            <p className="text-[12px] font-bold md:text-left text-center mb-4 uppercase">
              Frequently Asked Questions
            </p>
            <h2 className="md:text-[35px] lg:text-[48px] text-[24px] font-bold leading-[50px] py-8 xl:text-left text-center">
              Your Roadmap to Coworking Clarity
            </h2>
            <p className="xl:text-left text-center">
              Frequently asked questions ordered by popularity. Remember that if
              the visitor has not committed to the call to action, they may
              still have questions (doubts) that can be answered.
            </p>
          </div>
          <div className="xl:col-span-3 col-span-5">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-bold text-left text-[14px] font-sans">
                  How flexible are Coworks membership plans?
                </AccordionTrigger>
                <AccordionContent className="max-w-[400px]">
                  Frequently asked questions ordered by popularity. Remember
                  that if the visitor has not committed to the call to action,
                  they may still have questions (doubts) that can be answered.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="font-bold text-left text-[14px] font-sans">
                  What kind of events and networking opportunities does Cowork
                  provide?
                </AccordionTrigger>
                <AccordionContent className="max-w-[400px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  amet quam quo consequatur quod animi deleniti enim quia
                  debitis qui eligendi nesciunt neque, aliquam dolor! Quidem aut
                  officia exercitationem temporibus totam saepe corporis vitae.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="font-bold text-left text-[14px] font-sans">
                  Can I tour the Cowork space before committing to a membership?
                </AccordionTrigger>
                <AccordionContent className="max-w-[400px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  amet quam quo consequatur quod animi deleniti enim quia
                  debitis qui eligendi nesciunt neque, aliquam dolor! Quidem aut
                  officia exercitationem temporibus totam saepe corporis vitae.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-bold text-left text-[14px] font-sans">
                  Is Cowork suitable for remote teams and distributed
                  workforces?
                </AccordionTrigger>
                <AccordionContent className="max-w-[400px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  amet quam quo consequatur quod animi deleniti enim quia
                  debitis qui eligendi nesciunt neque, aliquam dolor! Quidem aut
                  officia exercitationem temporibus totam saepe corporis vitae.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="font-bold text-left text-[14px] font-sans">
                  What measures does Cowork take for environmental
                  sustainability?
                </AccordionTrigger>
                <AccordionContent className="max-w-[400px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  amet quam quo consequatur quod animi deleniti enim quia
                  debitis qui eligendi nesciunt neque, aliquam dolor! Quidem aut
                  officia exercitationem temporibus totam saepe corporis vitae.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="font-bold text-left text-[14px] font-sans">
                  Still has questions?
                </AccordionTrigger>
                <AccordionContent className="max-w-[400px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  amet quam quo consequatur quod animi deleniti enim quia
                  debitis qui eligendi nesciunt neque, aliquam dolor! Quidem aut
                  officia exercitationem temporibus totam saepe corporis vitae.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center gap-6 md:px-16 py-[16px] px-5">
          <span>-</span>
          <h1 className="lg:text-[96px] text-[48px] md:text-[65px] text-center font-bold md:leading-[100px] leading-[60px] mb-6">
            Seize The Moment – Join Cowork Today!{" "}
          </h1>
          <p className="text-center text-[13px] lg:px-[336.5px] px-[0px] mb-10">
            Uncover the transformative power of Cowork as echoed by those who
            have made it their professional haven. This is more than finding a
            desk; it is discovering a community that fuels your journey to
            success.
          </p>
          <Button content="Claim Your Spot" bgcolor="bg-black" />
        </div>
        <div className="max-w-[600px] w-full flex flex-col items-center justify-center gap-4 py-20 text-center md:px-0 px-5">
          <p className="text-[12px] font-bold uppercase">Cowork Chronicles </p>
          <h2 className="md:text-[48px] text-[24px] font-bold md:leading-[60px] leading-[35px]">
            Insights, Innovation, and Inspiration
          </h2>
          <p className="text-center text-[13px] max-w-[480px] ">
            Stay updated on the latest trends in coworking, productivity tips,
            and success stories that define the Cowork experience.
          </p>
        </div>

        <div className="max-w-[1440px] flex lg:flex-row flex-col justify-center items-center lg:gap-4 lg:px-16 px-8 gap-10">
          <div className="">
            <Image
              className="rounded-3xl"
              src={"/images/laptop.jpg"}
              alt="Sitting together with laptop"
              width={416}
              height={300}
            ></Image>
            <div className="mt-6 flex justify-start lg:items-center items-left gap-4 w-full">
              <p className="bg-skyBlue font-bold py-[6px] px-[8px] rounded-xl">
                Trending
              </p>
              <p>7 min read</p>
            </div>
            <h3 className="mt-6 text-[24px] font-bold">
              Navigating the Future: Trends in Modern Coworking Spaces
            </h3>
            <div className="mt-8 flex justify-start items-center gap-2">
              <p>Read more</p>
              <Image
                src={"/logos/Chevron Right.png"}
                width={24}
                height={24}
                alt="right chevron"
              ></Image>
            </div>
          </div>
          <div className="">
            <Image
              className="rounded-3xl"
              src={"/images/laptop2.jpg"}
              alt="Sitting together with laptop"
              width={416}
              height={300}
            ></Image>
            <div className="mt-6 flex justify-start items-center gap-4 ">
              <p className="bg-shinyPink font-bold py-[6px] px-[8px] rounded-xl">
                Productivity
              </p>
              <p>5 min read</p>
            </div>
            <h3 className="mt-6 text-[24px] font-bold">
              Mastering Productivity: Tips from Cowork High Achievers
            </h3>
            <div className="mt-8 flex justify-start items-center gap-2">
              <p>Read more</p>
              <Image
                src={"/logos/Chevron Right.png"}
                width={24}
                height={24}
                alt="right chevron"
              ></Image>
            </div>
          </div>
          <div className="">
            <Image
              className="rounded-3xl"
              src={"/images/laptop3.jpg"}
              alt="Sitting together with laptop"
              width={416}
              height={300}
            ></Image>
            <div className="mt-6 flex justify-start items-center gap-4 ">
              <p className="bg-lightGreen font-bold py-[6px] px-[8px] rounded-xl">
                Talk
              </p>
              <p>10 min read</p>
            </div>
            <h3 className="mt-6 text-[24px] font-bold">
              Tech Talk: The Backbone of Cowork Seamless Experience
            </h3>
            <div className="mt-8 flex justify-start items-center gap-2">
              <p>Read more</p>
              <Image
                src={"/logos/Chevron Right.png"}
                width={24}
                height={24}
                alt="right chevron"
              ></Image>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <Button content="View All" bgcolor="bg-white"></Button>
        </div>
      </section>
    </>
  );
};

export default page;
