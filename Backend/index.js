const express = require("express");
const cors = require("cors");

const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");


const app = express();
const PORT = 8001;

// Connect to MongoDB
connectToMongoDB("mongodb+srv://vinitpatil280:linkShortener@linkshortenerdb.y36orlo.mongodb.net/")
    .then(() => {
        console.log("Database Connected");
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error);
    });


app.use(cors());
// Middleware
app.use(express.json());

// Routes
app.use('/url', urlRoute);

app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`);
});
