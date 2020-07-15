const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv").parse;
const { getJoke } = require("../api/Chuck_Norris_API");
const fs = require("fs");

var newLine = "\r\n";

exports.appendNewJoke = async (joke) => {
  const cleanJoke = {
    id: joke.id,
    joke: joke.value,
  };
  const csv = (await JSONToCSV(cleanJoke, { header: false })) + newLine;
  fs.appendFileSync("./data/source1.csv", csv);
};
exports.addNewJokes = async (limit) => {
  const allJokes = await CSVToJSON().fromFile("./data/source1.csv");
  if (allJokes.length > limit - 1) {
    return true;
  } else {
    const newJoke = await getJoke();
    if (allJokes.filter((el) => el.id === newJoke.id).length === 0) {
      this.appendNewJoke(newJoke);
    }
    return this.addNewJokes(limit);
  }
};

// CSVToJSON().fromFile("./source.csv")
// .then((source) => {
//   console.log(source);
//   source1 = {
//     id: "abc",
//     url: "dce",
//     joke: "hahaha",
//   };
