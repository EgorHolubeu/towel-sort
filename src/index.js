
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if ( !Array.isArray(matrix) || (matrix.length === 0) ) return ([]);
    let sortedMatrix = [];

    matrix.forEach((item, i) => {
        if (i % 2 !== 0) { sortedMatrix = sortedMatrix.concat( item.reverse() ); }
        else { sortedMatrix = sortedMatrix.concat(item); }
    });

    return sortedMatrix;

}
