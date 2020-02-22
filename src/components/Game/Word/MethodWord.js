import {Albhabet} from './WordData'

function RandomWord(arrWord){
    return arrWord[Math.random() * Math.floor(arrWord.length)];
}
function RandomChoice(str){
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

function ReplaceWord(str){
    let ArrStr = RandomChoice(str).split("");
    let wordInd = "";
    for(let i = 0; i<Math.floor(Math.random() * (1) + 1); i++){
        wordInd = Albhabet[Math.floor(Math.random() * Albhabet.length)];
        ArrStr[Math.floor(Math.random() * ArrStr.length)] = wordInd;
    }
    return ArrStr.join('');
}

export {ReplaceWord, RandomWord};