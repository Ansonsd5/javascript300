class Node {
  constructor(data) {
    this.val = data;
    this.next = null;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

const sumOflinkedList = (head) => {
  let sum = 0;
  while (head !== null) {
    sum += head.val;
    head = head.next;
  }
  return sum;
};

console.log(sumOflinkedList(node1));

const sumOfLLRecursivly = (head) => {
  if (head === null) return 0;
  return head.val + sumOfLLRecursivly(head.next);
};

console.log(sumOfLLRecursivly(node2));
