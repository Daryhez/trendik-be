"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const Influencer_1 = __importDefault(require("./Influencer"));
const Tag_1 = __importDefault(require("./Tag"));
class InfluencerTag extends sequelize_1.Model {
}
InfluencerTag.init({
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
    tag_id: {
        type: sequelize_1.DataTypes.SMALLINT.UNSIGNED,
        references: {
            model: Tag_1.default,
            key: 'id',
        }
    }
}, {
    sequelize: index_1.default,
    modelName: 'Influencer'
});
Influencer_1.default.belongsToMany(Tag_1.default, { through: InfluencerTag });
Tag_1.default.belongsToMany(Influencer_1.default, { through: InfluencerTag });
exports.default = InfluencerTag;
//# sourceMappingURL=InfluencerTag.js.map