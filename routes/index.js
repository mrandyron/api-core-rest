const express = require('express');
const profileRouter = require('./profile.router');
const profileTypeRouter = require('./profile-type.router');
const personalProfileRouter = require('./personal-profile.router');
const petProfileRouter = require('./pet-profile.router');
const articleProfileRouter = require('./article-profile.router');
const emergencyContactRouter = require('./emergency-contact.router');
const preexistingDiseaseRouter = require('./preexisting-diseases.router');
const medicationRouter = require('./medication.router');
const allergyRouter = require('./allergy.router');
const userRouter = require('./user.router');
const pinIdRouter = require('./pin-id.router');
const scanmeRouter = require('./scanme.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api-core-rest', router);
    router.use('/profile', profileRouter);
    router.use('/profile-type', profileTypeRouter);
    router.use('/personal-profile', personalProfileRouter);
    router.use('/pet-profile', petProfileRouter);
    router.use('/article-profile', articleProfileRouter);
    router.use('/emergency-contact', emergencyContactRouter);
    router.use('/preexisting-disease', preexistingDiseaseRouter);
    router.use('/medication', medicationRouter);
    router.use('/allergy', allergyRouter);
    router.use('/user', userRouter);
    router.use('/pin-id', pinIdRouter);
    router.use('/scan-me', scanmeRouter);
}

module.exports = routerApi;
