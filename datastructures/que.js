// data structure that you add and remove data in. 
// fifo, first out, where the first in is the first out. 
// can be implemented with an array. 
        //- unshift and pop 
        //- no way arround using an array to avoid reindexing the entire array.
// implementation using a linked list instead:


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0; 
    }

    enqueue(val){
        var newNode = new Node(val);
        if(this.head){
            this.tail.next = newNode;
            this.tail = newNode;            
        }else{
            this.head = newNode;
            this.tail = this.head;            
        }
        this.length++;
        return this;     
    }

    dequeue(){
        if(!this.head) return undefined;
        var oldHead = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length ===0){
            this.tail = null;
        }         
        return oldHead
    }
}

//example usage:
// var que = new Queue()
// que.enqueue(1);
// que.enqueue(2);
// que.dequeue()
// //1
// que.dequeue();
//2