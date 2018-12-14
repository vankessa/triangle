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
     var value1=document.getElementById('one').value;
     var value2=document.getElementById('two').value;
     var value3=document.getElementById('three').value;
     var text;
    if(Sum1(value1,value2) <= value3 || Sum2(value2,value3) <= value1 || Sum3(value1,value3) <= value2){
        text="it is not a triangle"
    }
    else if(value1 === value2 && value2 === value3){
        text = triangle[0];
    }
     //Equivalent Triangle
    
     else if(value1===value2 || value1===value3 || value2===value3) {
        text=triangle[1];
    }
    //Isoscele Triangle
    else if(value1!==value2 && value1!==value3 &&value2!==value3){
        text=triangle[2];
    }
    //Scalene Triangle
    else{
        text = "it is not a triangle.";
    }
    document.getElementById('demo').innerHTML = text;
}
    




