module.exports = {
  parser: "babel-eslint",
  env: {
    node: true,
    es6: true,
    jest: true
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".android.js", ".ios.js"],
        moduleDirectory: ["node_modules", "src"]
      }
    },
    "import/core-modules": ["react", "react-native"]
  },
  extends: [
    "plugin:react/recommended",
    "plugin:flowtype/recommended",
    "airbnb",
    "prettier",
    "prettier/flowtype",
    "prettier/react"
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 6,
    impliedStrict: false,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  plugins: ["babel", "jsx-a11y", "flowtype", "react", "react-native"],
  rules: {
    quotes: ["error", "single"]
  }
};
