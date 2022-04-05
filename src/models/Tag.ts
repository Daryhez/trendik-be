import {DataTypes, Model} from "sequelize";
import sequelize from "./index";

class Tag extends Model {
}

Tag.init({
    id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
}, {
    sequelize,
    modelName: 'Tag'
});

export default Tag;