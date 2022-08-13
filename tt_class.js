class Collection {
    #arr;
    constructor(...args) {
        this.#arr = Array.isArray(args[0] ? args[0] : [...args]);
    }
    push(val) {
        this.#arr.push(val);
    }

    pop() {
        return this.#arr.pop();
    }

    shift() {
        return this.#arr.shift();
    }
    clear() {
        this.#arr.length = 0;
    }
    get peek() {
        if (this.constructor.name === 'Stack') return this.#arr[this.#arr.length - 1];
        return this.#arr[0];
    }
    get isEmpty() {
        return !this.#arr.length
    }

    get length() {
        return this.#arr.length;
    }

    toArray() {
        return [...this.#arr];
    }
    print(cb) {
        if (cb) {
            cb([...this.#arr].reverse());
            return;
        }
        console.log('Stack >> ', this.#arr);
    }
}

class Stack extends Collection {
    pirnt() {
        super.print(arr => console.log('STACK >> \n', arr.join('\n ')));

        super.print();
    }
}



class Queue extends Collection {
    enqueue() {
        super.push(val);
    }
    dequeue() {
        return super.shift();
    }

    print() {
        super.print(arr => console.log('QUEUE >>>',))
    }


}

const stack = new Stack([1, 2]);
stack.push(3);
console.log('spop>>', stack.pop());
