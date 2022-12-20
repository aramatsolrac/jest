module.exports.sum = (a, b) => {
    const int1 = parseInt(a);
    const int2 = parseInt(b);

    if(Number.isNaN(int1) || Number.isNaN(int2)) throw new Error(`Cannot sum ${a} and ${b}`);

    return int1 + int2;
}
