import {Albhabet} from './WordData'

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
    let ArrStr = str.split("");
    let wordInd = "";
    for(let i = 0; i<Math.floor(Math.random() * (1) + 1); i++){
        wordInd = Albhabet[Math.floor(Math.random() * Albhabet.length)];
        ArrStr[Math.floor(Math.random() * ArrStr.length)] = wordInd;
    }
    return ArrStr.join('');
}

function GenVariable(s){
        let FalseWord = null;
        let TrueWord = RandomChoice(s);
        let massWord = [];
        massWord.push(TrueWord);
        for (let i = 0; 3 > i; i++){
            FalseWord = RandomChoice(ReplaceWord(s));
            massWord.push(FalseWord);
        }
        return massWord.join(" ");
}

export default GenVariable;