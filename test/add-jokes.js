import { appendOneJoke } from "../util/addNewJokes.js";
import CSVToJSON from "csvtojson";
import "dotenv/config.js";

describe("Add jokes functions", () => {
  test("should append one new joke to the list", () => {
    const allJokes = CSVToJSON().fromFile(process.env.FILE_PATH);
    expect(appendOneJoke).toEqual(
      CSVToJSON().fromFile(process.env.FILE_PATH)[
        CSVToJSON().fromFile(process.env.FILE_PATH).length - 1
      ]
    );
  });
});
