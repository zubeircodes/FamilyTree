


class Node
{
    constructor()
    {
        this.name = "";
        this.children = [];
    }
};
 
// Utility function to create a new tree node
function newNode(name)
{
    var temp = new Node();
    temp.name = name;
    return temp;
}
 
// Prints the n-ary tree level wise
function LevelOrderTraversal(root)
{
    if (root == null)
        return;
 
    // Standard level order traversal code
    // using queue
    var q = []; // Create a queue
    q.push(root); // push root
    while (q.length != 0)
    {
        var n = q.length;
 
        // If this node has children
        while (n > 0)
        {
            // Dequeue an item from queue
            // and print it
            var p = q[0];
            q.shift();
            console.log(p.name + " ");
 
            // push all children of
            // the dequeued item
            for (var i = 0; i < p.children.length; i++)
                q.push(p.children[i]);
            n--;
        }
         
        // Print new line between two levels
       console.log("\n");
    }
}

var osman = newNode("Osman");
osman.children.push(newNode("Abdirahman"));
osman.children.push(newNode("Aidarus"));
osman.children.push(newNode("Mohamed"));
osman.children.push(newNode("Omar"));
osman.children.push(newNode("Abdighafar"));
osman.children.push(newNode("Ali"));
osman.children.push(newNode("Abdurauf"));

var abdirahman = osman.children[0];
abdirahman.children.push(newNode("Apachina"));

var aidarus = osman.children[1];
aidarus.children.push(newNode("Mohamed"));
aidarus.children.push(newNode("Abubakar"));
aidarus.children.push(newNode("Abdulghani"));

var mohamed = osman.children[2];
mohamed.children.push(newNode("Ahmed"));
mohamed.children.push(newNode("Zubeir"));
mohamed.children.push(newNode("Salman"));

var omar = osman.children[3];
omar.children.push(newNode("Mohamed"));
omar.children.push(newNode("Osman"));
omar.children.push(newNode("Abirahman"));



console.log("Level order traversal " +
                       "Before Mirroring \n");
LevelOrderTraversal(osman);