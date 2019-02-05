module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./__mocks__/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg)$': './__mocks__/fileMock.js'
  },
  transform: {
    '^.+\\.(ts|js)x?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
