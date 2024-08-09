
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { GoPlusCircle } from "react-icons/go";
import Cookies from "js-cookie";

function NewProject({ projectData = [], openModal }) {
  const navigate = useNavigate();

  const redirectToUpload = (index, projectName) => {
    Cookies.set("uploadId", index, { expires: 1 });
    navigate(`/upload/${projectName}/project-section`);
  };

  const timeSince = useCallback((date) => {
    const now = new Date();
    const past = new Date(date);
    const seconds = Math.floor((now - past) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0)
      return `Last edited ${years} year${years > 1 ? "s" : ""} ago`;
    if (months > 0)
      return `Last edited ${months} month${months > 1 ? "s" : ""} ago`;
    if (weeks > 0)
      return `Last edited ${weeks} week${weeks > 1 ? "s" : ""} ago`;
    if (days > 0) return `Last edited ${days} day${days > 1 ? "s" : ""} ago`;
    if (hours > 0)
      return `Last edited ${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (minutes > 0)
      return `Last edited ${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    return `Last edited just now`;
  }, []);

  const renderProjectInitials = (name) => {
    const words = name.split(" ");
    return words.length > 1
      ? words.map((word) => word[0].toUpperCase()).join("")
      : name.substring(0, 2).toUpperCase();
  };

  return (
    <div>
      <div className="flex justify-around items-center mb-4">
        <h1 className="text-5xl font-bold text-purple-700">Projects</h1>
        <button
          onClick={openModal}
          className="text-white bg-slate-950 text-md rounded-lg py-2 px-4 flex items-center"
        >
          <GoPlusCircle
            size={20}
            className="mr-2 bg-stone-50 rounded-2xl text-black"
          />
          Create New Project
        </button>
      </div>

      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-3 gap-8 w-8/12">
          {projectData.map((project, index) => (
            <div
              key={project._id}
              className="flex ml-5 cursor-pointer items-center h-24 w-64 rounded-2xl shadow-lg border border-slate-300"
              onClick={() =>
                redirectToUpload(project._id, project.projectName)
              }
            >
              <div className="mr-8 ml-2 w-20 h-20 border border-slate-500 rounded-xl bg-purple-700 flex items-center justify-center">
                <span className="text-6xl text-white">
                  {renderProjectInitials(project.projectName || "")}
                </span>
              </div>
              <div>
                <p className="text-purple-700 text-lg font-bold whitespace-nowrap truncate">
                  {project.projectName || "No project name available"}
                </p>
                <p className="text-sm font-normal mt-1">{project.episode}</p>
                <p className="text-xs font-normal text-gray-400 mt-1">
                  {timeSince(project.timeStamp)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewProject;

// import { useNavigate } from "react-router-dom";
// import { GoPlusCircle } from "react-icons/go";
// import Cookies from "js-cookie";

// function NewProject({ projectData = [], openModal }) {
//   const navigate = useNavigate();

//   const redirectToUpload = (index, projectName) => {
//     Cookies.set("uploadId", index, { expires: 1 });
//     navigate(`/upload/${projectName}/project-section`);
//   };

//   function timeSince(date) {
//     const now = new Date();
//     const past = new Date(date);
//     const seconds = Math.floor((now - past) / 1000);
//     const minutes = Math.floor(seconds / 60);
//     const hours = Math.floor(minutes / 60);
//     const days = Math.floor(hours / 24);
//     const weeks = Math.floor(days / 7);
//     const months = Math.floor(days / 30);
//     const years = Math.floor(days / 365);

//     if (years > 0)
//       return `Last edited ${years} year${years > 1 ? "s" : ""} ago`;
//     if (months > 0)
//       return `Last edited ${months} month${months > 1 ? "s" : ""} ago`;
//     if (weeks > 0)
//       return `Last edited ${weeks} week${weeks > 1 ? "s" : ""} ago`;
//     if (days > 0) return `Last edited ${days} day${days > 1 ? "s" : ""} ago`;
//     if (hours > 0)
//       return `Last edited ${hours} hour${hours > 1 ? "s" : ""} ago`;
//     if (minutes > 0)
//       return `Last edited ${minutes} minute${minutes > 1 ? "s" : ""} ago`;
//     return `Last edited just now`;
//   }

//   return (
//     <div>
//       <div className="flex justify-around items-center mb-4">
//         <h1 className="text-5xl font-bold text-purple-700">Projects</h1>
//         <button
//           onClick={openModal}
//           className="text-white bg-slate-950 text-md rounded-lg py-2 px-4 flex items-center"
//         >
//           <GoPlusCircle
//             size={20}
//             className="mr-2 bg-stone-50 rounded-2xl text-black"
//           />
//           Create New Project
//         </button>
//       </div>

//       <div className="flex justify-center mt-10">
//         <div className="grid grid-cols-3 gap-8 w-8/12">
//           {projectData.map((project, index) => (
//             <div
//               key={index}
//               className="flex ml-5 cursor-pointer items-center h-24 w-64 rounded-2xl shadow-lg border border-slate-300"
//               onClick={() => redirectToUpload(project._id, project.projectName)}
//             >
//               {project && project.projectName ? (
//                 <>
//                   <div className="mr-8 ml-2 w-20 h-20 border border-slate-500 rounded-xl bg-purple-700">
//                     {project.projectName.includes(" ") ? (
//                       project.projectName.split(" ").map((word, idx) => (
//                         <span key={idx} className="text-6xl text-white">
//                           {word[0].toUpperCase()}
//                         </span>
//                       ))
//                     ) : (
//                       <span className="text-6xl text-white ml-1">
//                         {project.projectName.substring(0, 2).toUpperCase()}
//                       </span>
//                     )}
//                   </div>
//                   <div>
//                     <p className="text-purple-700 text-lg font-bold whitespace-nowrap truncate">
//                       {project.projectName}
//                     </p>
//                     <p className="text-sm font-normal mt-1">
//                       {project.episode}
//                     </p>
//                     <p className="text-xs font-normal text-gray-400 mt-1">
//                       {timeSince(project.timeStamp)}
//                     </p>
//                   </div>
//                 </>
//               ) : (
//                 <p>No project name available</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NewProject;
