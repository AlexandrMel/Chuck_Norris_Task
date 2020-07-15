exports.writeCSV = (data) => {
  const csvWriter = createCsvWriter({
    path: "out.csv",
    header: [
      { id: "name", title: "Name" },
      { id: "surname", title: "Surname" },
      { id: "age", title: "Age" },
      { id: "gender", title: "Gender" },
    ],
  });

  csvWriter
    .writeRecords(data)
    .then(() => console.log("The CSV file was written successfully"));
};
