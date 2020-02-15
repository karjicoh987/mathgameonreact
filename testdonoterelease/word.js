function GenWordRandomChoice(str){
    const ArrStr = str.split("");
    let ArrW = [];
    let ArrInd = null;
    for (let i = 0; i < str.length; i++){
        ArrInd = Math.floor(Math.random() * (ArrStr.length));
        ArrW[i] = ArrStr[ArrInd];
        ArrStr.splice(ArrInd, 1);
    }
    
    return ArrW.join("");

}

function GenVariableWord(s, i = 0, massWord = []){
    let GenWord = null;
    if (i === 3){
        return massWord.join(' ');
    }
    GenWord = GenWordRandomChoice(s);
    if (massWord.indexOf(GenWord) === -1 && GenWord !== s){
        massWord.push(GenWord);
    }
    else{
        return GenVariableWord(s,i, massWord);
    }
    return GenVariableWord(s,i + 1, massWord);
}
console.log(GenVariableWord("ego"));