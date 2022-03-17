// transposes the array to search along vertical axis
const transpose = function(matrix) {
    let [row] = matrix;
    return row.map((_, column) => matrix.map(row => row[column]));
};

const wordSearch = (letters, word) => {
    // checks if empty array
    if (!letters.length) {
        return false;
    }
    
    // checks horizontal axis for word present
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const l of horizontalJoin) {
        if (l.includes(word)) return true;
    }

    //checks vertical axis for word present
    const matrix = transpose(letters);
    const verticalJoin = matrix.map(ls => ls.join(''));
    for (const l of verticalJoin) {
        if (l.includes(word)) return true;
    }
    return false;
}

module.exports = wordSearch;