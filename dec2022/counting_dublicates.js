//my solution for Counting Dublicates: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript (6kyu)

function duplicateCount(text) {
    const allLowerCase = text.split("").map((char) => char.toLowerCase());
    return [
        ...new Set(
            allLowerCase.filter(
                (char) =>
                    allLowerCase.indexOf(char) !==
                    allLowerCase.lastIndexOf(char)
            )
        ),
    ].length;
}
