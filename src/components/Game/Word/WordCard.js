import React, {useState} from 'react';

//Массив слов
import {arrWord} from './WordData';

//Компоненты
import BrainComplete from '../../../img/brainComplete.png'
import BrainLose from '../../../img/brainLose.png'
import VariableCard from '../VariableCard/VariableCard';
//Иговые методы
import VarArr from '../GameMethod';
import {ReplaceWord, RandomWord} from './MethodWord';
import AreaQuest from '../AreaQuest/AreaQuest';
import Point from '../Point/Point';



const WordCard = () =>{

    const[word, setWord] = useState(RandomWord(arrWord));
    const[userPoint, setUserPoint] = useState(0);
    const[falsePoint, setfalsePoint] = useState(0)
    const[Brains] = useState(new Array());

    function GameChanger(value){
    
        if (value === word){
            setWord(RandomWord(arrWord));
            setUserPoint(userPoint + 1);
            Brains.push(true);
        }else{
            setWord(RandomWord(arrWord));
            setfalsePoint(falsePoint + 1);
            Brains.push(false);
        }
    }

    const VarWordArr = VarArr(ReplaceWord, word, "Word");
    const VariableCards = VarWordArr.map((num,i) => <VariableCard 
                                                                text = {num} 
                                                                key = {i} 
                                                                GameChanger = {GameChanger}
                                                            />);
    // let BrainsImg = Brains.map((stateBrain,i)=>{
    //     if(stateBrain){
    //         return <img src = {BrainComplete} key = {i} width = "80" height = "80" alt = "Зеленый мозг"/>
    //     }
    //     return <img src = {BrainLose} key = {i} width = "80" height = "80" alt = "Красный мозг"/>
    //  }
    //)

    return(
        <div>
            <div className = "Exp-card">
                <AreaQuest QuestText = {word}/>
            </div>
            <div className = "flex-box">
                {VariableCards}
            </div>
            <div className = "flex-box">
                <img src = {BrainComplete} width = "80" height = "80" alt = "Зеленый мозг"/> 
                <Point point = {userPoint}/> 

                <img src = {BrainLose} width = "80" height = "80" alt = "Красный мозг"/>
                <Point point = {falsePoint}/>
            </div>
                
        </div>
    )
}

export default WordCard;