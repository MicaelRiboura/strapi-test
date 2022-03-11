'use strict';

/**
 * user-client router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::user-client.user-client');
