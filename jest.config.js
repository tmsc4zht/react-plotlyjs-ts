module.exports = {
  "testEnvironment": "jsdom",
  "roots": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "setupFiles": ["jest-canvas-mock"],
  "globals": {
    "ts-jest": {
      "tsconfig": {
        "jsx": 'react-jsx',
      },
    },
  },
}