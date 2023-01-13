// my solution for The observed PIN : https://www.codewars.com/kata/5263c6999e0f40dee200059d/ (4kyu)

function getPINs(observed) {
    const possibleCombos = [];
    const combinationsByIndexNumbers = [
        ["0", "8"],
        ["1", "2", "4"],
        ["1", "2", "3", "5"],
        ["2", "3", "6"],
        ["1", "4", "5", "7"],
        ["2", "4", "5", "6", "8"],
        ["3", "5", "6", "9"],
        ["4", "7", "8"],
        ["0", "5", "7", "8", "9"],
        ["6", "8", "9"],
    ];
    const getPins = (...combos) =>
        combos.reduce((prev, curr) =>
            prev.flatMap((elem1) => curr.map((elem2) => [elem1, elem2].flat()))
        );
    observed.split("").forEach((num) => {
        possibleCombos.push(combinationsByIndexNumbers[parseInt(num)]);
    });

    return observed.length === 1
        ? getPins(...possibleCombos)
        : getPins(...possibleCombos).map((elem) => elem.join(""));
}
