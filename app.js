let calculator = {

  // add
  add: function (a, b = this.memory.pop()) {
    this.memory.push(a + b)
    return a + b
  },
  sub: function () { },
  mulitply: function () { },
  divide: function () { },
  exponent: function () { },
  sqrt: function () { },
  log: function (a) { },
  memory: [],

  clear: function () {
    this.memory.splice(0, this.memory.length)
  }
}

console.log(calculator.add(1, 5))
console.log(calculator.memory)
console.log(calculator.clear())
console.log(calculator.memory)