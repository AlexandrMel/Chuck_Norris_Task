import fs from "fs";
import { addNewJokes } from "./util/addNewJokes.js";
import { uploadToDropbox } from "./util/dropbox-file-upload.js";
// require("dotenv").config();
import "dotenv/config.js";
const newLine = "\r\n";

const RequestAndSaveJokes = async () => {
  try {
    fs.stat(process.env.FILE_PATH, async function (err, stat) {
      if (err !== null) {
        console.log("New file, just writing headers");
        var fields = ["ID", "CHUCK_NORRIS_JOKES"] + newLine;
        fs.writeFile(process.env.FILE_PATH, fields, function (err) {
          if (err) throw err;
          console.log("file saved");
        });
      }
      const LoadedAllJokes = await addNewJokes(10);
      if (LoadedAllJokes) {
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

// const { Parser } = require("json2csv");
// // const json2csv = require('json2csv').parse
// const JSONToCSV = require("json2csv").parse;
// const allJokes = await CSVToJSON().fromFile("./source.csv");
// console.log(allJokes.length);
// const createCsvWriter = require("csv-writer").createObjectCsvWriter;
// const csv = require("csv-parser");
// source1 = {
//   id: "ab7",
//   url: "dce",
//   joke: "hahaha",
// };
// CSVToJSON().fromFile("./source.csv")
// .then((source) => {
//   console.log(source);
//   source1 = {
//     id: "abc",
//     url: "dce",
//     joke: "hahaha",
//   };
//   const csv = JSONToCSV(source1, { header: false }) + newLine;
//   fs.appendFileSync("./source.csv", csv);
// });
// var fields = ['Total', 'Name'];
// // const opts = { fields };

// var appendThis = [
//     {
//         'Total': '100',
//         'Name': 'myName1'
//     },
//     {
//         'Total': '200',
//         'Name': 'myName2'
//     }
// ];
// try {
//     const parser = new Parser();
//     var csv1 = parser.parse(appendThis);
//     console.log(csv1);
// } catch (err) {
//     console.error(err);
// }

// fs.stat('file.csv', function (err, stat) {
//     if (err == null) {
//         console.log('File exists');

//         //write the actual data and end with newline
//          csv1 = csv1 + newLine;

//         fs.appendFile('file.csv', csv1, function (err) {
//             if (err) throw err;
//             console.log('The "data to append" was appended to file!');
//         });
//     }
//     else {
//         //write the headers and newline
//         console.log('New file, just writing headers');
//         fields= (fields + newLine);

//         fs.writeFile('file.csv', fields, function (err) {
//             if (err) throw err;
//             console.log('file saved');
//         });
//     }
// });
// userObj = {
//     name: "John",
//     surname: "Snow",
//     age: 26,
//     gender: "M",
//   }
// //   userObj = JSON.parse(JSON.stringify(userObj))
// fs.appendFile("data.csv", userObj, (err) => {
//   if (err) console.error("Couldn't append the data");
//   console.log("The data was appended to file!");
// });

// try {
//   fs.createReadStream("data.csv")
//     .pipe(csv())
//     .on("data", (row) => {
//       console.log(row);
//     })
//     .on("end", () => {
//       console.log("CSV file successfully processed");
//     });
// } catch (err) {
//   console.log(err);
// }
