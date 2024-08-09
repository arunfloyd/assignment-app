const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  projectName: {
    type: String,
  },
  episode: {
    type: String,
    default: "4 Episodes",
  },
  timeStamp: {
    type: Date,
  },
  userId: {
    type: String,
  },
  files: [
    {
      url: {
        type: String,
      },
      text: {
        type: String,
      },

      details: [
        {
          name: {
            type: String,
          },
          description: {
            type: String,
          },
          timeStamp: {
            type: Date,
            default: Date.now,
          },
        },
      ],
    },
  ],
});

const Upload = mongoose.model("Upload", uploadSchema);

module.exports = Upload;
