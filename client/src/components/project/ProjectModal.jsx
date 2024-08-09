import React, { useState, useRef, useEffect, useCallback } from "react";
import { API } from "../../utils/Api.js";
import { useSelector } from "react-redux";

const ProjectModal = ({ isOpen, onClose }) => {
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState("");
  const modalRef = useRef(null);
  const userId = useSelector((state) => state.user.email);

  const handleOutsideClick = useCallback(
    (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, handleOutsideClick]);

  const handleInputChange = useCallback((e) => {
    setProjectName(e.target.value);
    setError("");
  }, []);

  const handleSubmit = useCallback(async () => {
    if (projectName.trim() === "") {
      setError("Project Name Can't be empty");
      return;
    }
    try {
      await API.createUpload(projectName, userId);
      setProjectName("");
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error creating project:", error.message);
      setError("Failed to create project");
    }
  }, [projectName, userId, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div
        ref={modalRef}
        className="modal-container bg-white w-8/12 rounded-xl shadow-lg z-50 p-6"
      >
        <div className="modal-header flex justify-between items-center">
          <h3 className="text-3xl mb-6 font-bold">Create Project</h3>
        </div>
        <div className="modal-body">
          <label htmlFor="projectName" className="block mb-2 text-lg font-semibold">
            Enter Project Name:
          </label>
          <input
            type="text"
            id="projectName"
            placeholder="Type here..."
            value={projectName}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3 mb-2"
          />
          {error && (
            <p className="text-red-500 text-sm mt-1">
              {error}
            </p>
          )}
        </div>
        <div className="modal-footer mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 px-4 py-2 text-red-500 font-bold rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-purple-700 font-bold text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;



// import { API } from "../../utils/Api.js";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// const ProjectModal = ({ isOpen, onClose }) => {
//   const [projectName, setProjectName] = useState("");
//   const [error, setError] = useState("");
//   const modalRef = useRef(null);
//   const userId = useSelector((state) => state.user.email);
//   const navigate = useNavigate();
//   useEffect(() => {
//     const handleOutsideClick = (e) => {
//       if (modalRef.current && !modalRef.current.contains(e.target)) {
//         onClose();
//       }
//     };

//     if (isOpen) {
//       document.addEventListener("mousedown", handleOutsideClick);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, [isOpen, onClose]);

//   const handleInputChange = (e) => {
//     setProjectName(e.target.value);
//     setError("");
//   };

//   const handleSubmit = async () => {
//     if (projectName.trim() === "") {
//       setError("Project Name Can't be empty");
      
//       return;
//     }
//     try {
//       await API.createUpload(projectName, userId);
//       setProjectName("");
//       onClose();
//       window.location.reload()
//     } catch (error) {
//       console.error("Error creating project:", error.message);
//       setError("Failed to create project");
//     }
//   };

//   return (
//     <div
//       className={`fixed top-0 left-0 flex justify-center items-center w-full h-full ${
//         isOpen ? "" : "hidden"
//       }`}
//     >
//       <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
//       <div
//         ref={modalRef}
//         className="modal-container bg-white w-8/12 rounded-xl shadow-lg z-50 p-6"
//       >
//         <div className="modal-header flex justify-between items-center">
//           <h3 className="text-3xl mb-6 font-bold">Create Project</h3>
//         </div>
//         <div className="modal-body">
//           <label htmlFor="projectName" className="flex mb-3 justify-start ml-1">
//             Enter Project Name:
//           </label>
//           <input
//             type="text"
//             id="projectName"
//             placeholder="Type here..."
//             value={projectName}
//             onChange={handleInputChange}
//             className="border rounded w-full py-2 px-3 mb-3"
//           />
//           {error && (
//             <p className="text-red-500 ml-1 text-xs mt-[-10px] flex justify-start">
//               {error}
//             </p>
//           )}
//         </div>
//         <div className="modal-footer mt-8 flex justify-end">
//           <button
//             onClick={onClose}
//             className="mr-2 px-4 py-2 text-red-500 font-bold rounded-lg"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="px-4 py-2 bg-purple-700 font-bold text-white rounded-lg"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectModal;
