module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
    rules: {
        "@typescript-eslint/camelcase": 1,
        "@typescript-eslint/no-explicit-any": 0,
        "react/prop-types": 0,
        "arrow-parens": ["error", "as-needed"],
        "newline-after-var": ["error", "always"],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-unused-vars": ["error", {
            "vars": "all",
            "args": "after-used",
            "ignoreRestSiblings": false
        }],
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};
