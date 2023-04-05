// --------------------------------- Global ---------------------------------

function checking(x) {
    var ret;
    if (x) {
        if (isNaN(x)||(!x.trim())) {
            ret = false;
        }
        else if (x < 0) {
            ret = false;
        }
        else if (x % 1 != 0) {
            ret = false    
        }
        else {
            ret = true;
        }
    }
    else {
        ret = false;
    }
    return ret;
}


// --------------------------------- Task-1 ---------------------------------


function degree(x, y) {
    if (y === 0) return x = 1;
    return y === 1 ? x : x * degree(x, y - 1);
}

btn1.onclick = function task1() {
    var numOne = numOneTask1.value.replace(/\s/g, '');
    var numTwo = numTwoTask1.value.replace(/\s/g, '');
    if ((!checking(numOne)) || (!checking(numTwo))) {
        var text = "<h2>" + "Что-то пошло не так, попробуйте еще раз \n🥺!!Error!!" + "</h2> ";
    }
    else {
        var result = degree(+numOne, +numTwo)
        text = "<h2>" + numOne+ " " + "в степени: " + " " + numTwo + " " +"</br>" + "Будет: " + result + "</h2>";
    }
    return document.getElementById('task1').innerHTML = text;
}


// --------------------------------- Task-2 ---------------------------------


function greatestCommonDivisor(x, y) {
    if (y > x) return greatestCommonDivisor(y, x);
	if (!y) return x;
    return greatestCommonDivisor(y, x % y)
}

btn2.onclick = function task2() {
    var numOne = numOneTask2.value.replace(/\s/g, '');
    var numTwo = numTwoTask2.value.replace(/\s/g, '');
    if ((!checking(numOne)) || (!checking(numTwo)) || (numOne == 0) || (numTwo == 0)) {
        var text = "<h2>" + "Что-то пошло не так, попробуйте еще раз 🥺!!Error!!" + "</h2> ";
    }
    else {
        var result = greatestCommonDivisor(+numOne, +numTwo)
        text = "<h2>" + "Наибольшим общим делителем" + "<br>" + "чисел: " + " " + numOne + " " + " и " + " " + numTwo + " " + "</br>" + "Будет: " + result + "</h2>";
    }
    return document.getElementById('task2').innerHTML = text;
}


// --------------------------------- Task-3 ---------------------------------

function maxNumber(x, y = 0) {
    if (x < 10) return x > y ? x : y;
    let c = x % 10;
    if (c > y) y = c;
    x = Math.floor(x / 10);
    return maxNumber(x, y);
}

btn3.onclick = function task3() {
    var numOne = numOneTask3.value.replace(/\s/g, '');
    var numTwo = null
    if (!checking(numOne) || (numOne == 0)) {
        text = "<h2>" + "Что-то пошло не так, попробуйте еще раз 🥺!!Error!!" + "</h2> ";
    }
    else {
        var result = maxNumber(+numOne, numTwo)
        text = "<h2>" + "Максимальной цыфрой из числа:" + " " + parseInt(numOne) + "</br>" + "Будет: " + result + "</h2>";
    }
    return document.getElementById('task3').innerHTML = text;
}

// --------------------------------- Task-4 ---------------------------------

function primeNumber(x, y = x) {
    if (x === 1) return false;
    if (y === 1) return true;
    if (x % y === 0 && x !== y) return false;
    return primeNumber(x, y - 1);
}


btn4.onclick = function task4() {
    var numOne = numOneTask4.value.replace(/\s/g, '');
    if (!checking(numOne) || (numOne == 0)) {
        var text = "<h2>" + "Что-то пошло не так, попробуйте еще раз 🥺!!Error!!" + "</h2> ";
    }
    else {
        var result = primeNumber(+numOne)
        if (!result) {
            text = "<h2>" + "Данное число: " + " " + numOne + "</br>"+ "НЕ является Простым" + "</h2>";
        }
        else {
            text = "<h2>" + "Данное число: " + " " + numOne + "</br>"+ "Является Простым" + "</h2>";
        }
    }
    return document.getElementById('task4').innerHTML = text;
}

// --------------------------------- Task-5 ---------------------------------

function multipliers(x, y = 2){
    if (x < 2) return "";
    if (x % y === 0)
    {
        return multipliers(x / y, y) + " *" + y;
    }
    return multipliers(x, y + 1);
}

btn5.onclick = function task5() {
    var numOne = numOneTask5.value.replace(/\s/g, '');
    if (!checking(numOne) || (numOne == 0)) {
        var text = "<h2>" + "Что-то пошло не так, попробуйте еще раз 🥺!!Error!!" + "</h2> ";
    }
    else {
        var result = multipliers(+numOne);
        text = "<h2>" + "Все множители числа: " + " " + numOne + "</br>" + result + "</h2>";
    }
    return document.getElementById('task5').innerHTML = text;
}

// --------------------------------- Task-6 ---------------------------------

function fibonacci(x) {
    if (x <= 2) return 1;
    return fibonacci(x - 1) + fibonacci(x - 2);
}

btn6.onclick = function task6() {
    var numOne = numOneTask6.value.replace(/\s/g, '');

    if (!checking(numOne) || (numOne == 0)) {
        var text = "<h2>" + "Что-то пошло не так, попробуйте еще раз 🥺!!Error!!" + "</h2>";
    }
    else
    if (numOne > 40) {
        text = "<h2>" + "Число очень большое, пожалуйста 🥺 введите меньше число" + "</h2>";
    }
    else {
        var result = fibonacci(+numOne);
        text = "<h2>" + "Под порядковым номером:" + " " + numOne + "</br>" + " Число "+ " " + result + "</h2>";
    }
    return document.getElementById('task6').innerHTML = text;
}

// --------------------------------- Task-7 ---------------------------------

function powerTwo(x) {
    if (x === 1) return true;
    if (x % 2 !== 0) return false;
    return powerTwo(x / 2);
}

btn7.onclick = function task7() {
    var numOne = numOneTask7.value.replace(/\s/g, '');
    if (!checking(numOne) || (numOne == 0)) {
        var text = "<h2>" + "Что-то пошло не так, попробуйте еще раз 🥺!!Error!!" + "</h2> ";
    }
    else {
        var result = powerTwo(+numOne)
        if (!result) {
            text = "<h2>" + "НЕТ число: " + " " + numOne + "</br>"+ "НЕ является степенью двойки" + "</h2>";
        }
        else {
            text = "<h2>" + "ДА число: " + " " + numOne + "</br>"+ "Является степенью двойки" + "</h2>";
        }
    }
    return document.getElementById('task7').innerHTML = text;
}

