const button = document.getElementById("Btn");

button.addEventListener('click', function(){
    let color = '#';
    let letters = "0123456789ABCDEF"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    button.style.backgroundColor = color;
    console.log('Color Changed!!!');
});