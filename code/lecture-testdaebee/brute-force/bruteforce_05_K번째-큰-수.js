function solution(n, k, card) {
  const sums = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        sums.add(card[i] + card[j] + card[k]);
      }
    }
  }

  return Array.from(sums).sort((a, b) => b - a)[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));

//   let answer;
//   let tmp = new Set();
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       for (let k = j + 1; k < n; k++) {
//         tmp.add(card[i] + card[j] + card[k]);
//       }
//     }
//   }
//   let a = Array.from(tmp).sort((a, b) => b - a);
//   answer = a[k - 1];
//   return answer;
