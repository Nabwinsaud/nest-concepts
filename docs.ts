function containsDuplicate(nums: number[]): boolean {
  const set = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    else set.add(nums[i]);
  }
  return false;
}

// const duplicate = containsDuplicate([1, 2, 3, 4, 5, 5, 6]);
// console.log('🚀 ~ file: docs.ts:11 ~ duplicate:', duplicate);

function isAnagram(s: string, t: string) {
  if (s.length !== t.length) return false;

  const first: Array<string | null> = s.split('');
  //   console.log('🚀 ~ file: docs.ts:17 ~ isAnagram ~ first:', first);
  const second = t.split('');
  console.log('🚀 ~ file: docs.ts:19 ~ isAnagram ~ second:', second);

  for (let i = 0; i < second.length; i++) {
    const element = second[i];
    console.log('🚀 ~ file: docs.ts:23 ~ isAnagram ~ element:', element);

    const found = first.indexOf(element);
    console.log('🚀 ~ file: docs.ts:26 ~ isAnagram ~ found:', found);

    if (found !== -1) {
      console.log('last index case');
      first[found] = null;
    } else {
      return false;
    }
  }

  return true;
}

const anagram = isAnagram('code', 'code');
console.log('🚀 ~ file: docs.ts:35 ~ anagram:', anagram);

function isAnagram2(str1: string, str2: string) {
  if (str1.length !== str1.length) return false;

  const first = str1.split('');
  const second = str2.split('');
}
