//my solution for Even or Odd: https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript (6kyu)

function findOutlier(integers) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < 3; i++) {
        integers[i] % 2 === 0 ? even++ : odd++;
    }
    if (even > odd) {
        return integers.find((num) => num % 2 !== 0);
    } else {
        return integers.find((num) => num % 2 === 0);
    }
}
