// add a method prepend() to the linked list that adds a node to the beginning of the list

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value: value,
            next: null
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;


    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.length++;
        this.head = newNode;
        return this
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
        return array;

    }
    insert(index, value) {
        const newNode = {
            value: value,
            next: null
        }
        let currentNode = this.head;
        var prev;

        var it = 0;
        while (it < index) {
            it++;
            prev = currentNode;
            currentNode = currentNode.next;
        }
        newNode.next = currentNode;

        prev.next = newNode;

        this.length++;


    }

    remove(index) {
        var currentNode = this.head;
        var prev;

        var it = 0;
        while (it < index - 1) {
            it++;
            prev = currentNode;
            currentNode = currentNode.next;
        }

        var unwantedNode = currentNode.next;

        currentNode.next = unwantedNode.next;


        this.length--;
    }


}

let myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);

myLinkedList.remove(1);
myLinkedList.printList();
// myLinkedList.printList();