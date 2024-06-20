import { extendTailwindMerge, validators } from 'tailwind-merge';

export const customTwMerge = extendTailwindMerge<'typo'>({
  extend: {
    classGroups: {
      typo: [
        { body: [validators.isLength] },
        { subTitle: [validators.isLength] },
        { title: [validators.isLength] },
      ],
    },
  },
});
