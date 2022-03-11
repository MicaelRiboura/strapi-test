'use strict';

/**
 *  user-client controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-client.user-client');
