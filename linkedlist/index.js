class node{
    constructor(data){
        this.val = data;
        this.next = null;
    }
}

let nodeA = new node("A");
let nodeB = new node("B");
let nodeC = new node("C");
let nodeD = new node("D");

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;


const printLinkedList = (head) =>{
    let current = head;
    while(current !== null){
        console.log(current.val);
        current = current.next;

    }
}
printLinkedList(nodeA);

const printLinkedListReccursively =( head ) =>{
    if (head === null) return;
    console.log(head.val);
    printLinkedListReccursively(head.next);
}

printLinkedListReccursively(nodeB);

