import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
}

export default createJestConfig(customJestConfig)
