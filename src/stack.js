const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }

  push(e) {
    this.stack[this.size] = e;
    this.size++;
    return this.size - 1;
  }

  pop() {
    if (this.size === 0) return undefined;
    let delItem = this.stack[this.size - 1];
    this.size--;
    return delItem;
  }

  peek() {
    return this.stack[this.size - 1];
  }
}

module.exports = {
  Stack,
};
