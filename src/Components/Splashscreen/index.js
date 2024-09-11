"use client";
import Image from "next/image";
import Link from "next/link";
import {
    PresentationChartBarIcon,
    
  } from "@heroicons/react/24/solid";
export  function SplashScreen() {
  return (
    <div className="flex justify-center items-center left-1/2 top-1/2 h-screen">
      <div className="flex flex-col items-center justify-center gap-y-10 animate-fadeIn">
        <div className="flex flex-col items-center">
          <Image
            src={"/images/schoolLogo.png"}
            width={200}
            height={200}
            className=""
            alt="logo"
          />
          <h1 className="text-5xl font-bold">Easy School Management</h1>
        </div>
        <div className="flex space-x-4 mt-2">
          <span className="inline-block h-5 w-5 bg-orange rounded-full"></span>
          <span className="inline-block h-5 w-5 bg-navy rounded-full"></span>
          <span className="inline-block h-5 w-5 bg-orange rounded-full"></span>
          <span className="inline-block h-5 w-5 bg-navy rounded-full"></span>
          <span className="inline-block h-5 w-5 bg-orange rounded-full"></span>
        </div>
        <Link href={'/login'}>
          <button className="flex items-center justify-center gap-x-3 bg-orange py-3 w-48 font-semibold rounded-full text-content text-2xl">
            Next
            <span>
              <PresentationChartBarIcon size={30} />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}