const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/marisela's-api")
  .then(() => {
    console.log("moongo connection open");
  })
  .catch((err) => {
    console.log("mongo connection error");
    console.log(err);
  });
