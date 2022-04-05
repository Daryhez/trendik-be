"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const Influencer_1 = __importDefault(require("./Influencer"));
const GeographicLocation_1 = __importDefault(require("./GeographicLocation"));
class InfluencerGeographicLocation extends sequelize_1.Model {
}
InfluencerGeographicLocation.init({
    id: {
        type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    influencer_id: {
        type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
        references: {
            model: Influencer_1.default,
            key: 'id',
        }
    },
    geographic_location_id: {
        type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
        references: {
            model: GeographicLocation_1.default,
            key: 'id',
        }
    }
}, {
    sequelize: index_1.default,
    modelName: 'InfluencerGeographicLocation'
});
Influencer_1.default.belongsToMany(GeographicLocation_1.default, { through: InfluencerGeographicLocation });
GeographicLocation_1.default.belongsToMany(Influencer_1.default, { through: InfluencerGeographicLocation });
exports.default = InfluencerGeographicLocation;
//# sourceMappingURL=InfluencerGeographicLocation.js.map