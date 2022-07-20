'use strict';

/**
 * popular-item service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::popular-item.popular-item');
