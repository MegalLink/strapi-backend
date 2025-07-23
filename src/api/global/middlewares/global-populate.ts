/**
 * `global-populate` middleware
 */

import type { Core } from "@strapi/strapi";
import { logoPopulate, socialLinkPopulate } from "../../../shared/constants";

const populate = {
  banner: {
    populate: {
      link: true,
    },
  },
  header: {
    populate: {
      logo: logoPopulate,
      navItems: true,
      cta: true,
    },
  },
  footer: {
    populate: {
      logo: logoPopulate,
      navItems: true,
      socialLinks: socialLinkPopulate,
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info("In global-populate middleware.");

    await next();
  };
};
