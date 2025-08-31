import Link from "next/link";
import React from "react";
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import { SiSanity } from "react-icons/si";

export default function Footer() {
  return (
    <div>
      <div className="bg-background/80 mt-20">
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex justify-between items-center h-16 px-2">
            <Link
              href="/"
              className="flex flex-shrink-0 gap-2 items-center tracking-tighter"
            >
              <h1 className="bg-blue-900 text-white p-2 font-bold font-serif text-xs md:text-xl tracking-tighter">
                IJK
              </h1>
              <h2 className="text-xs md:text-xl font-serif font-bold tracking-tighter text-gray-500">
                Inko Jaya Konstruksi
              </h2>
            </Link>
            <div className="text-gray-500 hidden md:inline-flex items-center gap-7">
              <Link href={"https://www.youtube.com"} target="blank">
                <BsYoutube className="text-2xl hover:text-red-500 duration-200" />
              </Link>
              <Link href={"https://www.facebook.com"} target="blank">
                <BsFacebook className="text-2xl hover:text-orange-500 duration-200 cursor-pointer" />
              </Link>
              <Link href={"https://www.instagram.com"} target="blank">
                <BsInstagram className="text-2xl hover:text-orange-500 duration-200 cursor-pointer" />
              </Link>
            </div>
            <Link href="/studio" className="pr-2">
              <SiSanity />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
