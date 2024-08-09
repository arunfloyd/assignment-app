// API.js
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const API = {

  getUserById: async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/getById/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  updateUserDetails: async (userId, userData) => {
    try {
      const response = await axios.put(`${API_URL}/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  createUpload: async (projectName, userId) => {
    try {
      
      const response = await axios.post(`${API_URL}/upload/${userId}`, {
        projectName,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  createDetails: async (uploadId, fileId, details) => {
    try {
      const response = await axios.post(
        `${API_URL}/create/${uploadId}/${fileId}`,
        details
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  updateDetails: async (uploadId, fileId, detailId,description) => {
    try {
      const response = await axios.put(
        `${API_URL}/update/${uploadId}/${fileId}/${detailId}`,{description}
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  deleteDetails: async (uploadId, fileId, detailId) => {
    try {
      const response = await axios.delete(
        `${API_URL}/delete/${uploadId}/${fileId}/${detailId}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getAllUploads: async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/getAll/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getAllFilesByUploadId: async (uploadId) => {
    try {
      const response = await axios.get(`${API_URL}/files/${uploadId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  getAllDetailsByFileId: async (uploadId, fileId) => {
    try {
      const response = await axios.get(
        `${API_URL}/details/${uploadId}/${fileId}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export { API };
