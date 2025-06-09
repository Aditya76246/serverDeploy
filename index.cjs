const cors = require("cors");
const express = require("express");
const mongoClient = require("mongodb").MongoClient;

require("dotenv").config();

// const url = "mongodb+srv://adityaSoni:Aditya12345@cluster0.odvv4h1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const PORT = process.env.PORT || 7000;
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post("/add-data", (req, res) => {
    let data = {
        name: req.body.name,
        age: parseInt(req.body.age),
        gender: req.body.gender,
        city: req.body.city,
        job: req.body.job
    }
    mongoClient.connect(process.env.MONGO_URL)
    .then(clientObject => {
        let database = clientObject.db("form-data");
        database.collection("client-data")
        .insertOne(data)
        .then(() => {
            console.log("data inserted");
            res.send();
        });
    });
});

app.get("/get-data", (req, res) => {
    mongoClient.connect(process.env.MONGO_URL)
    .then(clientObject => {
        let database = clientObject.db("form-data");
        database.collection("client-data")
        .find({})
        .toArray()
        .then(documents => {
            res.send(documents);
            res.end();
        });
    });
});

app.get("/get-data/:name", (req, res) => {
    let name = req.params.name;
    mongoClient.connect(process.env.MONGO_URL)
    .then(clientObject => {
        let database = clientObject.db("form-data");
        database.collection("client-data")
        .findOne({name: name})
        .then(documents => {
            res.send(documents);
            res.end();
        });
    });
});

app.listen(PORT, () => console.log(`Setver Started at PORT: ${PORT}`));