function twoSum(nums, target) {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    seen[nums[i]] = i;
    const complement = target - nums[i];
    if (seen[complement] !== undefined) {
      return [seen[complement], i];
    }
  }
  return [];
}

Bug: seen[nums[i]] = i;

Step	Line executed	i	nums[i]	complement	seen
1	const seen = {}	—	—	—	{}
2	seen[nums[i]] = i	0	3	—	{3: 0}
3	const complement = target - nums[i]	0	3	3	{3: 0}
4	if (seen[complement] !== undefined)	0	3	3	{3: 0}
5	return [seen[complement], i]	0	3	3	{3: 0}

Correct Version:
function twoSum(nums, target) {
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (seen[complement] !== undefined) {
      return [seen[complement], i];
    }

    seen[nums[i]] = i;
  }

  return [];
}


function isAnagram(s, t) {
  const counts = {};
  for (const char of s) counts[char] = (counts[char] || 0) + 1;
  for (const char of t) counts[char] = (counts[char] || 0) - 1;
  for (const key in counts) {
    if (counts[key] > 0) return false;
  }
  return true;
}
Bug: if (counts[key] > 0)

Step	Line executed	char	counts before	counts after
1	const counts = {}	—	—	{}
2	counts[char] = ... + 1	'a'	{}	{a: 1}
3	counts[char] = ... + 1	'b'	{a: 1}	{a: 1, b: 1}
Step	Line executed	char	counts before	counts after
4	counts[char] = ... - 1	'a'	{a: 1, b: 1}	{a: 0, b: 1}
5	counts[char] = ... - 1	'b'	{a: 0, b: 1}	{a: 0, b: 0}
6	counts[char] = ... - 1	'c'	{a: 0, b: 0}	{a: 0, b: 0, c: -1}

Correct Version:
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
Bug: if (counts[s[i] === 1]) return i;

Step	Line	i / char	counts
1	const counts = {}	—	{}
2	count character	'l'	{l: 1}
3	count character	'e'	{l: 1, e: 1}
4	count character	'e'	{l: 1, e: 2}
5	count character	't'	{l: 1, e: 2, t: 1}
6	count character	'c'	{l: 1, e: 2, t: 1, c: 1}
7	count character	'o'	{l: 1, e: 2, t: 1, c: 1, o: 1}
8	count character	'd'	{l: 1, e: 2, t: 1, c: 1, o: 1, d: 1}
9	if (...)	i=0, 'l'	counts[false] → undefined
10	if (...)	i=1, 'e'	counts[false] → undefined
11	if (...)	i=2, 'e'	counts[false] → undefined
12	if (...)	i=3, 't'	counts[false] → undefined
13	if (...)	i=4, 'c'	counts[false] → undefined
14	if (...)	i=5, 'o'	counts[false] → undefined
15	if (...)	i=6, 'd'	counts[false] → undefined
16	return -1	—	unchanged

Correct Version:
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
