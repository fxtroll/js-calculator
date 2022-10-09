const calculator = require('./app')


test("adds 1 + 5 to equal 6", function () {
  expect(calculator.add(1, 5)).toBe(6)
})

test("adds 7 to the number in memory (6)", function () {
  expect(calculator.add(7)).toBe(13)
})

test("subtracts 5 - 3 to equal 2", function () {
  expect(calculator.sub(5, 3)).toBe(2)
})

test("multiplies 2 * 5 to equal 10", function () {
  expect(calculator.mulitply(2, 5)).toBe(10)
})

test("divides 12 / 3 to equal 4", function () {
  expect(calculator.divide(12, 3)).toBe(4)
})

test("raises 5 to 2nd power to equal 25", function () {
  expect(calculator.exponent(5, 2)).toBe(25)
})

test("cubed root 125 to equal 5", function () {
  expect(calculator.root(125, 3)).toBe(5)
})

test("clears memory", function () {
  expect(calculator.clear()).toBe(true)
})

test("the operation string, 1+2*(8+9)+2**2 will equal 39", function () {
  expect(calculator.stringOfOperations('1+2*(8+9)+2**2')).toBe(39)
})