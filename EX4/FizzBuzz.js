var arr = [1, 2, 3, 4, 5, '+', 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, false, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, `nk09j`, 49, 50];

var arr2 =[];

for (var i = 0; i < 50; i++) {
    if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {
        arr2[i] = arr[i] + ' FizzBUzz';
    }
    else if (arr[i] % 5 == 0) {
        arr2[i] = arr[i] + ' Buzz';
    }
    else if (arr[i] % 3 == 0) {
        arr2[i] = arr[i] + ' Fizz';
    }
    else if (isNaN(arr[i])) {
        arr2[i] = arr[i] + " ---> Error: Nan - Not a Number! Please give correct Input";
    }
    else if (arr[i] % 3 != 0 || arr[i] % 5 != 0) {
        arr2[i] = arr[i] + " ---> given Input Number/Value is not divisible by both 3 and 5"
    }
}
console.log(arr2);