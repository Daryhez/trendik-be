"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-console */
const express_1 = __importDefault(require("express"));
const models_1 = __importDefault(require("./models"));
const Influencer_1 = __importDefault(require("./models/Influencer"));
const InfluencerTag_1 = __importDefault(require("./models/InfluencerTag"));
const GeographicLocation_1 = __importDefault(require("./models/GeographicLocation"));
const InfluencerGeographicLocation_1 = __importDefault(require("./models/InfluencerGeographicLocation"));
const Tag_1 = __importDefault(require("./models/Tag"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8080; // default port to listen
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});
// start the Express server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
    models_1.default.authenticate()
        .then(() => console.log('Connection has been established successfully.'))
        .catch((error) => console.error('Unable to connect to the database:', error));
    Promise.all([
        Influencer_1.default.sync(),
        Tag_1.default.sync(),
        InfluencerTag_1.default.sync(),
        GeographicLocation_1.default.sync(),
        InfluencerGeographicLocation_1.default.sync(),
    ])
        .then(() => console.log("Database schema has been created successfully"))
        .catch((error) => console.error("A problem occurred while creating the database schema: ", error));
});
//# sourceMappingURL=index.js.map