const uniq = require('lodash.uniq')

const countUniqChars = (str) =>{
    if (str === "") return 0;
    const uniq_str = uniq(str.split("")).length;
    return uniq_str;
}

console.log(countUniqChars('You know nothing Jon Snow'))

