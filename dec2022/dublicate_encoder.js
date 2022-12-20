//my solution for Dublicate Encoder: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript (6kyu)

function duplicateEncode(word) {
    const allLower = word.split("").map((char) => char.toLowerCase());
    let encoded = allLower.map((char) =>
        allLower.indexOf(char) === allLower.lastIndexOf(char) ? "(" : ")"
    );
    return encoded.join("");
}
