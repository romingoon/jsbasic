class Collection {
  #arr;
  constructor(...args) {
    // console.log(args, [...args], ...args);
    this.#arr = Array.isArray(args[0]) ? args[0] : [...args];
    // console.log(this.#arr);
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
    if (this.constructor.name === "Stack") return this.#arr[this.length - 1];
    return this.#arr[0];
  }

  get isEmpty() {
    return !this.#arr.length;
  }

  get length() {
    return this.#arr.length;
  }

  // [Symbol.iterator]() {
  // 	return this.#arr.values();
  // }

  [Symbol.iterator]() {
    let idx = -1;
    // let done = false;
    return {
      next: () => {
        idx += 1;
        // done = done || ...
        // done ||= idx > this.#arr.length - 1;
        // return { value: this.#arr[idx], done };

        return { value: this.#arr[idx], done: !this.#arr[idx] };
      },
    };
  }

  *[Symbol.iterator]() {
    for (let idx = 0; idx < this.#arr.length; idx += 1) {
      yield this.#arr[idx];
    }
  }

  iterator() {
    return this[Symbol.iterator]();
  }

  toArray() {
    return [...this.#arr];
  }

  print(cb) {
    if (cb) {
      cb([...this.#arr].reverse());
      return;
    }
    console.log("coll>>", this.#arr);
  }
}

class Stack extends Collection {
  print() {
    super.print((arr) => console.log("STACK>>\n", arr.join("\n ")));
  }
}

class Queue extends Collection {
  enqueue(val) {
    super.push(val);
  }

  dequeue() {
    return super.shift();
  }

  print() {
    super.print((arr) => console.log("QUEUE>> ->", arr.join(" -> "), "->"));
  }
}

class ArrayList extends Collection {
  arrayToList([...arr], i = 0) {
    return i < arr.length
      ? { value: arr[i], rest: this.arrayToList(arr, i + 1) }
      : null;
  }

  listToArray({ ...list }, arr = []) {
    arr.push(list.value);
    return list.rest != null ? this.listToArray(list.rest, arr) : arr;
  }
}

const stack = new Stack([1, 2]); // or new Stack([1,2]); // (1,2)
stack.push(3); // 추가하기
console.log("spop>>>", stack.pop()); // 마지막에 추가된 하나 꺼내기
stack.push(3);
const queue = new Queue([11, 22]);
queue.enqueue(33); // 추가하기
console.log("deq>>", queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
queue.enqueue(44);
stack.print();
queue.print();

console.log("===============================");
console.log([...stack], [...queue]);
for (const s of stack) console.log(s);
for (const q of queue) console.log(q);

const itStack = stack[Symbol.iterator]();
console.log(itStack.next());
console.log(itStack.next());
console.log(itStack.next());
console.log(itStack.next());

const itQueue = queue.iterator();
console.log(itQueue.next());
console.log(itQueue.next());
console.log(itQueue.next());
console.log(itQueue.next());

const alist = new ArrayList({ value: 1, rest: { value: 2 } }); // new ArrayList([1,2]);
// console.log(alist.listToArray({ value: 1, rest: { value: 2 } }));
console.log(alist.arrayToList([1, 2]));
console.log(alist.add(3));
// alist.remove(2); // { value: 1, rest: { value: 3 } }
// alist.add(22, 1); // { value: 1, rest: { value: 22, rest: { value: 3 } } }
// alist.add(33, 1);
// alist.print(); // ArrayList(4) { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 3 } } } }
// alist.set(1, 300); // { value: 1, rest: { value: 300, rest: { value: 22, rest: { value: 3 } } } }
// alist.get(2);
// alist.size(); // 22, 4
// alist.indexOf(300); // 1
// alist.contains(300);
// alist.contains(301); // true, false
// alist.isEmpty;
// alist.peek; // false, 3
// alist.toArray(); // [1, 300, 22, 3]
console.log(alist.iterator().next()); // { value: 1, done: false }
// alist.clear(); // all clear
