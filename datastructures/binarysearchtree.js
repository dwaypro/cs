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
              if(val === curent.val) return false;
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
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13)
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);


//dependent on the structure of the tree. FOr example
// a completely one sided tree will slow things down tremendously. 
// pick a better root node. 

// insertion - O(log n);
// searching - O(log n);



