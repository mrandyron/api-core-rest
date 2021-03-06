const { Model, DataTypes, Sequelize } = require('sequelize');
const { PERSONAL_PROFILE_TABLE } = require('../models/personal-profile.model');
const { PET_PROFILE_TABLE } = require('../models/pet-profile.model');
const ALLERGIES_TABLE = 'allergies';

const AllergiesSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    country: {
        allowNull: false,
        type: DataTypes.STRING(4),
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING(200),
    },
    notes: {
        allowNull: false,
        type: DataTypes.STRING(2000),
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
        field: 'updated_at',
        defaultValue: Sequelize.NOW
    },
    personalProfileId: {
        field: 'personal_profile_id',
        type: DataTypes.INTEGER,
        unique: false,
        references: {
            model: PERSONAL_PROFILE_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    petProfileId: {
        field: 'pet_profile_id',
        type: DataTypes.INTEGER,
        unique: false,
        references: {
            model: PET_PROFILE_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
}

class Allergy extends Model {
    static associate(models) {
        this.belongsTo(models.PersonalProfile, { as: 'personalProfile' });
        this.belongsTo(models.PetProfile, { as: 'petProfile' });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: ALLERGIES_TABLE,
            modelName: 'Allergy',
            timestamps: true
        }
    }
}


module.exports = {
    ALLERGIES_TABLE,
    AllergiesSchema,
    Allergy
}
