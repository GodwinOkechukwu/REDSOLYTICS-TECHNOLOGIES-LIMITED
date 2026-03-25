"use client";
import React from "react";
import Picture from "@src/components/picture/Picture";
import laptop from "../../../../public/images/laptop.png";
import blue from "../../../../public/images/bluespill.png";
import { useRouter } from "next/navigation";


const MachineMaintenance = () => {
	const router = useRouter()
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* LEFT IMAGE */}
          <div className="relative flex justify-center lg:justify-start">
            {/* BLUE STRIPE IMAGE */}
            <Picture
              src={blue}
              alt="Shop daily needs"
              className="absolute w-[95%] max-w-md -left-6 top-10 opacity-90"
            />

            {/* PRODUCT IMAGE */}
            <Picture
              src={laptop}
              alt="Shop daily needs"
              className="relative w-[90%] max-w-md object-contain"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Discover exclusive <br className="hidden sm:block" />
              offers
            </h2>

            <p className="mt-6 text-gray-600 text-base lg:text-lg max-w-lg">
              Take advantage of our limited-time offers and enjoy discounts of
              up to <span className="font-semibold">[Percentage]% off</span>.
              Don't miss out – shop now and elevate your tech game today!
            </p>

            <button onClick={()=>{router.push("/category")}} className="mt-8 inline-flex items-center gap-2 bg-shop hover:bg-shop/90 text-white px-6 py-3 rounded-lg font-medium transition">
              Buy Now
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachineMaintenance;
