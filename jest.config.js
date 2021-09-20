module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts(x)'],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
    moduleNameMapper: {
        'src/(.*)': '<rootDir>/src/$1',
        '\\.svg$': '<rootDir>/__mocks__/svgrMock.js'
    }
};
