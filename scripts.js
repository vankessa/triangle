var triangle =['Equilateral','Isosceles','Scalene'];
var firstSide=prompt('Enter first side number ');
var secondSide=prompt('Enter second side number');
var thirdSide=prompt('enter third side number');
var store=['firstSide','secondSide','thirdSide'];
function side(firstSide,secondSide,thirdSide){
if(firstSide===secondSide===thirdSide){
    console.log(triangle[0]); 
}
else if((firstSide===secondSide) && (firstSide!=thirdSide) && (secondSide!=thirdSide)){
    console.log(triangle[1]);
}
else if( ((firstSide!=secondSide)&&(firstSide!=thirdSide)&&(secondSide!=thirdSide)){
    console.log(triangle[2]);
}
else{

}



}
alert(side());



