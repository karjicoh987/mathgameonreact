//Генерация правильного ответа
const TrueVariable = () => Math.floor(Math.random() * Math.floor(4));

//Генерация массива c вариантами
const VarArr = (GameMethod,value,param) => {
    const TrueVar = TrueVariable();
    return (new Array(4).fill(0).map( (n,i) =>{
    if (i === TrueVar){
        return value(param);
    }
    return (GameMethod(param));
            }
        )
    )
}

export default VarArr;