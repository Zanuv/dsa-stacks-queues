class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(val) {
		let newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			newNode.next = this.first;
			this.first = newNode;
		}
		this.size++;
	}

	pop() {
		if (!this.first) throw new Error("Stack is empty");
		let temp = this.first;
		this.first = this.first.next;
		if (this.first === null) this.last = null;
		this.size--;
		return temp.val;
	}

	peek() {
		if (!this.first) throw new Error("Stack is empty");
		return this.first.val;
	}

	isEmpty() {
		return this.size === 0;
	}
}

module.exports = Stack;
