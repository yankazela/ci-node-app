import { sum } from './server'

test('Get Home page', () => {
  const text = sum(5, 10)
  expect(text).toBe(15)
})