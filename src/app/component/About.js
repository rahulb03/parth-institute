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

      <div className="mediums-boards-container">
            <h2>Mediums and Boards Offered</h2>
            <div className="mediums-section">
                <h3>Mediums:</h3>
                <ul>
                    <li>Hindi</li>
                    <li>Gujarati</li>
                    <li>English</li>
                </ul>
            </div>
            <div className="boards-section">
                <h3>Boards:</h3>
                <ul>
                    <li>CBSE</li>
                    <li>GSEB</li>
                </ul>
            </div>
            <style jsx>{`
                .mediums-boards-container {
                    margin-top: 20px;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    background-color: #f9f9f9;
                }

                .mediums-section, .boards-section {
                    margin-bottom: 15px;
                }

                ul {
                    list-style-type: none;
                    padding: 0;
                }

                li {
                    margin-bottom: 5px;
                }
            `}</style>
        </div>
     
    </>
  );
}
