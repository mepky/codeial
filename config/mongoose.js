const mongoose = require("mongoose"); // requiring mongoose
mongoose
// .connect("mongodb://localhost/codeial_development")
    .connect(
        "mongodb+srv://ashurbz:ashu3489@cluster0.3zktz.gcp.mongodb.net/codeial_dev?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Connected to Database");
    })
    .catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    });

// mongodb+srv://mepky:<password>@cluster0.hp67w.mongodb.net/test
// mongoose.connect("mongodb+srv://ashurbz:ashu3489@cluster0.3zktz.gcp.mongodb.net/codeial_dev?retryWrites=true&w=majority");// establishing connection

const db = mongoose.connection; // if connection succesfull

// db.on("error", console.error.bind("console", "error in connecting to Db")); // if there is error in connecting

// db.once("open", () => {
//     console.log("Database Successfuly Connected");
// });

module.exports = db; // exporting module