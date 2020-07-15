import db from "dropbox-stream";
import path from "path";
import fs from "fs";

export const uploadToDropbox = async (token, filename) => {
  const up = await db
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

  await fs
    .createReadStream(filename)
    .pipe(up)
    .on("finish", () => console.log("This fires before metadata!"));
};
