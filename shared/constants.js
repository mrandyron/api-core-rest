module.exports = Object.freeze({
    PERSONAL_PROFILE: [
        'emergencyContacts',
        'preexistingDiseases',
        'allergies',
        'medications',
        'profile'
    ],
    PET_PROFILE: [
        'emergencyContacts',
        'preexistingDiseases',
        'allergies',
        'medications'],
    ARTICLE_PROFILE: ['emergencyContacts'],
    EMERGENCY_CONTACTS: [
        'personalProfile',
        'petProfile',
        'articleProfile'],
    ORM_VALIDATION: [
        {
            path: 'profile_idx_02',
            validatorKey: 'not_unique',
            translateKey: 'PIN_ID_UNIQUE'
        },
        {
            path: 'email',
            validatorKey: 'not_unique',
            translateKey: 'EMAIL_UNIQUE'
        }
        
    ]
},
);