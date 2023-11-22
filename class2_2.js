const firstName = "Ander"
const lastName = "Laansalu"
const dateInfo = require("./date_ET");
const timeInfo = require("./time_ET");
console.log(firstName + " " + lastName);
console.log("Täna on " + dateInfo.dateNowET());
console.log("Kohalik kellaaeg on " + timeInfo.timeNowET());



//console.log(Date());
