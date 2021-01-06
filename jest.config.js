
module.exports = {
    roots: ['<rootDir>'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
    setupFiles: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>[/\\\\](build|docs|node_modules|.next)[/\\\\]'],
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|ts|tsx)$'],
    testEnvironment: 'jsdom',
    testURL: 'http://localhost',
    transform: {
      '^.+\\.(tsx|ts|js)$': 'babel-jest',
    },
    testRegex: '/__tests__/.*\\.(test|spec)\\.tsx?$',
    snapshotSerializers: ['enzyme-to-json/serializer'],
    watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  };