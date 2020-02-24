import {Albhabet} from './WordData'

//Выбор случайного слова из коллекции
function RandomWord(dict){
    return dict[Math.floor(Math.random() * dict.length)];
}

//Перемешивание букв в слове 
function RandomChoice(str){
    //Разделение строки по разделителю и создание массива ArrStr
    const ArrStr = str.split("");
    //ArrW Результирующий массив 
    let ArrW = [];
    //ArrInd индекс в массиве
    let ArrInd = null;
    for (let i = 0; i < str.length; i++){
        //Присвоение рандомного индекса
        ArrInd = Math.floor(Math.random() * (ArrStr.length));
        ArrW[i] = ArrStr[ArrInd];
        //Удаление значения из Массива
        ArrStr.splice(ArrInd, 1);
    }
    
    return ArrW.join("");

}

//Замена букв в слове
function ReplaceWord(str){
    //Разделение по разделению перемешанной строки  с помощью функции RandomChoice
    let ArrStr = RandomChoice(str).split("");
    //Индекс слова
    let wordInd = "";

    //Выбор 2 букв и замена букв слове
    for(let i = 0; i<Math.floor(Math.random() * (1) + 1); i++){
        wordInd = Albhabet[Math.floor(Math.random() * Albhabet.length)];
        ArrStr[Math.floor(Math.random() * ArrStr.length)] = wordInd;
    }
    return ArrStr.join('');
}

export {ReplaceWord, RandomWord};