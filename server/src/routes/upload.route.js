const express = require("express");
const uploadRouter = express.Router();
const {
  createUpload,
  createDetails,
  updateDetails,
  deleteDetails,
  getAllUpload,
  getFilesByUploadId,
  getDetailsByFileId
} = require("../controllers/upload.controller.js");

uploadRouter.post("/upload/:userId", createUpload);
uploadRouter.post("/create/:uploadId/:fileId", createDetails);
uploadRouter.put("/update/:uploadId/:fileId/:detailId", updateDetails);
uploadRouter.delete("/delete/:uploadId/:fileId/:detailId", deleteDetails);
uploadRouter.get("/getAll/:userId", getAllUpload);
uploadRouter.get("/files/:uploadId", getFilesByUploadId);
uploadRouter.get('/details/:uploadId/:fileId',getDetailsByFileId);

module.exports = uploadRouter;
