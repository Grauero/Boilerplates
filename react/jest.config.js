module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  setupTestFrameworkScriptFile: './__mocks__/jest.setup.js',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg)$': './__mocks__/fileMock.js'
  },
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest'
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$']
};
