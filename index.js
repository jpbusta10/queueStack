class Stack {
    constructor() {
        this.items = [];
    }


    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }
    getSize() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }


}
class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enQueue(item) {
        this.stack1.push(item);
    }

    deQueue() {
        let rta; // store the value to extract
        while (!this.stack1.isEmpty()) {
            this.stack2.push(this.stack1.pop());
        }
        rta = this.stack2.pop();
        while (!this.stack2.isEmpty()) {
            this.stack1.push(this.stack2.pop());
        }
        return rta;
    }
}


const students = new Queue;

students.enQueue('juan');
students.enQueue('juli');
students.enQueue('john');

console.log(students.deQueue());
console.log(students.deQueue());






