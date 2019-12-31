$(document).ready(function(){

    $("#go").click(function(){

    var y = document.getElementById("translate").value;
    var x = alternativeCase(y);

    console.log(y);
    console.log(x);
function alternativeCase(string){
    var output = "";
    for(var i = 0; i < string.length; i++){
        if (i % 2 != 0) {
            output += string[i].toUpperCase();
        }
        else {
            output += string[i].toLowerCase();
         }   
    }
    return output;;
    
}
    document.getElementById("translateResult").innerText = x;   
});
});