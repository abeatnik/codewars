//my solution for Nesting Structure Comparison: https://www.codewars.com/kata/520446778469526ec0000001/train/javascript (4kyu)

Array.prototype.sameStructureAs = function (other) {
    console.log(typeof this, typeof other);
    function empty(elem) {
        if (Array.isArray(elem)) {
            return [elem.map((e) => empty(e))];
        } else {
            return;
        }
    }
    if (Array.isArray(other)) {
        return (
            JSON.stringify(this.map((elem) => empty(elem))) ===
            JSON.stringify(other.map((elem) => empty(elem)))
        );
    }
    return false;
};
