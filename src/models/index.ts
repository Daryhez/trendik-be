/* tslint:disable:no-console */
"use strict";
import {Sequelize} from "sequelize";

const sequelize = new Sequelize('sqlite::memory:', {
    logging: console.log, // Default, displays the first parameter of the log function call
});

export default sequelize;