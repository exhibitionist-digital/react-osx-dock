module.exports = {
  presets: [
    ["@babel/preset-env", { useBuiltIns: "usage", corejs: { version: 3 } }],
    "@babel/preset-react"
  ],
  plugins: [
    "@babel/plugin-proposal-do-expressions"
  ]
};
