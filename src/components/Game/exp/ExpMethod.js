function GenExp(){
    const signs = [
        "+",
        "-",
        "*"
    ];
    const sign = signs[Math.floor(Math.random() * signs.length)];
    return Math.floor(Math.random() * Math.floor(100)) + ' ' + sign + ' ' + Math.floor(Math.random() * Math.floor(100));
}
   
function CalculateExp(exp){
    return new Function('return ' + exp)();
}

function FalseCalculateExp(exp){
    return CalculateExp(exp) + Math.floor(Math.random() * Math.floor(10) + 1)
}

export {GenExp, CalculateExp, FalseCalculateExp}