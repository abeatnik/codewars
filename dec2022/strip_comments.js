//my solution for Strip Comments: https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript (4kyu)

function solution(input, markers) {
    let lines = input.split("\n");
    lines = lines.map((line) => {
        for (let i = 0; i < line.length; i++) {
            if (markers.includes(line.split("")[i])) {
                return line.split("").slice(0, i).join("").trim();
                break;
            }
        }
        return line.trim();
    });
    return lines.join("\n");
}
