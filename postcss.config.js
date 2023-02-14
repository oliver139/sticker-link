module.exports = {
  plugins: [
    require("postcss-nested"),
    require("postcss-preset-env")({
      stage: 2,
      autoprefixer: { grid: true },
    }),
  ]
};
