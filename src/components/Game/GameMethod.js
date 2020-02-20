//Генерация правильного ответа
const TrueVariable = () => Math.floor(Math.random() * Math.floor(4));

//Выбор слова из массива 
const random_value = (arr) => arr[Math.random() * Math.floor(arr.length)];

//Генерация массива с значениями
const VarArr = (arr,GameMethod) => {
    const value = random_value(arr);
    const TrueVar = TrueVariable();
    return (new Array(4).fill(0).map( (n,i) =>{
    if (i === TrueVar){
        return (value);
    }
    return (GameMethod(value));
            }
        )
    )
}

export default VarArr;