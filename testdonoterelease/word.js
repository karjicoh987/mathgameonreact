function word(str){
    const ArrStr = str.split("");
    let ArrW = [];
    let ArrInd = null;
    for (let i = 0; i < str.length; i++){
        ArrInd = Math.floor(Math.random() * (ArrStr.length - 1));
        ArrW[i] = ArrStr[ArrInd];
        ArrStr.splice(ArrInd, 1);
    }
    
    return ArrW.join("")

}

console.log(word("dima"))