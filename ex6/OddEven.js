const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
       
        let a = "The number " + num[i] + " is even."
        for (let j = 0; j < num.length; j++) {
            document.getElementById('result').innerHTML = a;
        }
    }
    else {
       
        let b = "The number " + num[i] + " is even."
        for (let j = 0; j < num.length; j++) {
            document.getElementById('result').innerHTML = b;
        }
       
    }
}