import React, { useState } from "react";
import { CgToggleOn, CgToggleOff } from "react-icons/cg";
import { RxUpload } from "react-icons/rx";

function DisplayConfiguration() {
  const [isToggled, setIsToggled] = useState(false);
  const [primaryColor, setPrimaryColor] = useState("#000000");
  const [fontColor, setFontColor] = useState("#000000");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleColorChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const toggle = () => setIsToggled(!isToggled);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setSelectedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    document.getElementById("file-upload").click();
  };

  return (
    <div className="mx-auto max-w-full">
      <div className="mx-auto max-w-full h-[70%]">
        <div className="mx-auto max-w-full flex justify-center h-28">
          <div className="mt-4 sm:w-1/2">
            <label className="font-semibold" htmlFor="primaryColor">
              Primary Color
            </label>
            <div className="flex">
              <input
                type="text"
                placeholder="Choose"
                className="w-5/6 mr-2 px-2 py-1 my-1 border text-sm rounded"
                value={primaryColor}
                onChange={handleColorChange(setPrimaryColor)}
              />
              <input
                type="color"
                className="w-12 h-10 rounded-xl"
                value={primaryColor}
                onChange={handleColorChange(setPrimaryColor)}
              />
            </div>
            <span className="text-gray-500 text-xs">
              Lorem ipsum dolor sit amet.
            </span>
          </div>

          <div className="mt-4 sm:w-1/2 ml-10">
            <label className="font-semibold" htmlFor="fontColor">
              Font Color
            </label>
            <div className="flex">
              <input
                type="text"
                placeholder="Choose"
                className="w-10/12 mr-2 px-2 py-1 my-1 text-sm border rounded"
                value={fontColor}
                onChange={handleColorChange(setFontColor)}
              />
              <input
                type="color"
                className="w-12 h-10 rounded-xl"
                value={fontColor}
                onChange={handleColorChange(setFontColor)}
              />
            </div>
            <span className="text-gray-500 text-xs">
              Lorem ipsum dolor sit amet.
            </span>
          </div>
        </div>

        <div className="mx-auto max-w-full flex justify-center h-28">
          <div className="mt-4 sm:w-1/2">
            <label className="font-semibold" htmlFor="fontSize">
              Font Size (in px)
            </label>
            <div className="flex">
              <input
                type="number"
                placeholder="24"
                className="w-11/12 mr-2 px-2 text-sm py-1 my-1 border rounded"
              />
            </div>
            <span className="text-gray-500 text-xs">
              Lorem ipsum dolor sit amet.
            </span>
          </div>

          <div className="mt-4 sm:w-1/2 ml-10">
            <label className="font-semibold" htmlFor="chatHeight">
              Chat Height (in % of total screen)
            </label>
            <div className="flex">
              <input
                type="number"
                placeholder="Choose"
                className="w-11/12 mr-2 px-2 text-sm py-1 my-1 border rounded"
              />
            </div>
            <span className="text-gray-500 text-xs">
              Lorem ipsum dolor sit amet.
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-full h-16 mt-5 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold mb-2">Show Sources</h1>
          <span className="text-gray-500 text-xs block">
            Lorem ipsum dolor sit amet.
          </span>
        </div>
        <div>
          <button onClick={toggle} className="focus:outline-none">
            {isToggled ? (
              <CgToggleOff size={36} className="w-16 h-12 text-purple-700" />
            ) : (
              <CgToggleOn size={36} className="w-16 h-12 text-gray-400 mr-2" />
            )}
          </button>
        </div>
      </div>
      <hr className="border-gray-300 mt-5" />
      <h1 className="text-purple-700 font-bold text-2xl mt-10">Chat Icon</h1>

      <div className="mx-auto max-w-full h-48">
        <div className="mx-auto max-w-full flex justify-center h-20">
          <div className="mt-4 sm:w-1/2">
            <label className="font-semibold" htmlFor="chatIconSize">
              Chat Icon Size
            </label>
            <div className="flex">
              <select className="w-11/12 text-sm mr-2 px-2 py-1 my-1 border rounded appearance-none">
                <option value="" disabled hidden>
                  Small (48*48 px)
                </option>
                <option value="extra-large">Extra Large</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
          </div>

          <div className="mt-4 sm:w-1/2 ml-10">
            <label className="font-semibold" htmlFor="positionOnScreen">
              Position on Screen
            </label>
            <div className="flex">
              <select className="w-11/12 text-gray-500 mr-2 text-sm px-2 py-1 my-1 border rounded appearance-none">
                <option value="" disabled hidden>
                  Bottom right
                </option>
                <option value="bottom-left">Bottom Left</option>
                <option value="top-right">Top Right</option>
                <option value="top-left">Top Left</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-full flex justify-center h-20">
          <div className="mt-4 sm:w-1/2">
            <label className="font-semibold" htmlFor="distanceFromBottom">
              Distance from Bottom (in px)
            </label>
            <div className="flex">
              <input
                type="number"
                placeholder="20"
                className="w-11/12 mr-2 px-2 py-1 text-sm my-1 border rounded"
              />
            </div>
          </div>

          <div className="mt-4 sm:w-1/2 ml-10">
            <label className="font-semibold" htmlFor="horizontalDistance">
              Horizontal Distance (in px)
            </label>
            <div className="flex">
              <input
                type="number"
                placeholder="20"
                className="w-11/12 mr-2 px-2 py-1 text-sm my-1 border rounded"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-full h-28">
        <h1 className="font-bold text-xl">Bot Icon</h1>
        <div className="flex mt-5 items-center">
          <div className="w-16 h-16 rounded-full border bg-gray-300 relative overflow-hidden">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-full rounded-full object-cover"
              />
            )}
          </div>
          <label htmlFor="file-upload" className="ml-3 cursor-pointer">
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <button
              onClick={handleButtonClick}
              className="bg-purple-700 text-white text-sm px-2 py-2 flex rounded-md"
            >
              Upload Image
              <RxUpload size={20} className="ml-2" />
            </button>
          </label>
        </div>
      </div>
    </div>
  );
}

export default DisplayConfiguration;
