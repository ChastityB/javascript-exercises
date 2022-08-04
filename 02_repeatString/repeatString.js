const repeatString = function(string, num) {
    if(num < 0){
        return 'ERROR'
    }
    let repeatedWords = ''

     for (let i=1; i<=num; i++){
        repeatedWords += string;
    };
    return repeatedWords;
};

// Do not edit below this line
module.exports = repeatString;
