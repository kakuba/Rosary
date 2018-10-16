module.exports = {
  rootDir: '.',
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'client/**/*.{js,jsx}'
  ],
  // setupFiles : ['<rootDir>/jsdom.config.js', '<rootDir>/fontawesome.config.js'],
  setupTestFrameworkScriptFile: '<rootDir>/enzyme.config.js',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/mocks/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/test/mocks/styleMock.js'
  }
};
