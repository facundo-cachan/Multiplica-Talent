module.exports = {
  verbose: true,
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest.setup.js'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  clearMocks: true,
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|@fortawesome)',
  ],
  cacheDirectory: '.jest/cache',
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/node_modules/**'],
};
