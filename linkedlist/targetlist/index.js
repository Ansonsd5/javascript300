class Node{
    constructor (data){
        this.val = data;
        this.next = null;
    }
}

const nodeA = new Node('A')
const nodeB = new Node('B')
const nodeC = new Node('C')
const nodeD = new Node('D')

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;

const findExists = (head,find) =>{
    let current = head;
    while (current !== null){
      
        if(current.val === find) return true;
        current = current.next;
        
    }
    return false
}

console.log(findExists(nodeA,'C'))

const recursivelyFind = (head,target) =>{
    if(head === null) return false;
    if(head.val === target ) return true;
    return recursivelyFind(head.next, target)
}

console.log("recursivelyFind",recursivelyFind(nodeA,'X'))
console.log("recursivelyFind",recursivelyFind(nodeA,'C'))

