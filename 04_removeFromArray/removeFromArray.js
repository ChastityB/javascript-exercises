const removeFromArray = function(...args) {
    let theArray = args[0];
    let newArray = [];

    theArray.forEach((item) => {
        if(!args.includes(item)){
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
