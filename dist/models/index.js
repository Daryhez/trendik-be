/* tslint:disable:no-console */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('sqlite::memory:', {
    logging: console.log, // Default, displays the first parameter of the log function call
});
exports.default = sequelize;
//# sourceMappingURL=index.js.map