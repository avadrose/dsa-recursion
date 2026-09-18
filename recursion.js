/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 1) {
    return words[0].length;
  }

  return Math.max(words[0].length, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length <= 1) {
    return str;
  }

  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return isPalindrome(str.slice(1, -1));
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (arr.length === 0) {
    return -1;
  }

  if (arr[0] === val) {
    return 0;
  }

  const index = findIndex(arr.slice(1), val);

  return index === -1 ? -1 : index + 1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length <= 1) {
    return str;
  }

  return revString(str.slice(1)) + str[0];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];

  for (let key in obj) {
    const value = obj[key];

    if (typeof value === "string") {
      strings.push(value);
    } else if (typeof value === "object" && value !== null) {
      strings = strings.concat(gatherStrings(value));
    }
  }

  return strings;
}

/** binarySearch: Further Study */

function binarySearch(arr, val) {
  function search(start, end) {
    if (start > end) {
      return -1;
    }

    const middle = Math.floor((start + end) / 2);

    if (arr[middle] === val) {
      return middle;
    }

    if (val < arr[middle]) {
      return search(start, middle - 1);
    }

    return search(middle + 1, end);
  }

  return search(0, arr.length - 1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};