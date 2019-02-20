//lifo principle, last in first out.
// stacks are used when 
    // - managing functions, invocations
    // - undo / redo
    // - browser history.

// can be implemented with a javascript array.
// below implementation is with a linked list.     

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0; 
    }
    pop(){
        if(!this.head) return undefined;
        var oldHead = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length ===0){
            this.tail = null;
        }         
        return oldHead
    }

    push(val){
        var newNode = new Node(val);

        if(this.head){
            newNode.next = this.head;
            this.head = newNode;         
        }else{
            this.head = newNode;
            this.tail = this.head;            
        }
        this.length++;
        return this;
    }
}

var stack = new Stack();
stack.push(1);
stack.push(2);
    
    
    
         