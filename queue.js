class Queue {
    constructor() {
        this.items = {}
        this.rear = 0
        this.front = 0
    }
    enqueue(element) {
        this.items[this.rear] = element
        this.rear++
    }
    dequeue() {
        let value = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return value
    }
    isEmpty() {
        return this.rear - this.front == 0
    }
    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front]
        }
        return null
    }
    size() {
        return this.rear - this.front
    }
    print() {
        console.log(this.items)
        return
    }
}

const queue = new Queue()

console.log(queue.isEmpty());
queue.enqueue(33)
queue.enqueue(43)
queue.enqueue(53)
queue.print()
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.peek())
queue.print()


function reverseQueue(queue){
    if(queue.length==0){
        return
    }
    let item=queue.shift()
    reverseQueue(queue)
    queue.push(item)
}

const q = [1, 2, 0, 4, 9];
reverseQueue(q);
console.log(q.join(' '));
