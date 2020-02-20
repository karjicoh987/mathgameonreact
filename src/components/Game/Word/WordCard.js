import React, {useState} from 'react';
import VariableCard from '../VariableCard/VariableCard';
import {arrWord} from './WordData';
import {GenVariable} from './MethodWord';



const WordCard = () =>{
    // const[word, setWord] = useState(str)
    // const[userPoint, setUserPoint] = useState(0);
    
    

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
    
    const TrueVariable = Math.floor(Math.random() * Math.floor(4));
    const random_word = arrWord[Math.random() * Math.floor(arrWord.length)];
    const VarWordArr = new Array(4).fill(0).map( (n,i) =>{
        if (i === TrueVariable){
            return (random_word );
        }
        return (GenVariable(random_word));
    });
    const VariableCards = VarWordArr.map((num,i) => <VariableCard 
                                                                text = {num} 
                                                                key = {i} 
                                                                GameChanger = {GameChanger}
                                                            />)
    return(
        <div>
            {VariableCards}
        </div>
    )
}

export default WordCard;