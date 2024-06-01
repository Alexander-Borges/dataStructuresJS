const stack = [];
stack.push(1);
stack.push(2);
console.log(stack.pop());

const queue = [];
queue.push(1);
queue.push(2);
// Keep in mind that shift is less efficient than pop so if given the choice, opt for pop
console.log(queue.shift());

const map = new Map();
map.set('test', 123);
map.set(10, 'ten');
console.log(map.get(10));
//map.delete(10);
console.log(map.size);
//map.clear();
console.log(map.size);
console.log();

for([key, value] of map) {
    console.log(key, value);
}

map.forEach((value, key) => {
    console.log(value, key);
});
console.log();

const newMap = new Map();
newMap.set('testingtesting', 12345);
newMap.set(1010101, 'one mirrion');

const iter = newMap.entries();
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log();

// When to use
// Any key type other than strings or symbols are only supported by maps
// iterating via insertion order is best with a map because the keys always stay in the positions in which they were inserted.
// Objects do have an order but best not to rely on that ordering
// Objects are best for something simple and is quicker to instantianilize
// If sending an Object to the server via JSON you need to use an Object because a map is not serializable

// If you need to manually be setting a prototype chain, then it is best to use an object

// SETS
const set = new Set();
set.add(234);
set.add(456);
console.log(set.has(234));


// weakSets and weakMaps
// The keys can only be objects
const weakSet = new WeakSet();

(function(){
    const obj = {};
    weakSet.add(obj);
})();
// can't iterate thru these and no way to check the size
// can check the has() function

// Linked Lists
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
// ^^^This is all there is to a simple linked list^^^
// Here is a nicer wrapper class around it with some methods
class LinkedList {
    constructor() {
        this.head = null;
    }

    addStart(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
    }

    addEnd(value) {
        const node = new Node(value);
        let curr = this.head;

        if (curr = null){
            this.head = node;
            return;
        }
        while (curr != null && curr.next != null ) {
            curr = curr.next;
        }
        curr.next = node;
    }
}

const list = new LinkedList();
list.addStart(1);
list.addStart(2);
list.addStart(3);
console.log(list.head.next.next.value);