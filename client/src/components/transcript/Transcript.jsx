import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../../utils/Api.js";
import Cookies from "js-cookie";

function Transcript({ fetchData, details, setDetails }) {
  const navigate = useNavigate();
  const { projectName } = useParams();

  const handleEditClick = (item) => {
    Cookies.set('detailId', item._id);
    navigate(`/upload/${projectName}/edit-transcript`, {
      state: { description: item.description },
    });
  };

  const handleDeleteClick = async (detailId) => {
    const uploadId = Cookies.get("uploadId");
    const fileId = Cookies.get("fileId");

    try {
      await API.deleteDetails(uploadId, fileId, detailId);
      setDetails((prevDetails) => prevDetails.filter(item => item._id !== detailId));
      console.log("Delete success");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const formatDate = (isoDate) => {
    return new Date(isoDate).toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).replace(",", " |");
  };

  return (
    <div className="ml-16 mt-4">
      <div className="w-10/12 h-12 flex justify-between rounded-lg bg-purple-700">
        <div className="flex items-center ml-5">
          <p className="text-stone-100 font-semibold text-sm">
            All files are processed! Your winget is ready to go!
          </p>
        </div>
        <div className="flex items-center mr-5">
          <button className="w-20 h-8 bg-stone-100 rounded-md font-semibold text-xs">
            Try it out!
          </button>
        </div>
      </div>

      <table className="border-collapse w-10/12 mt-4 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="font-medium">
            <th className="border-b border-t border-l pr-10">Name</th>
            <th className="border-b border-t pr-10">Upload Date & Time</th>
            <th className="border-b border-t py-2 pr-10">Status</th>
            <th className="border-b border-t border-r py-2 pr-8">Action</th>
          </tr>
        </thead>
        <tbody>
          {details?.length ? (
            details.map((item, index) => (
              <tr key={index}>
                <td className="border-b border-l text-center">{item.name}</td>
                <td className="border-b text-sm text-center">
                  {formatDate(item.timeStamp)}
                </td>
                <td className="border-b text-sm text-center">Done</td>
                <td className="border-b border-r flex justify-center space-x-2 py-2">
                  <button
                    className="border w-10 h-7 text-sm font-medium cursor-pointer"
                    onClick={() => handleEditClick(item)}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(item._id)}
                    className="border w-16 h-7 text-sm font-medium cursor-pointer text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Transcript;

