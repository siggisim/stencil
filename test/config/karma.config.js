// Karma unit test configuation
module.exports = function(config) {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: [
      "../../node_modules/core-js/client/shim.min.js",
      "../../node_modules/zone.js/dist/zone.js",
      "../../node_modules/zone.js/dist/long-stack-trace-zone.js",
      "../../node_modules/zone.js/dist/proxy.js",
      "../../node_modules/zone.js/dist/sync-test.js",
      "../../node_modules/zone.js/dist/jasmine-patch.js",
      "../../node_modules/zone.js/dist/async-test.js",
      "../../node_modules/zone.js/dist/fake-async-test.js",
      { pattern: "../../web/**/*.ts" }, 
    ],
    karmaTypescriptConfig: {
      tsconfig: "../../web/tsconfig.json",
    },
    preprocessors: {
      "../../**/*.ts": ["karma-typescript"],
    },
    reporters: ["progress", "karma-typescript"],
    browsers: ["Chrome"],
    exclude: [ "../../web/main.ts" ],
  });
};