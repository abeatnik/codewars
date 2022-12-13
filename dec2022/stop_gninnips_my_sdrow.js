//my solution for Stop gninnipS My sdroW! : https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript (6 kyu)

function spinWords(string) {
    const arr = string.split(" ");
    const result = arr.map((word) => {
        return word.length >= 5 ? word.split("").reverse().join("") : word;
    });
    return result.join(" ");
}
