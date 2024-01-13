class Stack{
    constructor(){
        this.items=[]
        this.minStack=[]
        this.top=0
    }
    push(element){
        this.items.push(element)
        this.top++
        if(this.minStack.length==0 || element<= this.minStack[this.minStack.length-1]){
            this.minStack.push(element)
        }
    }
    pop(){
        if(this.isEmpty==true){
            return null
        }
        this.top--
        return this.items.pop()
    }
    isEmpty(){
        return this.top===0
    }
    peek(){
        if(this.isEmpty!=true){
            return this.items[this.top-1]
        }
        return null
    }
    size(){
        return this.top
    }
    print(){
        console.log(this.items);
        return
    }
    getMinStack(){
        if(this.minStack.length==0){
            return null
        }
        return this.minStack[this.minStack.length-1]
    }
}

const stack = new Stack();

console.log(stack.isEmpty());
stack.push(33);
stack.push(43);
stack.push(53);
stack.print();
console.log(stack.size());
console.log(stack.pop());
console.log(stack.peek());
console.log('min:',stack.getMinStack());
stack.print();
stack.push(3);
console.log('min:',stack.getMinStack());
stack.print();

// function balancedParanthesis(expression){
//     let stack=[]
//     let charecter={
//         ']':'[',
//         '}':'{',
//         ')':'('
//     }
//     for(let char of expression){
//         if(char=='(' || char=='['|| char=='{'){
//             stack.push(char)
//         }
//         else if(stack.pop() !=charecter[char]){
//             return false
//         }
//     }
//     return stack.length==0
// }

// console.log(balancedParanthesis('([]{})'));