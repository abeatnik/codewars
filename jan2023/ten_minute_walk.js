// my solution for Take A Ten Minute Walk : https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript (6kyu)
function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false;
    }
    const calculateDistance = (string) =>
        walk.filter((char) => char === string).length;
    return (
        calculateDistance("n") === calculateDistance("s") &&
        calculateDistance("w") === calculateDistance("e")
    );
}
