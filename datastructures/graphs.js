//vertex - a node;
//edge - connection between nodes;
// weighted/unweighted
    // unweighted
    //  - edges aren't assigned a value.
    // weighted
    //  - values are assigned to edges. 
//directed vs undirected
    //undirected
    // - no direction or polarity to a directon
    // - an edge could be two way. 
    // - Facebook as an example.
    //directed
    // - usually visualized with arrows. We can traverse one way
    // - Instagram/Twitter vs Facebook. 
// Adjacency Matrix
    // - we have vertices and edges and we need to store it. 
    // - two dimential structure usually nested arrays. 
    // - between any two nodes     
    // takes up more space in sparse graphs
    // slower to iterate over all edges
    // faster to lookup specific edge. 
// Adjacency List
    // - use an array or preferable a hashtable or list to store the edges
    // - go to index 3 of our array for example, which
    // will return the connection.
    // can take up less space in sparse graphs where there 
    // arent as many edges
    // faster to iterate over the edges
    // can be slower to lookup specific edge
 // add vertex O(1)    

 // most data in the real-world tends to lend itself to sparser
 // and/or larger graphs. Tons of nodes, but not many edges. 

 class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];    
        }        
    }

    addEdge(v1, v2){
        //add error handling to ensure existance of elements.
        if(this.adjacencyList[v1]){
            this.adjacencyList[v1].push(v2);    
        }
        
        if(this.adjacencyList[v2]){
            this.adjacencyList[v2].push(v1);    
        }        
    }

    removeEdge(v1, v2){
        // add error handling to ensure existance of elements
        this.adjacencyList[v1] = this.adjacencyList[v1].filter( v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v1].filter( v => v !== v1);
    }

    removeVertex(v){
        while(this.adjacencyList[v].length){
            const adjacenctVertex = this.adjacencyList[v].pop();
            this.removeEdge(vertex, adjacenctVertex);
        } 
        delete this.adjacencyList[v];
    }

    DFS(vertex){
        var result = [];
        var visited = {};
        console.log('vertex', vertex)
        var adjacencyList = this.adjacencyList;
        console.log('this.adjacencyList', this.adjacencyList);
        (function dfs(v){
           if(!v) return null;           
           visited[v] = true;
           result.push(v);

           console.log('adjacencyList[v]', adjacencyList)
           var adjacencyItems = adjacencyList[v];

           adjacencyItems.forEach(function(item){
               var itemVisited = visited[item];
               if(!itemVisited) return dfs(item);
           })            
        })(vertex)
        return result;    
    }
}

var graph = new Graph();
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")
graph.addEdge("D", "F")
graph.addEdge("E", "F")
console.log('adjacencyList', graph.adjacencyList)

graph.DFS("A");

//["A", "B", "D", "E", "C", "F"]