const express = require("express");
const urlRoute = require("./routes/url");
const urlRouteGet = require("./routes/url");
const { connectToMongoDB } = require("./connect");

const app = express();
const PORT = 8001;

connectToMongoDB().then(
    console.log("DataBase Connected");
);


app.use(express.json());
app.use('/url', urlRoute);

app.use('/shortenedID', urlRouteGet);

app.listen(PORT, () => {
    console.log('Server started at PORT:  ${PORT}');
})
