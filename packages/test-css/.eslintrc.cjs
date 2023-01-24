// eslint-disable-next-line no-undef
module.exports = {
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react-hooks/exhaustive-deps": "warn",
  },
};