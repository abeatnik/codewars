//my solution for Sum of Digits / Digital Root: https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript (6 kyu)

function digitalRoot(n) {
    const numArray = n.toString().split("");
    if (numArray.length === 1) {
        return parseInt(numArray[0]);
    } else {
        const newN = numArray
            .map((num) => parseInt(num))
            .reduce((prev, curr) => prev + curr);
        return digitalRoot(newN);
    }
}
