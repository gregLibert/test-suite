module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts?$': 'babel-jest',
    },
    transformIgnorePatterns: [
      "node_modules/(?!@massalabs/wallet-provider)"
    ],
    roots: [
      "<rootDir>/tests/"
    ],
    testMatch: [
      "**/?(*.)+(spec|test).ts"
    ],
  };
  