//Генерация правильного ответа
const TrueVariable = () => Math.floor(Math.random() * Math.floor(4));

//Генерация массива c вариантами
const VarArr = (GameMethod,param,game) => {
    const TrueVar = TrueVariable();
    return (new Array(4).fill(0).map( (n,i) =>{
    if (i === TrueVar){
        if(game === "Word"){
            return param
        }
        if(game === "Exp"){
            return eval(param)
        }
        if(game === "image"){
            
        }
    }
    return (GameMethod(param));
            }
        )
    )
}
export default VarArr;