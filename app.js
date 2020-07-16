import fs from "fs";
import { addNewJokes } from "./util/addNewJokes.js";
import { uploadToDropbox } from "./util/dropbox-file-upload.js";
import "dotenv/config.js";
const newLine = "\r\n";

// Main function
const RequestAndSaveJokes = async () => {
  try {
    // Always start with creating new data.csv file and set Header fields
    var fields = ["ID", "CHUCK_NORRIS_JOKES"] + newLine;
    await fs.writeFile(process.env.FILE_PATH, fields, function (err) {
      if (err) throw err;
      console.log("file saved");
    });
    // fill the data.csv file with 100 new unique chuck norris jokes
    const LoadedAllJokes = await addNewJokes(100);
    if (LoadedAllJokes) {
      // Once we have a data.csv with 100 jokes, upload the file to Dropbox
      await uploadToDropbox(process.env.DROPBOX_TOKEN, process.env.FILE_PATH);
    }
  } catch (err) {
    console.log(err);
  }
};
RequestAndSaveJokes();
