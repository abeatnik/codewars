//my solution for Detect Pangram: https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript (6kyu)

function isPangram(string) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    string.split("").forEach((char) => {
        alphabet = alphabet.filter((alpha) => alpha !== char.toLowerCase());
    });
    return alphabet.length === 0;
}
