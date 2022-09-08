/**
 * In set there are not duplicate items and the items are not in particular order.
 * Typical use of set is use to check the presence of an item.
 * 
 */

class CustomSet {
    constructor() {
        this.collection = [];
    }

    has(itm) {
        return this.collection.indexOf(itm) > -1;
    }

    values() {
        return this.collection;
    }

    add(itm) {
        if (!this.has(itm)) {
            this.collection.push(itm);
        }
    }

    remove(itm) {
        const ind = this.collection.indexOf(itm) > -1;
        if (ind > -1) {
            this.collection.splice(ind, 1);
        }
    }

    size() {
        return this.collection.length;
    }

    union(secondSet) {
        const result = new CustomSet();
        const firstSet = this.values();
        firstSet.forEach(element => {
            result.add(element);
        });

        secondSet.forEach(element => {
            result.add(element);
        });

        return result;
    }

    intersection(secondSet) {
        const result = new CustomSet();
        const firstSet = this.values();
        firstSet.forEach(itm => {
            if (secondSet.has(itm)) {
                result.add(itm);
            }
        });

        return result;
    }

    difference(secondSet) {
        const result = new CustomSet();
        const firstSet = this.values();
        firstSet.forEach(itm => {
            if (!secondSet.has(itm)) {
                result.add(itm);
            }
        });

        return result;
    }

    subset(secondSet) {
        const firstSet = this.values();
        return firstSet.every(itm => {
            return secondSet.has(itm);
        })
    }
}

var setA = new CustomSet();
var setB = new CustomSet();
setA.add("a");

setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());