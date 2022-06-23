import { sum } from '../../src/shared/num'

describe('sum', () => {
  it('可以加法', () => {
    expect(sum(1, 2)).toEqual(3)
  })
})
