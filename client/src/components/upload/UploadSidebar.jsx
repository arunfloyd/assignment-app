

import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Top from "../../assets/images/Vector1.png";
import Bottom from "../../assets/images/Vector.png";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";
import { RiSettings5Line } from "react-icons/ri";

function UploadSidebar() {
  const [activeSection, setActiveSection] = useState("project-section");

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  const { projectName } = useParams();

  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        <div>
          <Link className="flex justify-around mt-6" to="/">
            <div className="Logo h-4 transition-opacity duration-300 ml-7 ease-in-out">
              <img
                className="pt-1 ml-1"
                src={Top}
                alt="logo"
                width={18}
                height={13}
              />
              <img
                className="mt-[-5px]"
                src={Bottom}
                alt="logo"
                width={31}
                height={25}
              />
            </div>
            <div>
              <h1 className="text-purple-800 mr-32 font-sans font-bold mt-1 text-2xl leading-12 tracking-normal">
                LAMA.
              </h1>
            </div>
          </Link>
          <p className="ml-8 mt-6 font-semibold">Podcast upload flow</p>
        </div>
        <div className="mt-5">
          <Link
            className={`flex mt-2 items-center w-10/12 py-2 px-2 mx-5 rounded-3xl ${
              activeSection === "project-section"
                ? "bg-purple-700 text-white"
                : "hover:bg-gray-200"
            }`}
            to={`/upload/${projectName}/project-section`}
            onClick={() => handleSetActive("project-section")}
          >
            <div class="flex justify-center items-center h-7 w-7 rounded-full bg-gray-300">
              <RiNumber1 size={12} className="text-slate-950" />
            </div>
            <p className="ml-2">Projects</p>
          </Link>
          <Link
            className={`flex mt-2 items-center w-10/12 py-2 px-2 mx-5 rounded-3xl ${
              activeSection === "configurations"
                ? "bg-purple-700 text-white"
                : "hover:bg-gray-200"
            }`}
            to={`/upload/${projectName}/configurations`}
            onClick={() => handleSetActive("configurations")}
          >
             <div class="flex justify-center items-center h-7 w-7 rounded-full bg-gray-300">
              <RiNumber2 size={12} className="text-slate-700" />
            </div>
            <p className="ml-2">Winget Configurations</p>
          </Link>
          <Link
            className={`flex mt-2 items-center w-10/12 py-2 px-2 mx-5 rounded-3xl ${
              activeSection === "deployment"
                ? "bg-purple-700 text-white"
                : "hover:bg-gray-200"
            }`}
            to={`/upload/${projectName}/deployment`}
            onClick={() => handleSetActive("deployment")}
          >
             <div class="flex justify-center items-center h-7 w-7 rounded-full bg-gray-300">
              <RiNumber3 size={12} className="text-slate-700" />
            </div>
            <p className="ml-2">Deployment</p>
          </Link>
          <Link
            className={`flex mt-2 items-center w-10/12 py-2 px-2 mx-5 rounded-3xl ${
              activeSection === "pricing"
                ? "bg-purple-700 text-white"
                : "hover:bg-gray-200"
            }`}
            to={`/upload/${projectName}/pricing`}
            onClick={() => handleSetActive("pricing")}
          >
            <div class="flex justify-center items-center h-7 w-7 rounded-full bg-gray-300">
              <RiNumber4 size={12} className="text-slate-700" />
            </div>

            <p className="ml-2">Pricing</p>
          </Link>
          <hr className="border-gray-300 mt-2 w-9/12 pb-10 ml-8" />
        </div>
      </div>
      <div>
      <hr className="border-gray-300 w-9/12 ml-8" />
        <Link
          className={`flex mt-2 items-center w-10/12 py-2 px-2 mx-5 rounded-3xl mb-1 ${
            activeSection === "settings"
              ? "bg-purple-700 text-white"
              : "hover:bg-gray-200"
          }`}
          to={`/upload/${projectName}/settings`}
          onClick={() => handleSetActive("settings")}
        >
          <RiSettings5Line
            size={20}
            className=" bg-slate-100 text-slate-700 rounded-full"
          />
          <p className="ml-2">Setting</p>
        </Link>
      </div>
    </div>
  );
}

export default UploadSidebar;
