const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useInifiedTopology: true,
    };
    await mongoose.connect("mongodb://localhost/todo-app", connectionParams);
    console.log("connected to database");
  } catch (error) {
    console.log("Couldnot conect to database", error);
  }
};
