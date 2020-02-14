var checkbox = document.querySelector("input[name=checkbox]");


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