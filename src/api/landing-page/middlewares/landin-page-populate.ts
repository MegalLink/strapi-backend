/**
 * `landin-page-populate` middleware
 */

import type { Core } from '@strapi/strapi';
import { imagePopulate, logoPopulate } from "../../../shared/constants";
import { posix } from 'path';

const populate = {
    blocks: {
      on: {
        "blocks.hero": {
          populate: {
            links: true,
            image:{
              fields: ["alternativeText", "name","formats"],

            }
          },
        },
      },
    },
}; 

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info('In landin-page-populate middleware.');

    await next();
  };
};
