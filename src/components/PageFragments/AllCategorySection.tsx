"use client";
import React, { useState } from "react";
import Picture from "../picture/Picture";
import hero from "../../../public/images/herobg.jpg";
import { useRouter } from "next/navigation";
import { FaTruckFast } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { FaTags } from "react-icons/fa";
import { RiExchangeDollarFill } from "react-icons/ri";

const AllCategorySection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const router = useRouter();

  const slides = [
    {
      heading: "Let’s Help You Get Your",
      subheading: "Right Accessories.",
      description:
        "Behold the TechFit Pro laptop, the ultimate companion for modern living. ",
    },
    // {
    // 	heading: "Premium Hardware",
    // 	subheading: "Best Prices",
    // 	description: "Shop the latest tech accessories",
    // },
    // {
    // 	heading: "Fast Delivery",
    // 	subheading: "Nationwide",
    // 	description: "Get products delivered to your door",
    // },
  ];

  return (
    <>
      <div
        className="relative w-full overflow-hidden mt-[-50px]"
        style={{ height: "420px" }}
      >
        {/* Background Image */}
        <Picture
          src={hero}
          alt="Quality Accessories"
          className="w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-2">
            {slides[activeSlide].heading}
            <br />
            <span className="text-white">{slides[activeSlide].subheading}</span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base mt-2 mb-8">
            Behold the <span className="text-[#3498DB]">TechFit</span> Pro
            laptop, the ultimate
            <br /> companion for modern living.
          </p>
          <button
            onClick={() => {
              router.push("/category");
            }}
            className="px-3 py-2 bg-shop rounded-sm text-white font-semibold"
          >
            Learn more
          </button>

          {/* Dot Pagination */}
          {/* <div className='flex items-center gap-2'>
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        className={`rounded-full transition-all duration-300 ${
                            i === activeSlide
                                ? "w-6 h-2.5 bg-shop"
                                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
                        }`}
                    />
                ))}
            </div> */}
        </div>
      </div>
      <section className="relative py-20">
        {/* Background image */}
        <div className="absolute inset-0">
          {/* <Picture
            src={hero}
            alt="Quality "
            className="w-full h-full object-cover"
          /> */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-[#BBDEFB] rounded-2xl p-6 shadow-lg">
              <div className="w-14 h-14 flex items-center justify-center bg-shop rounded-xl mb-4">
                <FaTruckFast className="w-6 h-6" color="white" />
              </div>

              <p className="text-gray-700 leading-relaxed text-sm">
                Offering expedited shipping options and ensuring timely delivery
                of orders, with tracking information available for customers.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#BBDEFB] rounded-2xl p-6 shadow-lg">
              <div className="w-14 h-14 flex items-center justify-center bg-shop rounded-xl mb-4">
                <MdSupportAgent className="w-6 h-6" color="white" />
              </div>

              <p className="text-gray-700 leading-relaxed text-sm">
                Providing multiple channels for customer support, including live
                chat, email, and phone support, to address any queries or issues
                promptly.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#BBDEFB] rounded-2xl p-6 shadow-lg">
              <div className="w-14 h-14 flex items-center justify-center bg-shop rounded-xl mb-4">
                <FaTags className="w-6 h-6" color="white" />
              </div>

              <p className="text-gray-700 leading-relaxed text-sm">
                Offering discounts, coupons, and promotional offers to
                incentivize purchases and reward loyal customers.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#BBDEFB] rounded-2xl p-6 shadow-lg">
              <div className="w-14 h-14 flex items-center justify-center bg-shop rounded-xl mb-4">
                <RiExchangeDollarFill className="w-6 h-6" color="white"  />

              </div>

              <p className="text-gray-700 leading-relaxed text-sm">
                Providing a hassle-free return policy and easy refund process
                for customers in case they are not satisfied with their
                purchases.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllCategorySection;
