var img = document.createElement("img");//new Image("width: 300px", "height: 400px" );
var submit = document.querySelector("input[name=submit]");
var src = document.getElementById("x");
img.src = "../img/place.jpg";
img.width = 500;
img.height = 400;


src.appendChild(img);
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
           img.src = "../img/car.jpg";
           src.appendChild(img);
            break;
        }
        case "boat":
        {
            img.src = "../img/boat.jpg";
            src.appendChild(img);
            break;
        }
        case "plane":
        {
            img.src ="../img/plane.jpg";
            src.appendChild(img);
            break;
        }
        case "train":
        {
            img.src ="../img/train.jpg";
            src.appendChild(img);
            break;
        }

    }
});