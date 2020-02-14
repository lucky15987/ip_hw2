let d = new Date();

/*
var day = d.getDay();
var month = d.getMonth();
var numDay = d.getDate();
 */
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"];
var time = d.getTime();
document.getElementById("datetime").innerHTML = days[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate() + ", "
                        + d.toLocaleTimeString();