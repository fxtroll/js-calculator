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
    let result = Math.ceil(a ** (1 / b))
    return result
  },
  log: function (a) {
    return Math.log(a)
  },

  // results are stored in array
  memory: [],

  clear: function () {
    this.memory.splice(0, this.memory.length)
    console.log('memory has been cleared')
    if (this.memory.length === 0)
      return true
    return false
  },

  stringOfOperations: function (a) {
    this.memory.push(eval(a))
    return eval(a)
  }

}

module.exports = calculator;

