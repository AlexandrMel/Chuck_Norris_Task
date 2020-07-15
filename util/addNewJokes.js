import CSVToJSON from "csvtojson";
import JSONToCSV0 from "json2csv";
const JSONToCSV = JSONToCSV0.parse;
import { getAChuckNorrisJoke } from "../api/Chuck_Norris_API.js";
import fs from "fs";
import "dotenv/config.js";
var newLine = "\r\n";

//recursive function to fill the data.csv file with 100 jokes
export const addNewJokes = async (nrOfJokes = 20) => {
  try {
    const allJokes = await CSVToJSON().fromFile(process.env.FILE_PATH);
    if (allJokes.length > nrOfJokes - 1) {
      return true;
    } else {
      const newJoke = await getAChuckNorrisJoke();
      if (allJokes.filter((el) => el.id === newJoke.id).length === 0) {
        appendOneJoke(newJoke);
        console.log();
      }
      return this.addNewJokes(nrOfJokes);
    }
  } catch (err) {
    console.log(err);
  }
};
// helping function to add new unique joke to the list in data.csv
const appendOneJoke = async (joke) => {
  try {
    const cleanJoke = {
      id: joke.id,
      joke: joke.value,
    };
    console.log(cleanJoke);
    const csv = (await JSONToCSV(cleanJoke, { header: false })) + newLine;
    fs.appendFileSync(process.env.FILE_PATH, csv);
  } catch (err) {
    console.log(err);
  }
};