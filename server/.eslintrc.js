module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        "multiline-ternary": ["off", "always"],
        indent: ["off", 4], // отступ
        semi: [1, "always"], // точка с запятой
        "space-before-function-paren": [
            "error",
            {
                anonymous: "always",
                named: "never"
            }
        ], // пробел между функцией и аргументами в скобках
        quotes: [
            "error",
            "double",
            {
                allowTemplateLiterals: true,
                avoidEscape: true
            }
        ], // кавычки
        "no-unused-vars": [
            "off",
            {
                ignoreRestSiblings: true
            }
        ] // игнорировать объявленные, но не используемые переменные
    }
};
