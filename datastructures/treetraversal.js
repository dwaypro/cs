//data structure that contains a root node and who's node
// has a parent child relation ship.
//uses for trees
//     - DOM
//     - Network Routing
//     - abstranct syntax tree
//     - Artificial Inteligence
//     - Folders in an operating system
//     - JSON is a tree after it's parsed.

// binary search trees - which is a type of binary tree.
// at most contain two children per node.
// sorted in a particular way. the children one is smaller than the root node, and one is bigger


class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(val){
        var newNode = new Node(val);
        if(!this.root) {
            this.root = newNode;  
            return this; 
        }else{
          var current = this.root;
          while(true){
              if(val === current.val) return false;
              if(val < current.value){
                  if(!current.left){
                     current.left = newNode;
                     return;  
                  }else{
                      current = current.left;
                  }
              }else{
                  if(!current.right){
                      current.right = newNode;
                      return this;
                  }else{
                      current = current.right;
                
                  }
              }
          }
        }
    } 

    find(val){
        if(!this.root) return false;
        var current = this.root;
        var found = false;

        while(current && !found){
            if(val < current.value){
                current = current.left;
            }else if(val > current.value){
                current = current.right;
            }else{
                found = true;
            }
        }
        if(!found) return false;
        return current;
    }

    BFS(){
        var data =[];
        var queue =[];
        var node = this.root;

        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);            
        }
        return data;
    }

    DFSPreOrder(){
        var data =[];
        var current = this.root;

        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);             
        }

        traverse(current);
        return data;
    }

     DFSPostOrder(){
        var data =[];
        var current = this.root;

        function traverse(node){            
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);             
            data.push(node.value);
        }

        traverse(current);
        return data;
    }

     DFSInOrder(){
        var data =[];
        var current = this.root;

        function traverse(node){                        
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);                        
        }

        traverse(current);
        return data;
    }

       
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13)
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);




//bfs - breadth-first search
// look at all sibling nodes before visiting children.

//create a que, and a variable to store the values of nodes visited

//place the root node in the que.
// dequeue a ndoe from the queue and push the value of the
// node into the variable that stores the nodes
// if there is a left property on the node dequeued- add it 
// to the queue.


queue: [];
visited: [];