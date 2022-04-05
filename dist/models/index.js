"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize('sqlite::memory:', {
    // tslint:disable-next-line:no-console
    logging: console.log, // Default, displays the first parameter of the log function call
});
//# sourceMappingURL=index.js.map