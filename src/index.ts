/* tslint:disable:no-console */
import express from "express";
import sequelize from "./models";
import Influencer from "./models/Influencer";
import InfluencerTag from "./models/InfluencerTag";
import GeographicLocation from "./models/GeographicLocation";
import InfluencerGeographicLocation from "./models/InfluencerGeographicLocation";
import Tag from "./models/Tag";

const app = express();
const port = process.env.PORT || 8080; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
    sequelize.authenticate()
        .then(() => console.log('Connection has been established successfully.'))
        .catch((error) => console.error('Unable to connect to the database:', error));
    Promise.all([
        Influencer.sync(),
        Tag.sync(),
        InfluencerTag.sync(),
        GeographicLocation.sync(),
        InfluencerGeographicLocation.sync(),
    ])
        .then(() => console.log("Database schema has been created successfully"))
        .catch((error) => console.error("A problem occurred while creating the database schema: ", error));
});