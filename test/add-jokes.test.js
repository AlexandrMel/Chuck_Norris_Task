import { appendOneJoke, addNewJokes } from "../util/addNewJokes.js";
import CSVToJSON from "csvtojson";
import "dotenv/config.js";
process.env.FILE_PATH = "./test/data.csv";
var newLine = "\r\n";
import fs from "fs";

describe("Add jokes functions", () => {
  beforeAll(async () => {
    await fs.truncate(process.env.FILE_PATH, 0, function () {
      console.log("cleaned csv file");
    });
    var fields = ["id", "CHUCK_NORRIS_JOKES"] + newLine;
    await fs.writeFile(process.env.FILE_PATH, fields, function (err) {
      if (err) throw err;
      console.log("file saved");
    });
  });
  test("should append n number of new jokes to the csv list", async () => {
    let n = 10;
    await addNewJokes(n);
    const allJokes = await CSVToJSON().fromFile(process.env.FILE_PATH);
    await expect(allJokes.length).toEqual(n);
  });
  test("should append one new joke to the csv list", async () => {
    let joke = { id: "abc", value: "dce" };
    const newJoke = await appendOneJoke(joke);
    const allJokes = await CSVToJSON().fromFile(process.env.FILE_PATH);
    await expect(newJoke.id).toEqual(allJokes[allJokes.length - 1].id);
  });
});
