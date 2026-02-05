const { createUploadthing } = require("uploadthing/express");

const f = createUploadthing();

exports.uploadRouter = {
  imageUploader: f({
    image: { maxFileSize: "4MB", maxFileCount: 5 },
  }).onUploadComplete((data) => {
    console.log("Upload complete:", data);
  }),
};
