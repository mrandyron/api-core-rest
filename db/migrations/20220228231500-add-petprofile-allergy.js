'use strict';

const { AllergiesSchema, ALLERGIES_TABLE } = require('./../models/allergy.model');
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(ALLERGIES_TABLE, 'personal_profile_id', AllergiesSchema.personalProfileId);
    await queryInterface.addColumn(ALLERGIES_TABLE, 'pet_profile_id', AllergiesSchema.petProfileId);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(ALLERGIES_TABLE, 'personal_profile_id', AllergiesSchema);
    await queryInterface.removeColumn(ALLERGIES_TABLE, 'pet_profile_id', AllergiesSchema);
  }
};