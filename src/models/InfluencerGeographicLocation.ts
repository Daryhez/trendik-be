import {DataTypes, Model} from "sequelize";
import sequelize from "./index";
import Influencer from "./Influencer";
import GeographicLocation from "./GeographicLocation";

class InfluencerGeographicLocation extends Model {
}

InfluencerGeographicLocation.init({
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
    geographic_location_id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        references: {
            model: GeographicLocation,
            key: 'id',
        }
    }
}, {
    sequelize,
    modelName: 'InfluencerGeographicLocation'
});

Influencer.belongsToMany(GeographicLocation, {through: InfluencerGeographicLocation})
GeographicLocation.belongsToMany(Influencer, {through: InfluencerGeographicLocation})

export default InfluencerGeographicLocation;