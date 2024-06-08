import React, { useState } from "react";
import Image from "next/image";


export default function About() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section
        className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
        id="about"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <Image
                  src={"/images/about.jpg"}
                  className="rounded-lg shadow-lg relative"
                  alt=""
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }} // optional
                  priority
                />
                
              </div>
            </div>
            {/* end col */}

            <div className="lg:col-span-7">
              <div className="lg:ms-7">
              
                <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
                  About Parth institute
                </h3>

                <p className="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto">
                Discover how PARTH INSTITUTE can provide the best results for students in Dindoli and beyond. Our tailored educational programs are designed to help students succeed academically and reach their full potential.
                </p>

                <div className="relative mt-10">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </>
  );
}
