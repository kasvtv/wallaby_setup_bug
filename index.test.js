const index = require('.')

describe.only('DynamoDBService tests', () => {
  it('works', () => {
    expect(index()).toBe(123)
  })
})
