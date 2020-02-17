import React, {useState} from 'react';
import VariableCard from '../exp/VariableCard';
import data from './WordData'
const WordCard = () =>{
    // const[word, setWord] = useState(str)
    // const[userPoint, setUserPoint] = useState(0);
    
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
    
    function GenVariableWord(s){
        function iter(counter = 0, massWord = []){
            let GenWord = null;
            if (counter === 3){
                return massWord.join(' ');
            }
            GenWord = GenWordRandomChoice(s);
            if (massWord.indexOf(GenWord) === -1 && GenWord !== s){
                massWord.push(GenWord);
            }
            else{
                return iter(counter + 1, massWord);
            }
            return iter(counter + 1, massWord);
        }
        return iter()
    }

    function GameChanger(value){
        let response = random_word;
        if (value == response){
            // setExp(GenExp());
            // setUserPoint(userPoint + 1);
            // Brains.push(true)
        }else{
            // setExp(GenExp());
            // Brains.push(false)
        }
    }
    
    const TrueVariable = Math.floor(Math.random() * Math.floor(3));
    const random_word = data[Math.random() * Math.floor(data.length)];
    const VarWordArr = new Array(3).fill(0).map( (n,i) =>{
        if (i === TrueVariable){
            return (random_word );
        }
        return (GenVariableWord(random_word ));
    });
    const VariableCards = VarWordArr.map((num,i) => <VariableCard 
                                                                text = {num} 
                                                                key = {i} 
                                                                GameChanger = {GameChanger}
                                                            />)
    return(
        <div>
            {VariableCard}
        </div>
    )
}

export default WordCard;