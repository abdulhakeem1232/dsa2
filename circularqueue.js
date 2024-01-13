class CircularQueue {
    constructor(size) {
        this.items = new Array(size)
        this.size = size
        this.currentlength = 0
        this.rear = -1
        this.front = -1
    }
    isFull() {
        return this.currentlength == this.size
    }
    isEmpty() {
        return this.currentlength == 0
    }
    enqueue(element) {
        if (!this.isFull()) {
            this.rear=(this.rear+1) %this.size
            this.items[this.rear] = element
            this.currentlength=this.currentlength+1
            if (this.front == -1) {
                this.front = this.rear
            }
        }
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        const item = this.items[this.front]
        this.items[this.front]=null
        this.front= (this.front+1) % this.size
        this.currentlength=this.currentlength-1
        if(this.isEmpty()){
            this.rear=-1
            this.front=-1
        }
        return item
    }
    peek(){
        if(this.isEmpty!=true){
            return this.items[this.front]
        }
        return null
    }
    print(){
        if(this.isEmpty()){
            console.log("Queue is Empty");
        }
        else{
            let i
            let str=''
            for(i=this.front;i!==this.rear;i=(i+1)%this.size){
                str+=this.items[i]+' '
            }
            str+=this.items[i]
            console.log(str);
        }
    }
}


const queue= new CircularQueue(5)

console.log(queue.isEmpty());

queue.enqueue(32);
queue.enqueue(92);
queue.enqueue(39);
queue.enqueue(12);
queue.enqueue(66);
console.log(queue.isFull());
queue.print()
console.log(queue.dequeue());
console.log(queue.peek());
queue.print()