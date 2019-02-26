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
 
    