"use strict";
import {Sequelize} from "sequelize";

export const sequelize = new Sequelize('sqlite::memory:', {
    // tslint:disable-next-line:no-console
    logging: console.log, // Default, displays the first parameter of the log function call
})