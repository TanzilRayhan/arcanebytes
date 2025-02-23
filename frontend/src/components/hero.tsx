import Link from "next/link";
import React from "react";
import { Kelly_Slab } from "next/font/google";
import { Khand } from "next/font/google";
import Image from "next/image";
import Mascot from "../../public/Kaizen-Mascot.png";
const kelly = Kelly_Slab({
  weight: ["400"],
  subsets: ['latin'],
});
const khand = Khand({
  weight: ["700"],
  subsets: ['latin'],
});

const hero = () => {
  return (
    <>
      <div className=" flex flex-wrap mt-5 mb-10 justify-around">
        <section className="md:mt-10 mb-5">
          <h1 className={`${kelly.className} mb-5 text-4xl md:text-7xl font-bold`}>
            Trust The Process
          </h1>
          <p className="md:mt-10 text-[10px] md:text-lg md:max-w-lg">
            “Hold the vision. Drop the excuses. Remember your why.<br />
            Swerve around obstacles. Trust the process. <br />
            Happiness and success will find you.”
          </p>
          <p className="mt-2 md:mt-5 text-[10px] md:text-base italic">– Karen Salmansohn</p>
        </section>
        <section>
          <Image src="/image-1.svg" alt="hero" width={300} height={400} />
        </section>
      </div>
      <div className="flex flex-wrap justify-around accent-theme rounded-lg py-5 px-5 md:px-10">
        <h1
          className={`${khand.className} text-3xl md:text-5xl leading-normal p-5 text-[#202020]`}
        >
          Achieve your goals with personalized challenges, <div className="md:pt-5"> rewards, and
          progress tracking.
            </div> 
        </h1>
        <div className="flex flex-col gap-5 items-center">
          <Image src={Mascot} alt="mascot" width={170} height={100} />
          <span className="flex gap-2 md:gap-5 justify-end">
            <Link
              className=" md:px-6 lg:px-6 px-3 py-2 rounded-lg btn-dark ml-5 text-sm"
              href="/login"
            >
              Get Started
            </Link>
            <Link
              className=" btn-outline-dark md:font-medium md:px-6 lg:px-6 px-3 py-2 text-sm rounded-lg"
              href="/contact"
            >
              Learn More
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default hero;
