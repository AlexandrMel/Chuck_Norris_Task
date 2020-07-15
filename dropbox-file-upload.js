const db = require("dropbox-stream");
const path = require("path");
const fs = require("fs");

exports.uploadToDropbox = (token, filename) => {
  const up = db
    .createDropboxUploadStream({
      token: token,
      path: "/test/" + path.basename(filename),
      chunkSize: 1000 * 1024,
      autorename: true,
      mode: "add",
    })
    .on("error", (err) => console.log(err))
    .on("progress", (res) => console.log(res))
    .on("metadata", (metadata) => console.log("Metadata", metadata));

  fs.createReadStream(filename)
    .pipe(up)
    .on("finish", () => console.log("This fires before metadata!"));
};
