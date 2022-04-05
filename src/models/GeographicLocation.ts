import {DataTypes, Model} from "sequelize";
import sequelize from "./index";

class GeographicLocation extends Model {
}

GeographicLocation.init({
    id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    latitude: {
        type: DataTypes.FLOAT({
            length: 3,
            decimals: 10,
        }),
        allowNull: false,
    },
    longitude: {
        type: DataTypes.FLOAT({
            length: 3,
            decimals: 10,
        }),
        allowNull: false,
    },
    location_name: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    modelName: 'GeographicLocation'
});

export default GeographicLocation;