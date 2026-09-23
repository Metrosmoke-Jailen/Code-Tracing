function isAnagram(s, t) {
  const counts = {};

  for (const char of s)
    counts[char] = (counts[char] || 0) + 1;

  for (const char of t)
    counts[char] = (counts[char] || 0) - 1;

  for (const key in counts) {
    if (counts[key] > 0)
      return false;
  }

  return true;
}

console.log(isAnagram("ab", "abc"));
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));

function isAnagram(s, t) {
  const counts = {};
  for (const char of s) counts[char] = (counts[char] || 0) + 1;
  for (const char of t) counts[char] = (counts[char] || 0) - 1;
  for (const key in counts) {
    if (counts[key] > 0) return false;
  }
  return true;
}
