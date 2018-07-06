module.exports = {
    "root": true,
    "extends": ["tslint-react"],
    "compilerOptions": {
        "allowUnusedLabels": false,
        "noUnusedParameters": true
    },
    "rulesDirectory": [
        "node_modules/tslint-clean-code/dist/src"
    ],
    "rules": {
        "no-unnecessary-initializer": true,
        "adjacent-overload-signatures": true,
        "only-arrow-functions": [true, "allow-declarations"],
        "no-switch-case-fall-through": true,
        "no-eval": true,

        /**
         * Common Bugs and Correctness. The following rules should be turned on because they find
         * common bug patterns in the code or enforce type safety.
         */
        "no-any": false,
        "forin": true,
        "no-console": [true, "debug", "info", "log", "time", "timeEnd", "trace"],
        "no-string-literal": false,
        "triple-equals": true,
        "no-use-before-declare": false,
        "no-submodule-imports": [
            true,
            "rxjs",
            "lodash",
            "react-stockcharts",
            "app",
            "tasks"
        ],

        "label-position": true,
        "no-arg": true,
        "no-bitwise": true,
        "no-debugger": true,
        "no-duplicate-variable": true,
        "no-sparse-arrays": true,
        "use-isnan": true,
        "no-conditional-assignment": true,
        "radix": true,
        "switch-default": true,
        "no-empty": true,
        "no-invalid-this": true,
        "no-unused-expression": true,

        "no-unused-variable": false,
        "no-for-in-array": true,
        "no-string-throw": true,
        "no-void-expression": [true, "ignore-arrow-function-shorthand"],
        "return-undefined": true,

        /**
         * Code Clarity. The following rules should be turned on because they make the code
         * generally more clear to the reader.
         */
        "member-ordering": [false, {
            "order": [
                "public-static-field",
                "protected-static-field",
                "private-static-field",
                "public-instance-field",
                "protected-instance-field",
                "private-instance-field",
                "public-constructor",
                "protected-constructor",
                "private-constructor",
                "public-static-method",
                "public-instance-method",
                "protected-static-method",
                "protected-instance-method",
                "private-static-method",
                "private-instance-method"
            ]
        }],
        "typedef": [false, "call-signature", "parameter", "member-variable-declaration"], // should be true
        "no-default-export": false,
        "variable-name": [true, "ban-keywords", "check-format", "allow-pascal-case", "allow-leading-underscore"],
        "prefer-object-spread": true,
        "callable-types": true,

        "no-shadowed-variable": true,
        "no-var-requires": true,
        "jsdoc-format": true,
        "max-file-line-count": [true, 1300],
        "max-line-length": [true, {
            "limit": 140,
            "ignore-pattern": "^import |^export {(.*?)}"
        }],
        "max-classes-per-file": [true, 2],
        "cyclomatic-complexity": [true, 5],
        "member-access": true,
        "no-empty-interface": false,
        "no-require-imports": false,
        "no-var-keyword": true,
        "prefer-const": true,
        "array-type": [true, "array"],
        "arrow-parens": [true, "ban-single-arg-parens"],
        "interface-name": [true, "always-prefix"],
        "class-name": true,
        "comment-format": true,
        "new-parens": true,
        "no-construct": true,
        "no-inferrable-types": false,
        "no-null-keyword": false,
        "object-literal-sort-keys": false,
        "one-variable-per-declaration": true,
        "no-invalid-template-strings": true,
        "no-parameter-properties": true,
        "unified-signatures": true,
        "type-literal-delimiter": true,

        /**
         * Whitespace related rules. The only recommended whitespace strategy is to pick a single format and
         * be consistent.
         */
        "eofline": true,
        "one-line": false,
        "no-trailing-whitespace": true,
        "align": [false, "parameters", "statements"],
        "indent": [false, "spaces"],
        "no-consecutive-blank-lines": false,
        "quotemark": [true, "single", "jsx-double", "avoid-template"],
        "semicolon": [true, "always", "ignore-bound-class-methods"],
        "curly": true,
        "trailing-comma": true,
        "typedef-whitespace": false,
        "whitespace": [true, "check-branch", "check-decl", "check-operator", "check-separator", "check-type"],

        /**
         * Controversial/Configurable rules.
         */
        "ban": false,
        "prefer-type-cast": false,
        "no-internal-module": false,
        "no-angle-bracket-type-assertion": false,

        "no-reference": true,

        /**
         *  tslint-react rules: https://github.com/palantir/tslint-react
         */
        "jsx-alignment": true,
        "jsx-ban-props": [true],
        "jsx-boolean-value": [true, "always"],
        "jsx-curly-spacing": [true, "never"],
        "jsx-no-bind": true,
        "jsx-no-lambda": false,
        "jsx-no-multiline-js": false,
        "jsx-no-string-ref": true,
        "jsx-use-translation-function": false,
        "jsx-self-close": true,
        "jsx-wrap-multiline": true,
    }
};
