module.exports = {
  parser: require("postcss-scss"),
  plugins: [
    require("postcss-nested"),
    require("postcss-preset-env")({
      stage: 2,
      autoprefixer: { grid: true },
    }),
  ]
};
