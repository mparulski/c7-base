const path = require('path')

const jestConfig = {
  notify: true,
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  moduleFileExtensions: ['js'],
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\]\\.(js)$'
  ],
  testURL: 'http://localhost/',
  collectCoverage: true
}

module.exports = jestConfig
