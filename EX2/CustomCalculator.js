document.getElementById('sqrBtn').addEventListener("click", square); 

function square(){
    let side = document.getElementById('input1').value;
    document.getElementById("result").innerHTML = side*side;
}

document.getElementById('halfBtn').addEventListener("click", function(){
    let inputTwo = document.getElementById('input2').value;
    document.getElementById("result").innerHTML = inputTwo/2 ;
});

document.getElementById('wBtn').addEventListener("click", function(){
    let fractionNumber = document.getElementById('input3').value;
    let wholeNumber = document.getElementById('input4').value;
    document.getElementById("result").innerHTML = (fractionNumber/wholeNumber)*100 ;
});

document.getElementById('circleBtn').addEventListener("click", function(){
    let radius = document.getElementById('input5').value;
    document.getElementById("result").innerHTML = Math.PI*radius*radius ;
});









// var property_value = Math.PI
// document.write("Property Value: " + property_value);