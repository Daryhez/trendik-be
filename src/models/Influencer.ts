import {DataTypes, Model} from "sequelize";
import sequelize from "./index";

class Influencer extends Model {
}

Influencer.init({
    id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    artistic_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    uses_facebook: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    uses_tiktok: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    uses_instagram: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    uses_twitter: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    uses_whatsapp: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    uses_youtube: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
}, {
    sequelize,
    modelName: 'Influencer'
});

export default Influencer;