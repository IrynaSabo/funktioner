var button1=document.getElementById("try_button");
button1.addEventListener("click", function()
{
    var input=document.getElementById("txt").value;
    var output=input.toUpperCase();
    document.getElementById("txt").innerHTML=output;
})