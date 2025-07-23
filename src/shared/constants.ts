export const imagePopulate = {
  populate: {
    fields: ["alternativeText", "url"],
  },
};

export const blockHeroPopulate = {
  populate: {
    links: true,
    image: {
      populate: {
        fields: ["alternativeText", "url"],
      },
    },
  },
};

export const logoPopulate = {
  populate: {
    image: {
      fields: ["url", "alternativeText"],
    },
  },
};

export const socialLinkPopulate = {
  populate: {
    image: {
      fields: ["url", "alternativeText"],
    },
  },
};
