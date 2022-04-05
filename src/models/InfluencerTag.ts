import {DataTypes, Model} from "sequelize";
import sequelize from "./index";
import Influencer from "./Influencer";
import Tag from "./Tag";

class InfluencerTag extends Model {
}

InfluencerTag.init({
    id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    influencer_id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        references: {
            model: Influencer,
            key: 'id',
        }
    },
    tag_id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        references: {
            model: Tag,
            key: 'id',
        }
    }
}, {
    sequelize,
    modelName: 'Influencer'
})

Influencer.belongsToMany(Tag, {through: InfluencerTag})
Tag.belongsToMany(Influencer, {through: InfluencerTag})

export default InfluencerTag;