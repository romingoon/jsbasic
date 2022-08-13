class Stack {
    #array;

    constructor(array = []) {
        if (!Array.isArray(array)) {
            throw new TypeError(`$[array] is nat an array`);
        }
        this.#array = array;
    }

    push(value) {
        return this.#array.push(value);
    }

    pop() {
        return this.#array.pop();
    }

    entrise() {
        return [...this.#array];
    }
}

const stack = new Stack([1, 2]);
console.log(stack.entrise());

stack.push(3);
console.log(stack.entrise());

stack.pop();
console.log(stack.entrise());

class Queue {
    #array;

    constructor(array = []) {
        if (!Array.isArray(array)) {
            throw new TypeError(`${array} is not an array`);
        }
        this.#array = array;
    }

    enqueue(value) {
        return this.#array.push(value);
    }
    dequeue() {
        return this.#array.shift();
    }

    entries() {
        return [...this.#array];
    }
}

const queue = new Queue([1, 2]);

console.log(queue.entries());

queue.enqueue(3);
console.log(queue.entries());

queue.dequeue();
console.log(queue.entries());

class Common {
    #array;
    constructor(array = []) {
        this.#array = array;
    }
    arr() {
        return this.#array;
    }
    clear() {
        this.#array.length = 0;
    }
    isEmpty() {
        return !this.#array.length;
    }
    length() {
        return this.#array.length;
    }
    toArray() {
        return [...this.#array];
    }

    peek() { }
    print() {
        this.#array.forEach(_, idx) {
            console.log(this.#array[this.#array.length - idx - 1]);
        }
    }
}
