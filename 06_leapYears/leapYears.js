// const leapYears = function(years) {
//     if ((years %4==0) && (years%400==0)){
//         return true;
//     }
//     return false;
// };

const leapYears = function(year) {
    return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
  };

// Do not edit below this line
module.exports = leapYears;
