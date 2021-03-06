const { Model, DataTypes, Sequelize } = require('sequelize');
const { PERSONAL_PROFILE_TABLE } = require('./personal-profile.model');
const { PET_PROFILE_TABLE } = require('./pet-profile.model');
const PREEXISTING_DISEASES_TABLE = 'preexisting_diseases';

const PreexistingDiseasesSchema = {
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
    condition: {
        allowNull: false,
        type: DataTypes.STRING(200),
    },
    treatment: {
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
        }
        // onUpdate: 'CASCADE',
        // onDelete: 'SET NULL'
    },
    petProfileId: {
        field: 'pet_profile_id',
        type: DataTypes.INTEGER,
        unique: false,
        references: {
            model: PET_PROFILE_TABLE,
            key: 'id'
        }
        // onUpdate: 'CASCADE',
        // onDelete: 'SET NULL'
    }
}

class PreexistingDisease extends Model {
    static associate(models) {
        this.belongsTo(models.PersonalProfile, { as: 'personalProfile' });
        this.belongsTo(models.PetProfile, { as: 'petProfile' });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PREEXISTING_DISEASES_TABLE,
            modelName: 'PreexistingDisease',
            timestamps: true
        }
    }
}


module.exports = {
    PREEXISTING_DISEASES_TABLE,
    PreexistingDiseasesSchema,
    PreexistingDisease
}
