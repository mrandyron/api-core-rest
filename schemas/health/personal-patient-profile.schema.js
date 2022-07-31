const Joi = require('joi');

const id = Joi.number().integer();
const country = Joi.string().max(4);
const name = Joi.string().max(100);
const lastName = Joi.string().max(100);
const dni = Joi.string().max(20);
const image = Joi.string().optional().allow('');
const birthday = Joi.string().optional().allow('');
const genre = Joi.string().optional().allow('');
const bloodType = Joi.string().optional().allow('').max(20);
const eyeColor = Joi.string().optional().allow('').max(20);
const mobile = Joi.string().optional().allow('').max(50);
const phone = Joi.string().optional().allow('').max(50);
const email = Joi.string().optional().allow('').email().max(64);
const city = Joi.string().optional().allow('').max(100);
const state = Joi.string().optional().allow('').max(100);
const zip = Joi.string().optional().allow('').max(20);
const address = Joi.string().optional().allow('').max(1000);
const vaccineCovid = Joi.string().optional().allow('').max(20);
const doseQtyCovid = Joi.number().integer().optional().allow('').max(20);
const profileId = Joi.number().integer();

const getPersonalPatientProfileSchemaById = Joi.object({
    id: id.required()
});

const getPatientProfileSchemaByForm= Joi.object({
    dni,
    lastName,
    email
});

const createPersonalPatientProfileSchema = Joi.object({
    id: id.required(),
    country: country.required(),
    name: name.required(),
    lastName: lastName.required(),
    dni: dni.required(),
    image,
    birthday: birthday.required(),
    genre,
    bloodType,
    eyeColor,
    mobile,
    phone,
    email,
    city, 
    state,
    zip,
    address,
    vaccineCovid,
    doseQtyCovid,
    profileId: profileId.required()
});

const updatePersonalPatientProfileSchema = Joi.object({
    id,
    name,
    lastName,
    image,
    birthday,
    genre,
    bloodType,
    eyeColor,
    mobile,
    phone,
    email,
    city,
    state,
    zip,
    address,
    vaccineCovid,
    doseQtyCovid,
    profileId
});

module.exports = {
    getPersonalPatientProfileSchemaById,
    getPatientProfileSchemaByForm,
    createPersonalPatientProfileSchema,
    updatePersonalPatientProfileSchema
}