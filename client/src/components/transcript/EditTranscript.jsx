import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { API } from "../../utils/Api.js";
import Cookies from "js-cookie";

const EditTranscript = () => {
  const location = useLocation();
  const { description } = location.state || {};
  const [editMode, setEditMode] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description || "");
  const navigate = useNavigate();
  const { projectName } = useParams();

  useEffect(() => {
    setEditedDescription(description || "");
  }, [description]);

  const updateDescription = async () => {
    const uploadId = Cookies.get("uploadId");
    const fileId = Cookies.get("fileId");
    const detailId = Cookies.get('detailId');

    try {
      await API.updateDetails(uploadId, fileId, detailId, editedDescription);
      navigate(`/upload/${projectName}/project-section`);
    } catch (error) {
      console.error("Error updating description:", error);
    }
  };

  const toggleEditMode = () => {
    setEditMode((prevMode) => !prevMode);
    if (editMode) {
      setEditedDescription(description || "");
    }
  };

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };

  return (
    <div className="w-10/12 mx-auto p-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-purple-700">Edit Transcript</h1>
        {editMode && (
          <div className="flex gap-2">
            <button
              className="text-xl font-bold border-red-500 text-red-500 border px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out"
              onClick={toggleEditMode}
            >
              Discard
            </button>
            <button
              className="text-xl font-bold border px-4 py-2 rounded-md bg-slate-950 text-white hover:bg-purple-800 transition duration-300 ease-in-out"
              onClick={updateDescription}
            >
              Save & Exit
            </button>
          </div>
        )}
      </div>

      <div className="border border-gray-300 mt-5 pb-2 rounded-md p-2 w-full h-96 resize-y">
        <div className="flex justify-between">
          <button
            className="mt-1 py-1 w-28 h-8 flex bg-black text-white rounded-3xl"
            onClick={toggleEditMode}
          >
            <FaPen className="mt-1 mr-2" />
            {editMode ? "Editing" : "Edit Mode"}
          </button>
          <div className="w-6 h-6 rounded-full border flex justify-center text-red-600 border-red-500 bg-slate-100 items-center">
            <MdSearch />
          </div>
        </div>

        {editMode ? (
          <textarea
            className="rounded-md p-2 w-full h-80 mt-3 resize-y"
            value={editedDescription}
            onChange={handleDescriptionChange}
            wrap="soft"
          />
        ) : (
          <div className="rounded-md p-2 w-full h-80 mt-3 resize-y">
            <h1 className="text-xl font-bold text-purple-700">Speaker</h1>
            {editedDescription}
          </div>
        )}
      </div>
    </div>
  );
};

export default EditTranscript;



// import { useLocation, useParams, useNavigate } from "react-router-dom";
// import { FaPen } from "react-icons/fa";
// import { MdSearch } from "react-icons/md";
// import { API } from "../../utils/Api.js";
// import Cookies from "js-cookie";

// const EditTranscript = () => {
//   const location = useLocation();
//   const { description } = location.state || {};

//   const [editMode, setEditMode] = useState(false);
//   const [editedDescription, setEditedDescription] = useState(description || "");
//   const navigate = useNavigate();
//   const { projectName } = useParams();

//   const updateDescription = async () => {
//     const uploadId = Cookies.get("uploadId");
//     const fileId = Cookies.get("fileId");
//     const detailId = Cookies.get('detailId');
//      console.log(uploadId)
//      console.log(fileId)
//      console.log(detailId)
//     try {
//       await API.updateDetails(uploadId, fileId, detailId, editedDescription);
//       console.log("update success")
//       console.log("success")
//       navigate(`/upload/${projectName}/project-section`);
//     } catch (error) {
//       console.error("Error updating description:", error);
//     }
//   };

//   const handleEditClick = () => {
//     setEditMode(!editMode);
//   };

//   const handleDescriptionChange = (e) => {
//     const updatedDescription = e.target.value;
//     setEditedDescription(updatedDescription);
//   };

//   useEffect(() => {
//     setEditedDescription(description || "");
//   }, [description]);

//   return (
//     <div className="w-10/12 mx-auto p-4">
//       <div className="flex justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-purple-700">
//             Edit Transcript
//           </h1>
//         </div>
//         <div className="flex gap-2">
//           {editMode && (
//             <>
//               <button
//                 className="text-xl font-bold border-red-500 text-red-500 border px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300 ease-in-out"
//                 onClick={handleEditClick}
//               >
//                 Discard
//               </button>
//               <button
//                 className="text-xl font-bold border px-4 py-2 rounded-md bg-slate-950 text-white hover:bg-purple-800 transition duration-300 ease-in-out"
//                 onClick={updateDescription}
//               >
//                 Save & Exit
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//       {editMode ? (
//         <div className="border border-gray-300 mt-5 pb-2 rounded-md p-2 w-full h-96 resize-y">
//           <div className="flex justify-between">
//             <div>
//               <button
//                 className=" mt-1 py-1 w-28 h-8 flex bg-black text-white rounded-3xl"
//                 onClick={handleEditClick}
//               >
//                 <FaPen className="mt-1 mr-2 " />
//                 Edit Mode
//               </button>
//             </div>
//             <div className="w-6 h-6 rounded-full border flex justify-center text-red-600 border-red-500 items-center bg-slate-100">
//               <MdSearch />
//             </div>
//           </div>
//           <textarea
//             className="rounded-md p-2 w-full h-80 mt-3 resize-y"
//             value={editedDescription}
//             onChange={handleDescriptionChange}
//             wrap="soft"
//           />
//         </div>
//       ) : (
//         <div className="border border-gray-300 mt-8 pb-2 rounded-md p-2 w-full h-96 resize-y">
//           <div className="flex justify-between">
//             <div>
//               <button
//                 className="mt-1 py-1 w-28 h-8 flex bg-black text-white rounded-3xl"
//                 onClick={handleEditClick}
//               >
//                 <FaPen className="mt-1 mr-2" />
//                 Edit Mode
//               </button>
//             </div>
//             <div className="w-6 h-6 rounded-full border flex justify-center text-red-600 border-red-500 bg-slate-100 items-center">
//               <MdSearch />
//             </div>
//           </div>
//           <div className="rounded-md p-2 w-full h-80 mt-3 resize-y">
//           <h1 className="text-xl font-bold text-purple-700">Speaker</h1>
//             {editedDescription}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EditTranscript;
