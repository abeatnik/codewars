//my solution for Sort binary tree by levels: https://www.codewars.com/kata/52bef5e3588c56132c0003bc/train/javascript (4kyu)

function treeByLevels(rootNode) {
    const result = [];
    let nodeArray = [rootNode];
    const loopAndPush = (array) => {
        while (nodeArray.length > 0) {
            const node = nodeArray[0];
            if (node !== null) {
                result.push(node.value);
                nodeArray.push(node.left, node.right);
                nodeArray.shift();
            } else {
                nodeArray.shift();
            }
        }
        return result;
    };
    return loopAndPush(nodeArray);
}
