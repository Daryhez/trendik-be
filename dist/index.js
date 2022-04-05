"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-console */
const express_1 = __importDefault(require("express"));
const models_1 = require("./models");
const app = (0, express_1.default)();
const port = process.env.PORT || 8080; // default port to listen
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});
// start the Express server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
    models_1.sequelize.authenticate()
        .then(() => console.log('Connection has been established successfully.'))
        .catch((error) => console.error('Unable to connect to the database:', error));
});
//# sourceMappingURL=index.js.map