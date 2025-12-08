// Typography styles configuration

export const typography = {
  h1Primary: {
    className:
      "font-semibold text-2xl leading-10 md:text-4xl md:leading-12 xl:text-5xl xl:leading-14",
  },
  h2Primary: {
    className:
      "font-semibold text-xl leading-7 md:text-3xl md:leading-10 xl:text-4xl xl:leading-12",
  },
  h3Primary: {
    className:
      "font-semibold text-lg leading-6 md:text-2xl md:leading-7 xl:text-3xl xl:leading-10",
  },
  h4Primary: {
    className:
      "font-semibold text-base leading-6 md:text-xl md:leading-6 xl:text-2xl xl:leading-8",
  },
  h5Primary: {
    className:
      "font-semibold text-base leading-6 md:text-base md:leading-6 xl:text-xl xl:leading-6",
  },
  h6Primary: {
    className:
      "font-semibold text-base leading-6 md:text-base md:leading-6 xl:text-base xl:leading-6",
  },
  p1Primary: {
    className: "font-normal text-base leading-6",
  },
  p2Primary: {
    className: "font-normal text-sm leading-5",
  },
  p3Primary: {
    className: "font-normal text-xs leading-4",
  },
  articlePrimary: {
    className: "font-normal text-xl leading-7",
  },
  h1Secondary: {
    className:
      "font-normal text-2xl leading-10 md:text-4xl md:leading-12 xl:text-5xl xl:leading-14",
  },
  h2Secondary: {
    className:
      "font-normal text-xl leading-7 md:text-3xl md:leading-10 xl:text-4xl xl:leading-12",
  },
  h3Secondary: {
    className:
      "font-normal text-lg leading-6 md:text-2xl md:leading-7 xl:text-3xl xl:leading-10",
  },
  h4Secondary: {
    className:
      "font-normal text-base leading-6 md:text-xl md:leading-6 xl:text-2xl xl:leading-8",
  },
  h5Secondary: {
    className:
      "font-normal text-base leading-6 md:text-base md:leading-6 xl:text-xl xl:leading-6",
  },
  h6Secondary: {
    className:
      "font-normal text-base leading-6 md:text-base md:leading-6 xl:text-base xl:leading-6",
  },
  p1Secondary: {
    className: "font-semibold text-base leading-6",
  },
  p2Secondary: {
    className: "font-semibold text-sm leading-5",
  },
  p3Secondary: {
    className: "font-semibold text-xs leading-4",
  },
  articleSecondary: {
    className: "font-semibold text-xl leading-7",
  },
  button: {
    className: "font-medium text-base leading-6",
  },
  helperText: {
    className: "font-medium text-sm leading-5",
  },
} as const;

export type TypographyVariant = keyof typeof typography;

// Variant to HTML element mapping
export const variantMapping: Record<TypographyVariant, string> = {
  h1Primary: "h1",
  h2Primary: "h2",
  h3Primary: "h3",
  h4Primary: "h4",
  h5Primary: "h5",
  h6Primary: "h6",
  p1Primary: "p",
  p2Primary: "p",
  p3Primary: "p",
  articlePrimary: "article",
  h1Secondary: "h1",
  h2Secondary: "h2",
  h3Secondary: "h3",
  h4Secondary: "h4",
  h5Secondary: "h5",
  h6Secondary: "h6",
  p1Secondary: "p",
  p2Secondary: "p",
  p3Secondary: "p",
  articleSecondary: "article",
  button: "button",
  helperText: "span",
};
