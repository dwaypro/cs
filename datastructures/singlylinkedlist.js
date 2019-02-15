
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
            return true;    
        }else{
            return false;
        }  
    }
}