let calculator = {

  // add
  add: function (a, b = this.memory.pop()) {
    this.memory.push(a + b)
    return a + b
  },
  sub: function (a, b = this.memory.pop()) {
    this.memory.push(a - b)
    return a - b;
  },
  mulitply: function (a, b = this.memory.pop()) {
    this.memory.push(a * b)
    return a * b;
  },
  divide: function (a, b = this.memory.pop()) {
    this.memory.push(a / b)
    return a / b;
  },
  exponent: function (a, b = this.memory.pop()) {
    this.memory.push(a ** b)
    return a ** b
  },
  root: function (a, b = this.memory.pop()) {
    this.memory.push(a ** (1 / b))
    return a ** (1 / b)
  },
  log: function (a) {
    return Math.log(a)
  },

  // results are stored in array
  memory: [],

  clear: function () {
    this.memory.splice(0, this.memory.length)
  },

  stringOfOperations: function (a) {
    this.memory.push(eval(a))
    return eval(a)
  }

}

console.log(calculator.add(1, 5))
console.log(calculator.memory)
console.log(calculator.clear())
console.log(calculator.memory)