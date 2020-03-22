//1.
var x = 5;
var y = 8;
var z = true;

if( x <= y && z == true){
    console.log("sucsess");
}


//2.
x = true;
y = 1;

//2.1
if(x !== y){
    console.log("sucsess");
}

//2.2
x !== y && console.log("sucsess");


//3.
x = 7;

switch(x){
    case 1:
    console.log("1");
    break;
    case 2:
    console.log("2");
    break;
    case 7:
    console.log("sucsess");
    break;
    default:
    break;
}