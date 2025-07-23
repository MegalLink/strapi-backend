/**
 * global router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::global.global',{
    config:{
        find:{
            // use command middlewares:list to get this id
            middlewares:['api::global.global-populate']
        }
    }
});
