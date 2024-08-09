const Upload = require("../models/upload.model.js");
const { uploadItems } = require("../utils/constants.js");

const createUpload = async (req, res) => {
  const { projectName } = req.body;
  const userId = req.params.userId;

  const newUpload = new Upload({
    projectName,
    userId,
    timeStamp: Date.now(),
    files: uploadItems,
  });

  const savedUpload = await newUpload.save();
  res.status(201).json({ upload: savedUpload });
};

const createDetails = async (req, res) => {
  const { uploadId, fileId } = req.params;
  const { name, description } = req.body;
  try {
    const upload = await Upload.findById(uploadId);
    if (!upload) {
      return res.status(404).json({ message: "Upload not found." });
    }
    const fileToUpdate = upload.files.id(fileId);
    if (!fileToUpdate) {
      return res.status(404).json({ message: "File not found." });
    }

    fileToUpdate.details.push({ name, description, timeStamp: Date.now() });
    await upload.save();
    res.status(200).json({ upload });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error saving details.", error: err.message });
  }
};

const updateDetails = async (req, res) => {
  const { uploadId, fileId, detailId } = req.params;

  const { description } = req.body;

  try {
    const upload = await Upload.findById(uploadId);
    if (!upload) {
      return res.status(404).json({ message: "Upload not found." });
    }
    const fileToUpdate = upload.files.id(fileId);
    if (!fileToUpdate) {
      return res.status(404).json({ message: "File not found." });
    }
    const detailsToUpdate = fileToUpdate.details.id(detailId);
    if (!detailsToUpdate) {
      return res.status(404).json({ message: "Details not found." });
    }
    detailsToUpdate.description = description;
    await upload.save();
    res.status(200).json({ upload });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating description.", error: err.message });
  }
};

const deleteDetails = async (req, res) => {
  const { uploadId, fileId, detailId } = req.params;

  try {
    const upload = await Upload.findById(uploadId);
    if (!upload) {
      return res.status(404).json({ message: "Upload not found." });
    }
    const fileToUpdate = upload.files.id(fileId);
    if (!fileToUpdate) {
      return res.status(404).json({ message: "File not found." });
    }
    const detailsIndex = fileToUpdate.details.findIndex(
      (detail) => detail._id.toString() === detailId
    );
    if (detailsIndex === -1) {
      return res.status(404).json({ message: "Details not found." });
    }
    fileToUpdate.details.splice(detailsIndex, 1);
    await upload.save();

    res.status(200).json({ message: "Details deleted successfully.", upload });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting details.", error: err.message });
  }
};

const getAllUpload = async (req, res) => {
  const userId = req.params.userId;
  if (!userId) {
    return res
      .status(401)
      .json({ message: "Please login to perform this action." });
  }
  try {
    const uploads = await Upload.find({ userId });
    res.status(200).json({ uploads });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving uploads.", error: err.message });
  }
};

const getFilesByUploadId = async (req, res) => {
  const uploadId = req.params.uploadId;

  try {
    const upload = await Upload.findById(uploadId);
    if (!upload) {
      return res.status(404).json({ message: "Upload not found." });
    }
    const files = upload.files;
    res.status(200).json({ files });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving files.", error: err.message });
  }
};

const getDetailsByFileId = async (req, res) => {
  const { uploadId, fileId } = req.params;

  try {
    const upload = await Upload.findById(uploadId);
    if (!upload) {
      return res.status(404).json({ message: "Upload not found." });
    }

    const file = upload.files.id(fileId);
    if (!file) {
      return res.status(404).json({ message: "File not found." });
    }

    const details = file.details;
    res.status(200).json({ details });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving details.", error: err.message });
  }
};

module.exports = {
  createUpload,
  createDetails,
  updateDetails,
  deleteDetails,
  getAllUpload,
  getFilesByUploadId,
  getDetailsByFileId,
};
