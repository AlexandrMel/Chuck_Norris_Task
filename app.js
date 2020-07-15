import fs from "fs";
import { addNewJokes } from "./util/addNewJokes.js";
import { uploadToDropbox } from "./util/dropbox-file-upload.js";
import "dotenv/config.js";
const newLine = "\r\n";

// Main function
const RequestAndSaveJokes = async () => {
  try {
// Check if there is no data file present
    fs.stat(process.env.FILE_PATH, async function (err, stat) {
// if there is no data.csv file, create it and set header fields
      if (err !== null) {
        console.log("New file, just writing headers");
        var fields = ["ID", "CHUCK_NORRIS_JOKES"] + newLine;
        fs.writeFile(process.env.FILE_PATH, fields, function (err) {
          if (err) throw err;
          console.log("file saved");
        });
      }
// Once we have a data.csv with the right fields, populate the file with 100 jokes
const LoadedAllJokes = await addNewJokes(10);
if (LoadedAllJokes) {
  
// Once we have a data.csv with 100 jokes, upload the file to Dropbox
        const finalFileUploaded = await uploadToDropbox(
          process.env.DROPBOX_TOKEN,
          process.env.FILE_PATH
        );
      }
    });
  } catch (err) {
    console.log(err);
  }
};
RequestAndSaveJokes();