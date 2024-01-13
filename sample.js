class queueUsingStack{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }
    enqueue(element){
        this.stack1.push(element)
    }
    dequeue(){
        if(this.stack1.length==0 && this.stack2.length==0){
            return null
        }
        if(this.stack2.length==0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }
}

const q=new queueUsingStack()

q.enqueue(9)
q.enqueue(8)
q.enqueue(99)

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());