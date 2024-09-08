class Node {
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}

let list1 = new Node('1');
let list2 = new Node('2');
let list3 = new Node('3');
let list4 = new Node('4');

list1.next = list2;
list2.next = list3;
list3.next = list4;

const listValue = (head) => {
    let values = [];
    let current = head;

    while (current !== null) {
        values.push(current.value);
        current = current.next;
    }
    return values;
}

console.log("Normal iteratior ", listValue(list1));

const listValueRecursively = (head) => {
    
    const values = [];
    fillValues(head, values);
    return values;
    
}

const fillValues = (head, values) => {
    if (head === null) return;
    values.push(head.value);
    fillValues(head.next, values);

}

console.log("listValueRecursively", listValueRecursively(list2))