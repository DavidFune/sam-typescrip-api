/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    rootDir: "product",
    clearMocks: true,
    collectCoverage: true,
    //testMatch: ['**/tests/unit/*.test.ts'],
    testRegex: ".*\\..*spec\\.ts$",
    transform: {
        "^.+\\.ts?$":["@swc/jest"]
    },
};
