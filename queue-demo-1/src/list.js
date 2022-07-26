let createList = value => {
    return createNode(value);
};
const appendList = (list, value) => {
    const node = createNode(value);
    list.next = node;
    return node;
};

const createNode = value => {
    return {
        date: value,
        next: null
    };
};
const list = createList(10);
const node = appendList(list, 20);
console.log("node");
console.log(node);
console.log("list");
console.log(list);