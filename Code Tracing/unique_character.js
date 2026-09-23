function firstUniqChar(s) {
  const counts = {};

  for (const char of s) {
    counts[char] = (counts[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (counts[s[i]] === 1) {
      return i;
    }
  }

  return -1;
}

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));

function firstUniqChar(s) {
  const counts = {};
  for (const char of s) {
    counts[char] = (counts[char] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (counts[s[i] === 1]) return i;
  }
  return -1;
}
