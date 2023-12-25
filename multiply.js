const multiply = (a, b) => {
    if (a === 0 || b === 0) {
        return 0;
    }
    return a + multiply(a, b - 1);
};

const result = multiply(4, 5);
console.log(result);

//  the time complexity is O(b)
// the space complexity is O(b).
