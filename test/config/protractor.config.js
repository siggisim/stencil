// Protractor end to end test configuration
exports.config = {
  baseUrl: 'http://localhost:8080',
  capabilities: {
    'browserName': 'firefox'
  },
  directConnect: true,
  framework: 'jasmine',
  specs: ['../../**/*.e2e.js' ],
  useAllAngular2AppRoots: true,
};
