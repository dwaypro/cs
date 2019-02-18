
// data structure that contains a head, tail and length property.
// consist of nodes and each node has a value and a pointer to another node or null.
// do not have indexes
// connected via nodes with a next poineter
// random access is not allowed, must go to the next node.
// insertion  is constant time. 


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0; 
    }

    push(val){
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

    pop(){
        if(!this.head) return undefined;
        var currentNode = this.head;
        var newTail = currentNode;

        while(currentNode.next){
            newTail = currentNode;
            currentNode = currentNode.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length ===0){
            this.head = null;
            this.tail = null;
        }
        return currentNode
    }

    shift(){
        if(!this.head) return undefined;
        var oldHead = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length ===0){
            this.tail = null;
        }         
        return oldHead
    }

    unshift(val){
        var newNode = new Node(val);

        if(this.head){
            newNode.next = this.head;
            this.head = newNode;         
        }else{
            this.head = newNode;
            this.tail = this.head;            
        }
        return this;
    }

    get(index){
        if(index >= this.length || index < 0) return undefined       
        var node = this.head;
        for(var i = 0; i < this.length; i++){
            
            if(index === i){
                break; 
            }
            node = node.next;
        }
        return node; 
    }

    set(index, val){
       var foundNode = this.get(index);
       if(foundNode){
           foundNode.val = val;
           return true;
       }else{
           return false;
       }
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length){
            this.push(val);
        }
        if(index === 0){
            this.unshift(val);
        }
        var newNode = new Node(val);

        var nodeLeft = this.get(index-1);
        if(nodeLeft){
            newNode.next = nodeLeft.next;
            nodeLeft.next = newNode;
            this.length++
            return true    
        }
    }

      remove(index){
        if(index < 0 || index >= this.length){
            return undefined
        }
        if(index === this.length - 1){
            return this.pop();
        }
        if(index === 0){
            return this.shift();
        }

        var previousNode = this.get(index-1);
        var removed = previousNode.next;
        previousNode.next = removed.next;

        this.length--;
        return removed;
    }

    print(){
        var arr =[];
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next;
        }
        console.log(arr);
    }

    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        
        var next;
        var prev = null;
        
        for(var i = 0; i < this.length ; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        } 
        return this;
    }
}
// var list = new LinkedList()
// list.push("Hello");
// list.push("World!");
// list.push("!");

// Insertion - O(1) at the begining and the end;
// Removal - O(1) or O(N);
    // - If we are removing from the begining. O(1);
    // - If We are removing from the end. O(N);
// Searching - O(N);
// Access - O(N);
// Singly Linked Lists are a great alteratntive to array 
// when insertion and deletion at the begining frequently are required.
// Linked List do not contain a built in index.
// The idea of a list data structure that consists of nodes is the foundation
// for other data structures like stacks and ques. 

