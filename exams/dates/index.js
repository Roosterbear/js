/* 

Given 2 dates, get the difference in number of days

Rules:

-No negative numbers

*/

function daysDifference(date1, date2){

  // Get right format
  date1 = date1 instanceof Date ? date1:new Date(date1);
  date2 = date2 instanceof Date ? date2:new Date(date2);
  
  // Getting milliseconds in a day
  msInOneDay = 1000*60*60*24;

  let differenceInMs = ((date1.getTime() - date2.getTime())/msInOneDay);

  // Keep only whole and absolute numbers, removing fractions from numbers
  differenceInMs = Math.abs(Math.floor(differenceInMs));

  return `The difference is ${differenceInMs} days`;
}

console.log(daysDifference('2023/12/05', '2023/12/02'));
console.log(daysDifference('May 31, 2022', 'May 31, 2023'));
console.log(daysDifference('16/sep/2020', '17/apr/2019'));