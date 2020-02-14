let d = new Date();


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"];

document.getElementById("datetime").innerHTML = days[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate() + ", "
                        + d.toLocaleTimeString();