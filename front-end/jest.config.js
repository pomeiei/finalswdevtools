module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  reporters: [
    "default",
    ["./node_modules/jest-html-reporter", {
      "pageTitle": "Test Report"
    }]
  ],
  testResultsProcessor: "./node_modules/jest-html-reporter"
};