import React, { useState } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import Link from "next/link";
import Image from "next/legacy/image";
import { FaCamera } from "react-icons/fa";

const images = [
  "/images/media/s1.jpg",
  "/images/media/s2.jpg",
  "/images/media/t1.jpg",
  "/images/media/s4.jpg",
  "/images/media/t2.jpg",
  "/images/media/s6.jpg",
  "/images/media/e2.jpg",
  "/images/media/e4.jpg",
];

const projectList = [
  {
    image: "/images/media/s1.jpg",
     // title: "Mockup Collection",
      // subtext: "Branding",
  },
  {
    image: "/images/media/s2.jpg",
     // title: "Mockup Collection",
      // subtext: "Branding",
  },
  {
    image: "/images/media/t1.jpg",
     // title: "Mockup Collection",
      // subtext: "Branding",
  },
  {
    image: "/images/media/s4.jpg",
     // title: "Mockup Collection",
      // subtext: "Branding",
  },
  {
    image: "/images/media/t2.jpg",
     // title: "Mockup Collection",
      // subtext: "Branding",
  },
  {
    image: "/images/media/s6.jpg",
     // title: "Mockup Collection",
      // subtext: "Branding",
  },
  {
    image: "/images/media/e2.jpg",
     // title: "Mockup Collection",
      // subtext: "Branding",
  },
  {
    image: "/images/media/e4.jpg",
     // title: "Mockup Collection",
      // subtext: "Branding",
  },
  // Add more images as needed
  // {
  //   image: "/images/media/s7.jpg",
  // },
  // {
  //   image: "/images/media/s8.jpg",
  // },
  // {
  //   image: "/images/media/t3.jpg",
  // },
  // {
  //   image: "/images/media/s9.jpg",
  // },
  // {
  //   image: "/images/media/t4.jpg",
  // },
  // {
  //   image: "/images/media/s10.jpg",
  // },
  // {
  //   image: "/images/media/e5.jpg",
  // },
  // {
  //   image: "/images/media/e6.jpg",
  // },

  
];

export default function Portfolio() {
  const [photoIndex, setActiveIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const [visibleImages, setVisibleImages] = useState(8);

  const handleCLick = (index) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const handleLoadMore = () => {
    setVisibleImages((prev) => Math.min(prev + 8, projectList.length));
  };

  return (
    <>
      <section
        className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800 active"
        id="portfolio"
      >
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h6 className="text-orange-600 text-base font-medium uppercase mb-2">
              Parth Institute
            </h6>
            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
              Media
            </h3>
            <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
              Experience the joy of our vibrant event celebrations and engaging indoor games, fostering community and creating lasting memories. Our festive occasions and themed events bring fun and togetherness, while our indoor games promote cognitive development in an interactive environment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
            {projectList.slice(0, visibleImages).map((item, index) => (
              <div
                className="relative rounded-md shadow-sm overflow-hidden group"
                key={index}
              >
                <Image
                  src={item.image}
                  className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500"
                  alt="workimage"
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority
                />
                <div className="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0"></div>

                <div className="content">
                  <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-4 end-4 transition-all duration-500">
                    <Link
                      href="#"
                      onClick={() => handleCLick(index)}
                      className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon rounded-full lightbox"
                    >
                      <FaCamera width="17px" height="20px" />
                    </Link>
                  </div>
                  <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-4 start-4 transition-all duration-500">
                    <Link
                      href="#"
                      className="h6 text-md font-medium text-white hover:text-orange-600 transition duration-500"
                    >
                      {item.title}
                    </Link>
                    <p className="text-slate-100 tag mb-0">{item.subtext}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visibleImages < projectList.length && (
            <div className="text-center mt-8">
              <button
                onClick={handleLoadMore}
                className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md"
              >
                Load More
              </button>
            </div>
          )}

          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => setOpen(false)}
              onMovePrevRequest={() =>
                setActiveIndex((photoIndex + images.length - 1) % images.length)
              }
              onMoveNextRequest={() =>
                setActiveIndex((photoIndex + 1) % images.length)
              }
            />
          )}
        </div>
      </section>

      <section
        style={{ backgroundImage: `url(${"/images/educationcta.png"})` }}
        className="py-24 w-full table relative bg-center bg-cover"
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl text-white font-medium">
              Ready to embark on your educational journey with us?
            </h3>

            <p className="text-white opacity-50 max-w-xl mx-auto">
              Explore our educational programs and discover how we can help you achieve your academic goals.
            </p>

            <div className="relative mt-10">
              <Link
                href="#"
                className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
