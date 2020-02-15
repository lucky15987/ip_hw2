//var select = document.querySelector("input[name=select]").value.toLowerCase();
var submit = document.querySelector("input[name=submit]");

function match(num)
{
    alert("The Value is " + num);
}
submit.addEventListener('click', function()
{
    //match(select);
    var select = document.querySelector("input[name=select]").value.toLowerCase();
    switch (select)
    {
        case "car":
        {
            alert("car");
            break;
        }
        case "boat":
        {
            alert("boat");
            break;
        }
        case "plane":
        {
            alert("plane");
            break;
        }
        case "train":
        {
            alert("train");
            break;
        }

    }
});