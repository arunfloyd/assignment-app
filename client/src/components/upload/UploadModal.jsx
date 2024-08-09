import React, { useState, useRef, useEffect } from "react";
import { API } from "../../utils/Api.js";
import Cookies from "js-cookie";

const UploadModal = ({
  isOpen,
  onClose,
  addTranscript,
  selectedItem,
  fetchData
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [nameError, setNameError] = useState("");
  const [linkError, setLinkError] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleSubmit = async () => {
    if (!name.trim()) {
      setNameError("Name field can't be empty");
      return;
    }
    if (!description.trim()) {
      setLinkError("Description field can't be empty");
      return;
    }

    const uploadId = Cookies.get("uploadId");
    const fileId = Cookies.get("fileId");

    try {
      await API.createDetails(uploadId, fileId, { name, description });
      addTranscript({ name, description });
      setName("");
      setDescription("");
      onClose();
      fetchData();
    } catch (error) {
      console.error("Error while saving details:", error);
    }
  };

  return (
    isOpen && (
      <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full z-50">
        <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
        <div
          ref={modalRef}
          className="bg-white w-8/12 rounded-xl shadow-lg p-6 relative"
        >
          <div className="flex gap-4 items-center mb-6">
            <img
              src={selectedItem.url}
              alt="file_url"
              className="w-14 h-14 rounded-full"
            />
            <h3 className="text-4xl text-gray-500 font-bold">
              {selectedItem.text}
            </h3>
          </div>
          <div>
            <label htmlFor="name" className="block mb-2 text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Type here..."
              onChange={handleInputChange(setName)}
              className="border rounded w-full py-2 px-3 mb-3"
            />
            {nameError && (
              <p className="text-red-500 text-xs mb-3">{nameError}</p>
            )}
            <label htmlFor="description" className="block mb-2 text-gray-700">
              Description
            </label>
            <input
              type="text"
              id="description"
              placeholder="Type here..."
              value={description}
              onChange={handleInputChange(setDescription)}
              className="border rounded w-full py-2 px-3 mb-3"
            />
            {linkError && (
              <p className="text-red-500 text-xs">{linkError}</p>
            )}
          </div>
          <div className="mt-8 flex justify-end">
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-purple-700 text-white font-semibold rounded-3xl"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default UploadModal;


