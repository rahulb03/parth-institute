import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { FaWhatsapp , FaLinkedin , FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      {/*  Start Footer  */}
      <footer className="py-8 bg-slate-800 dark:bg-gray-900">
        <div className="container">
          <div className="grid md:grid-cols-12 items-center">
            <div className="md:col-span-3">
              <Link href="#" className="logo-footer">
                <Image
                  src={"/images/pi1.png"}
                  className="md:ms-0 mx-auto"
                  alt=""
                  width={120}
                  height={50}
                />
              </Link>
            </div>

            <div className="md:col-span-5 md:mt-0 mt-8">
              <div className="text-center">
                <p className="text-gray-400">
                  © {new Date().getFullYear()} Parth Institute Spread Knowledge...{" "}
                  
                  .
                </p>
              </div>
            </div>

            <div className="md:col-span-4 md:mt-0 mt-8">
              <ul className="list-none foot-icon md:text-end text-center">
               
                <li className="inline ms-1">
                  <Link
                    href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFDkXnC_Ku8fwAAAY_ijrtgGs52m1778Rz2DWK73yb94a5eK6aDM8ckzUK5YQoQfkJbYGLMLaayoXNgUSrY_JimwwoU4xAwUkITf37GN9Z5hqs3MtvBaVOQpaWGZkS46LsKb4I=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fparth-institute%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app"
                    target="_blank"
                    className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-400 hover:text-white"
                  >
                   <FaLinkedin width="17px" />
                  </Link>
                </li>
               

                <li className="inline ms-1">
                  <Link
                    href="https://www.instagram.com/parth_institute_official/?igsh=MXBzb3RzNGhhYXJobw%3D%3D"
                    target="_blank"
                    className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-400 hover:text-white"
                  >
                    <FaInstagram width="17px" />
                  </Link>
                </li>
                <li className="inline ms-1">
                  <Link
                    href="https://api.whatsapp.com/send/?phone=%2B919725056093&text=%20&app_absent=0"
                    target="_blank"
                    className="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 text-gray-400 hover:text-white"
                  >
                   <FaWhatsapp width="17px"/>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}

      {/* <!-- Back to top --> */}
      <Link
        href="home"
        id="back-to-top"
        className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-orange-600 text-white leading-9"
      >
        <i className="uil uil-arrow-up"></i>
      </Link>
      {/* <!-- Back to top --> */}
    </>
  );
}
