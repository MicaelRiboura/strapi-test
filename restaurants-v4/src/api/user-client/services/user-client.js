'use strict';

/**
 * user-client service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-client.user-client');
