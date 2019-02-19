class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0; 
    }

    push(val){
        var newNode = new Node(val);
        if(this.head){
            this.tail.next = newNode;
            newNode.prev = this.tail;            
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
        var currentHead = this.head;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
            
            
        }
         this.length--;
         return poppedNode;       
    }

    shift(){
        if(!this.head) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.tail = null;
            this.head = null;
        } else{
            this.head = this.head.next;
            this.head.prev =null;
            oldHead.next = null;     
        }       
       
        this.length--;         
        return oldHead
    }

    unshift(val){
        var newNode = new Node(val);
        
        if(this.head){
            this.head.prev = newNode;            
            newNode.next = this.head;
            this.head = newNode;         
        }else{
            this.head = newNode;
            this.tail = this.head;            
        }
        this.length++;
        return this;
    }

    get(index){
        if(index >= this.length || index < 0) return null;       
        
        var middle = Math.floor(this.length/2);       
        console.log('middle ==>', middle, 'index ==>', index);

        if(index <= middle){
            var node = this.head;   
           for(var i = 0; i < this.length; i++){         
                if(index === i){
                    break; 
                }
                node = node.next;
            }
            return node; 
        }

        if(index > middle){
           var node = this.tail;   
           for(var i = this.length; i === 0; i--){         
                if(index === i){
                    break; 
                }
                node = node.prev;
            }
            return node; 
        }           
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
            return this.push(val);
        }
        if(index === 0){
            return this.unshift(val);
        }
        var newNode = new Node(val);
        var nodeLeft = this.get(index-1);
        var nodeRight = this.get(index);
        
        if(nodeLeft){
            newNode.next = nodeRight
            newNode.prev = nodeLeft;
            
            nodeLeft.next = newNode;
            nodeRight.prev = newNode;
            
            this.length++
            return true    
        }
  

    }
}
var list = new DoublyLinkedList()
list.push('a');
list.push('b');
list.push('c');

