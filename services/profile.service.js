const boom = require('@hapi/boom');
const { models, Op } = require('../libs/sequelize');
const constants = require('../shared/constants');

class ProfileService {
    constructor() { }

    async find() {
        const response = await models.Profile.findAll({
            include: [
                { association: 'user' },
                { association: 'personalProfile', include: constants.PERSONAL_PROFILE },
                { association: 'petProfile', include: constants.PET_PROFILE },
                { association: 'articleProfile', include: constants.ARTICLE_PROFILE }
            ]
        });
        return response;
    }

    async findOnlyProfile(body) {
        const profile = await models.Profile.findOne({
            where: {
                [Op.and]: [
                    { qrId: body.qrId }, { country: body.country }
                ]
            }
        });
        return profile;
    }

    async findOne(id) {
        const profile = await models.Profile.findByPk(id, {
            include: [
                { association: 'user' },
                { association: 'personalProfile', include: constants.PERSONAL_PROFILE },
                { association: 'petProfile', include: constants.PET_PROFILE },
                { association: 'articleProfile', include: constants.ARTICLE_PROFILE }
            ]
        });

        if (!profile) {
            throw boom.notFound('Profile not found');
        }
        delete profile.dataValues.user.dataValues.password;
        return profile;
    }

    async findByPinId(body) {
        const profile = await models.Profile.findOne({
            include: [
                { association: 'user' },
                { association: 'personalProfile', include: constants.PERSONAL_PROFILE },
                { association: 'petProfile', include: constants.PET_PROFILE },
                { association: 'articleProfile', include: constants.ARTICLE_PROFILE }
            ], where: {
                [Op.and]: [
                    { qrId: body.qrId }, { country: body.country }
                ]
            }
        });
        if (!profile) {
            throw boom.notFound('Profile not found');
        }
        delete profile.dataValues.user.password;
        return profile;
    }

    async create(data) {

        // const profile = await this.findOne(data.id);
        // if (!profile) {
        const newProfile = await models.Profile.create(data);
        return newProfile;
        // }
    }

    async update(id, changes) {
        const model = await this.findOne(id);
        const rta = await model.update(changes);
        return rta;
    }

    async delete(id) {
        const model = await this.findOne(id);
        await model.destroy();
        return { rta: true };
    }
}
module.exports = ProfileService;