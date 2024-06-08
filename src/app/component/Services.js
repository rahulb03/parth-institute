import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

export default function Services() {
  const team = [
    {
      title: "Early Childhood Education",
     imageSrc: "/images/play.jpg",
     height:55 ,
     width:55 ,
     
      color: '#FFADAD', // Light Red
      subtext: "We offer classes for Nursery, Junior KG, and Senior KG.",
    },
    {
      title: "Elementary Education",
     imageSrc: "/images/file.jpg",
     height:55 ,
     width:50 ,
      color: '#FFD6A5', // Light Orange
      subtext: "We cover standards from 1st to 5th standard.",
    },
    {
      title: "Primary Education",
     imageSrc: "/images/eight.jpg",
     height:60 ,
     width:60 ,
      color: '#FDFFB6', // Light Yellow
      subtext: "We teach standards from 6th to 8th standard.",
    },
    {
      title: "Secondary Education",
     imageSrc: "/images/ten.jpg",
     height:55 ,
     width:55 ,
      color: '#CAFFBF', // Light Green
      subtext: "We offer tuition for standards from 9th to 10th standard.",
    },
    {
      title: "Higher Secondary Education",
     imageSrc: "/images/com.jpg",
     height:60 ,
     width:60 ,
      color: '#9BF6FF', // Light Blue
      subtext: "We provide tuition for 11th and 12th standard in Commerce.",
    },
    {
      title: "Competitive Exam Preparations",
     imageSrc: "/images/icon.jpg",
      color: '#A0C4FF', // Light Indigo
      height:60 ,
      width:60 ,
      subtext: "We also offer classes for Competitive Exam Preparations."
    },
  ];

  return (
    <>
      {/* Start */}
      <section id="features" className="relative md:py-24 py-16">
        <div className="container lg mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 pb-8 items-center">
            <div>
              <h6 className="text-orange-600 text-base font-medium uppercase mb-2">
              Explore Our Educational Offerings
              </h6>
              <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white md:mb-0">
             
              </h3>
            </div>
            <div>
              <p className="text-slate-400 dark:text-slate-300 max-w-xl">
              You don`t have to navigate your educational journey alone – we`re here to provide guidance and support every step of the way.
              </p>
            </div>
          </div>
         
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            {team.map((item, index) => {
             
             
             return (
                <div
                  key={index}
                  style={{ backgroundColor: item.color }}
                  className={`features p-6 ${
                    index % 2 === 0
                      ? "hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800"
                      : "shadow-xl shadow-slate-100 dark:shadow-slate-800"
                  } transition duration-500 rounded-3xl mt-8`}
                >
               
                  <div className="w-20 h-20 bg-white text-orange-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm">
                    <Image
                        src={item.imageSrc} 
                        alt="rahul"
                        width={item.width}
                        height={item.height} 
                        style={{backgroundColor:'transparent'}}
                        priority
                        />
                  </div>
                
                  <div className="content mt-7">
                    <Link
                      href="#"
                      className="text-lg hover:text-orange-600 dark:text-white dark:hover:text-orange-600 transition-all duration-500 ease-in-out font-medium"
                    >
                      {item.title}
                    </Link>
                    <p className="text-[#2F4F4F] mt-3">{item.subtext}</p>
                    {/* <p className="text-[#8B4513] font-bold mt-3">{item.subtext}</p> */}
                    {/* <p className="text-[#191970] font-bold mt-3">{item.subtext}</p> */}
                    {/* <p className="text-[#333333] font-bold mt-3">{item.subtext}</p> */}



                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h6 className="text-orange-600 text-base font-medium uppercase mb-2"></h6>
            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
              Our programs
            </h3>
            <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
              We offer a variety of programs that help students grow academically and personally. Our comprehensive courses are designed to foster holistic development and lifelong learning.
            </p>
          </div>
          <div className="grid grid-cols-1 mt-8">
            <div className="timeline relative">
              <div className="timeline-item">
                <div className="grid sm:grid-cols-2">
                  <div className="">
                    <div className="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                      <Image
                        src={"/images/programs/carrier.jpg"}
                        className="h-64 w-64"
                        alt=""
                        width={200}
                        height={200}
                        priority
                      />
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">
                        Career counselling
                      </h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                        We provide personalized career guidance to help you achieve your professional goals. Our advisors offer support and insights to navigate your career path successfully.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item mt-5 pt-4">
                <div className="grid sm:grid-cols-2">
                  <div className="md:order-1 order-2">
                    <div className="event event-description-left ltr:float-left rtl:float-right ltr:text-right rtl:text-left md:me-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">
                        Practical Based Education
                      </h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                        We teach practical physics and chemistry to students starting from 6th grade. Our hands-on approach helps students understand and enjoy these subjects.
                      </p>
                    </div>
                  </div>
                  <div className="md:order-2 order-1">
                    <div className="duration duration-right md:ms-7 relative">
                      <Image
                        src={"/images/programs/pbe.jpeg"}
                        className="h-64 w-64"
                        alt=""
                        width={200}
                        height={200}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item mt-5 pt-4">
                <div className="grid sm:grid-cols-2">
                  <div className="mt-4 mt-sm-0">
                    <div className="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                      <Image
                        src={"/images/programs/ws1.jpeg"}
                        className="h-64 w-64"
                        alt=""
                        width={220}
                        height={200}
                        priority
                      />
                    </div>
                  </div>
                  <div className="mt-4 mt-sm-0">
                    <div className="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">
                        Webinar & Seminar
                      </h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                        We provide engaging webinars and seminars to enhance your learning experience. Join us to gain valuable insights and knowledge from experts in various fields.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="timeline-item mt-5 pt-4">
                <div className="grid sm:grid-cols-2">
                  <div className="md:order-1 order-2">
                    <div className="event event-description-left ltr:float-left rtl:float-right ltr:text-right rtl:text-left md:me-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">
                        English grammar 
                      </h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                      English grammar forms the foundation of effective communication by governing sentence structure and word usage. Join our institute to master these skills and enhance your clarity and precision in language.
                      </p>
                    </div>
                  </div>
                  <div className="md:order-2 order-1">
                    <div className="duration duration-right md:ms-7 relative">
                      <Image
                        src={"/images/programs/3g.jpg"}
                        className="h-64 w-64"
                        alt=""
                        width={250}
                        height={200}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item mt-5 pt-4">
                <div className="grid sm:grid-cols-2">
                  <div className="mt-4 mt-sm-0">
                    <div className="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                      <Image
                        src={"/images/programs/anc1.jpg"}
                        className="h-64 w-64"
                        alt=""
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                  <div className="mt-4 mt-sm-0">
                    <div className="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">
                        Art & crafts
                      </h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                        
                        Unleash your inner artist—arts & crafts inspire creativity and self-expression!
                        Create, innovate, and explore—the world of arts & crafts is full of endless possibilities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="timeline-item mt-5 pt-4">
                <div className="grid sm:grid-cols-2">
                  <div className="md:order-1 order-2">
                    <div className="event event-description-left ltr:float-left rtl:float-right ltr:text-right rtl:text-left md:me-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">
                        Educational trips and visits
                      </h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                        We offer educational trips and visits to expand your horizons and deepen your understanding. Our experiences are designed to make learning immersive and memorable.
                      </p>
                    </div>
                  </div>
                  <div className="md:order-2 order-1">
                    <div className="duration duration-right md:ms-7 relative">
                      <Image
                        src={"/images/programs/trip1.png"}
                        className="h-64 w-64"
                        alt=""
                        width={200}
                        height={200}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
          
              <div className="timeline-item mt-5 pt-4">
                <div className="grid sm:grid-cols-2">
                  <div className="mt-4 mt-sm-0">
                    <div className="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                      <Image
                        src={"/images/programs/ec2.jpeg"}
                        className="h-64 w-64"
                        alt=""
                        width={220}
                        height={180}
                        priority
                      />
                    </div>
                  </div>
                  <div className="mt-4 mt-sm-0">
                    <div className="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">
                        Events celebration
                      </h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                        We organize events and celebrations that are designed to make your special moments memorable and enjoyable. Join us to experience joy and togetherness in every celebration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-item mt-5 pt-4">
                <div className="grid sm:grid-cols-2">
                  <div className="md:order-1 order-2">
                    <div className="event event-description-left ltr:float-left rtl:float-right ltr:text-right rtl:text-left md:me-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">
                        indoor games
                      </h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                      Unlock creativity and strategy with every move—indoor games foster fun and learning!
                      Dive into a world of imagination and teamwork through engaging indoor games.
                      </p>
                    </div>
                  </div>
                  <div className="md:order-2 order-1">
                    <div className="duration duration-right md:ms-7 relative">
                      <Image
                        src={"/images/programs/ig.jpg"}
                        className="h-64 w-64"
                        alt=""
                        width={250}
                        height={250}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
          
              <div className="timeline-item mt-5 pt-4">
                <div className="grid sm:grid-cols-2">
                  <div className="mt-4 mt-sm-0">
                    <div className="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                      <Image
                        src={"/images/programs/vm.jpeg"}
                        className="h-64 w-64"
                        alt=""
                        width={220}
                        height={200}
                        priority
                      />
                    </div>
                  </div>
                  <div className="mt-4 mt-sm-0">
                    <div className="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">
                        vedic mathematics
                      </h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
              Unlocking the mysteries of the universe, one equation at a time, with the timeless wisdom of Vedic Mathematics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
