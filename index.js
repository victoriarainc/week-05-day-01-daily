const moment = require('moment');
  moment().format();
const chalk = require('chalk');

let longform = chalk.blue(moment().format('LLLL'));

let numDay = chalk.magenta(moment().dayOfYear());

let a = moment();
let b = moment().startOf('day');
let numSec = chalk.cyan(a.diff(b, 'seconds'));

let dayLight = moment().isDST();
  if (dayLight === true) {
    dayLight = chalk.green("is");
  } else {
    dayLight = chalk.green("is not");
  }

let leapYear = moment().isLeapYear();
  if (leapYear === true) {
    leapYear = chalk.red("is");
  } else {
    leapYear = chalk.red("is not")  ;
  }

let template = (`
  It is ${longform}.
  It is the ${numDay} day of the year.
  It is ${numSec} seconds into the day.
  It ${dayLight} Daylight Savings Time.
  It ${leapYear} a Leap Year.
  `);

console.log(template);
