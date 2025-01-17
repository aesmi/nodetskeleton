module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/node_modules/",
    "<rootDir>/src/infrastructure/",
    "<rootDir>/src/adapters/",
    "<rootDir>/src/application/mocks/",
    "<rootDir>/src/application/modules/health/",
    "<rootDir>/src/application/shared/",
    "<rootDir>/src/domain/shared/utils/",
    "<rootDir>/src/index",
  ],
};
