"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
class GeographicLocation extends sequelize_1.Model {
}
GeographicLocation.init({
    id: {
        type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    latitude: {
        type: sequelize_1.DataTypes.FLOAT({
            length: 3,
            decimals: 10,
        }),
        allowNull: false,
    },
    longitude: {
        type: sequelize_1.DataTypes.FLOAT({
            length: 3,
            decimals: 10,
        }),
        allowNull: false,
    },
    location_name: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: index_1.default,
    modelName: 'GeographicLocation'
});
exports.default = GeographicLocation;
//# sourceMappingURL=GeographicLocation.js.map