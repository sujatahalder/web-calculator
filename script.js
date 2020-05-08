var operator="";

function display(disval) {
 // var disval= document.getElementById(result).value;
 if(disval=="/")
    operator="/";

 document.getElementById("result").value += disval;
 console.log(disval);
  
}

function compute(){
    var input = document.getElementById("result").value;
    var computeVariables = input.split(operator);

    if(operator=="/"){
        var res=(parseInt(computeVariables[0])/parseInt(computeVariables[1]));
        document.getElementById("result").value= res;
    }
}

function clearScreen() {
    document.getElementById("result").value= "";
}