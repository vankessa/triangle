   var Sum1 = function(value1, value2) {
   return value1 + value2;
    };
    
    var Sum2 = function(value2, value3) {
    return value2 + value3;
    };
    
    var Sum3 = function(value1, value3) {
     return value1 + value3;
  };
  
    function check(){
        var triangle=['equilaterial triangle','Isoscele triangle','Scalene triangle']
     var value1=parseInt (document.getElementById('one').value);
     var value2=parseInt(document.getElementById('two').value);
     var value3=parseInt(document.getElementById('three').value);
     
     
     var text;
     var array=[value1,value2,value3];
    
     if(Sum1(value1,value2) > value3 || Sum2(value2,value3) > value1 || Sum3(value1,value3) > value2){
        // text="this values can't form a triangle"
     if(value1 === value2 && value2 === value3){
         text = triangle[0];
    }
     //Equilateral Triangle
    
     else if(value1===value2 || value1===value3 || value2===value3) {
        text=triangle[1];
    }
     //Isoscele Triangle
     
     

  else if ((value1!==value2 )&& (value1!==value3) &&(value2!==value3 )){
        text=triangle[2];
    }
    else {
        text=" not a triangle";
    }
    
     }

    //Scalene Triangle

    else {
        text = "it is not a triangle.";
     }
     
     document.getElementById('demo').innerHTML="The side of trianges are["+array+"]"+" is ";
     document.getElementById('demo').innerHTML+=text;
}
    
    




