import React, {useState} from 'react';
import VariableCard from '../VariableCard/VariableCard';
import {arrWord} from './WordData';
import {ReplaceWord, RandomWord} from './MethodWord';
import VarArr from '../GameMethod';



const WordCard = () =>{

    function GameChanger(value){
    }

    const random_word = RandomWord(arrWord);
    const VarWordArr = VarArr(ReplaceWord,random_word);
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