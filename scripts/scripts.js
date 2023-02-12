const obj = { a: 1 };
const obj2 = Object.create(obj);
const obj3 = Object.create(obj2);

const layersOfInheritance = (element) => {
    let counter = 0;
    let temporaryElement = Object.getPrototypeOf(Object.getPrototypeOf(element));
    while (temporaryElement !== null) {
        temporaryElement = Object.getPrototypeOf(temporaryElement);
        counter++;
    }
    return counter;
}
console.log(layersOfInheritance({})); // 0
console.log(layersOfInheritance(new Date())); // 1
console.log(layersOfInheritance(obj3)); // 2