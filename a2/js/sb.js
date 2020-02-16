var checkbox = document.querySelector("input[name=checkbox]");
var verify = document.querySelector("input[name=verify]");

checkbox.addEventListener('change', function ()
{
    if(this.checked)
    {
        document.querySelector(".nfo2 input[name=name").value = document.querySelector(".nfo input[name=name]").value;
        document.querySelector(".nfo2 input[name=zip").value = document.querySelector(".nfo input[name=zip]").value;
    }
    else
    {
        document.querySelector(".nfo2 input[name=name").value = "";
        document.querySelector(".nfo2 input[name=zip").value = "";
    }
});


verify.addEventListener('click', function()
{
    var name = document.querySelector(".nfo input[name=name]").value;
    var zip = document.querySelector(".nfo input[name=zip]").value;
    if(name && zip !== "")
    {
        alert("Thanks! Your information has been verified!");
    }
    else
    {
        alert("Your information is missing! Try Again!");
    }
});