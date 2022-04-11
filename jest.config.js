/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  verbose: true,
  preset: 'ts-jest',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  clearMocks: true,
  resetMocks: true,
  coverageProvider: 'babel',
  collectCoverageFrom: [
    '/src/**/*.ts',
    '!**/node_modules/**',
    '!**/dist/**'
  ],
  coverageDirectory: 'coverage',
  roots: ['<rootDir>/src'],
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleFileExtensions: ["js", "ts"],
};
