const mongoose = require("mongoose");
const express = require("express");





const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnesstracker", {useNewUrlParser: true});

//const db = require("./Develop/models/indexmodels");
//const db = require("./Develop/models/workoutmodels");
//const db = require("./Develop/models")


app.use(require("./Develop/routes/apiroutes"));
app.use(require("./Develop/routes/htmlroutes"));


app.listen(PORT, () => {
    console.log('Listening on port 3001')
});