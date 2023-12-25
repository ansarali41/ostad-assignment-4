const checkPalindrome = (s, i, j) => {
    if (i >= j) {
        return true;
    }
    if (s[i] === s[j]) {
        return checkPalindrome(s, i + 1, j - 1);
    }
    return false;
};
var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[^0-9a-z]/gi, '');

    let i = 0,
        j = s.length - 1;
    return checkPalindrome(s, i, j);
};

// Time Complexity: O(n)
// Space Complexity: O(n)
