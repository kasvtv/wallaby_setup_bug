module.exports = () => ({
  autoDetect: true,
  files: [
    'index.js',
  ],
  tests: [
    'index.test.js',
  ],
  setup(wallaby) {
    wallaby.testFramework.configure({
      setupFilesAfterEnv: ['./setupFilesAfterEnvFile.js']
    })
  }
})
