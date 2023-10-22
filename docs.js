/**
 *
 * @param {Array} arr
 * @return {Generator}
 */

var inOrderTraversal = function* (arr) {
  for (const n of arr) {
    // condition can two either sub array or not
    if (Array.isArray(n)) {
      //  should be recursive
      yield* inOrderTraversal(n);
    } else {
      // no need to sub array already flatted
      yield n;
    }
  }
};

// const gen = inOrderTraversal([1, [2, [3, 4]], [5, 6]]);
const gen = inOrderTraversal([1, [2, 3, 4], [5, 6]]);

// console.log('generator', gen.next());
// console.log('generator', gen.next());
// console.log('generator', gen.next());

// direct loop
for (const g of gen) {
  console.log('flatted array is', g);
}

// function isAnagram(s: string, t: string) {
//   if (s.length !== t.length) return false;

//   let first: Array<string | null> = s.split('');
//   const second = t.split('');

//   for (let i = 0; i < second.length; i++) {
//       const element = second[i];

//       let found = first.indexOf(element);

//       if (found !== -1) {
//           first[found] = null;
//       } else {
//           return false;
//       }
//   }

//   return true;
// }

// function twoSum(nums: number[], target: number): number[] {
//   let hash: { [key: number]: number } = {};
//   for (let i = 0; i < nums.length; i++) {
//       let diff = target - nums[i];
//       if (diff in hash) {
//           return [hash[diff], i];
//       } else {
//           hash[nums[i]] = i;
//       }
//   }
// }
