// extra
document.querySelectorAll(".left-blue-nav ").forEach(a => {
        a.addEventListener("click", () => {
            document.querySelectorAll(".extra").forEach(t => {
                t.style.display = "none";
            })
            let id = a.getAttribute("data-open");
            document.getElementById(id).style.display = 'block';
        });
    })
    // extra END

// extram start
document.querySelectorAll(".do-btn ").forEach(a => {
        a.addEventListener("click", () => {
            document.querySelectorAll(".extram").forEach(t => {
                t.style.display = "none";
            })
            let id = a.getAttribute("data-open");
            document.getElementById("mobileExtra2").style.display = 'block';
            document.getElementById(id).style.display = 'block';


        });
    })
    // extram END

// extram-2 start
document.querySelectorAll(".ex-btn ").forEach(a => {
        a.addEventListener("click", () => {
            document.querySelectorAll(".exOne").forEach(t => {
                t.style.display = "none";
            })
            let id = a.getAttribute("data-open");
            document.getElementById(id).style.display = 'block';
        });
    })
    // extram-2 END

// Mobile extra start
document.querySelectorAll(".mobile-ex-b ").forEach(a => {
        a.addEventListener("click", () => {
            document.querySelectorAll(".mob-ex").forEach(t => {
                t.style.display = "none";
            })
            let id = a.getAttribute("data-open");
            document.getElementById(id).style.display = 'block';
        });
    })
    // Mobile extra END


// services start
document.querySelectorAll(".services-b ").forEach(a => {
        a.addEventListener("click", () => {
            document.querySelectorAll(".total-info-text-services").forEach(t => {
                t.style.display = "none";
            })
            let id = a.getAttribute("data-open");
            document.getElementById(id).style.display = 'block';
        });
    })
    // services END

// services start
document.querySelectorAll(".categroies-product-btn").forEach(a => {
        a.addEventListener("click", () => {
            document.querySelectorAll(".extra-1").forEach(t => {
                t.style.display = "none";
            })
            let id = a.getAttribute("data-open");
            document.getElementById(id).style.display = 'block';
        });
    })
    // services END

// tableedit start
document.querySelectorAll(".table-edit ").forEach(a => {
        a.addEventListener("click", () => {
            document.querySelectorAll(".tableEdit").forEach(t => {
                t.style.display = "none";
            })
            let id = a.getAttribute("data-open");
            document.getElementById(id).style.display = 'block';
        });
    })
    // tableedit END
    // Full Screen Start
document.querySelector('#full').addEventListener('click', function() {
    toggleFullScreen();
});

function toggleFullScreen() {
    if (!document.fullscreenElement && // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) { // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}
// Full Screen End


// Calculator Start 

"use strict";

var input = document.getElementById('input'), // input/output button
    number = document.querySelectorAll('.numbers div'), // number buttons
    operator = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'), // clear button
    resultDisplayed = false; // flag to keep an eye on what output is displayed
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function(e) {
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];
        if (resultDisplayed === false) {
            input.innerHTML += e.target.innerHTML;
        } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
            resultDisplayed = false;
            input.innerHTML += e.target.innerHTML;
        } else {
            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML;
        }
    });
}
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function(e) {
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];
        if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
            var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
            input.innerHTML = newString;
        } else if (currentString.length == 0) {
            console.log("enter a number first");
        } else {
            input.innerHTML += e.target.innerHTML;
        }

    });
}

result.addEventListener("click", function() {
    var inputString = input.innerHTML;
    var numbers = inputString.split(/\+|\-|\×|\÷/g);
    var operators = inputString.replace(/[0-9]|\./g, "").split("");
    console.log(inputString);
    console.log(operators);
    console.log(numbers);
    console.log("----------------------------");
    var divide = operators.indexOf("÷");
    while (divide != -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf("÷");
    }

    var multiply = operators.indexOf("×");
    while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("×");
    }

    var subtract = operators.indexOf("-");
    while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf("-");
    }

    var add = operators.indexOf("+");
    while (add != -1) {
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add = operators.indexOf("+");
    }

    input.innerHTML = numbers[0];
    resultDisplayed = true;
});
clear.addEventListener("click", function() {
        input.innerHTML = "";
    })
    // Calculator End

// Basket calculator Start


let currentTotal = 0;
let buffer = "0";

let previousOperator = null;

const calcScreen = document.querySelector(".calc-numbers");

document.querySelector('.calculator-buttons').addEventListener("click", function(event) {

    buttonClick(event.target.innerHTML);
});

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    rerenderScreen();
}

function handleSymbol(value) {
    switch (value) {
        case "C":
            buffer = "0";
            currentTotal = 0;
            previousOperator = null;
            break;
        case "=":
            if (previousOperator === null) { //this would mean that there is nothing to be calculated yet
                return;
            }
            flushOperation(parseInt(buffer));
            buffer = "" + currentTotal;
            previousOperator = null;
            currentTotal = 0;
            break;
        case "←":
            if (buffer.length === 1) { //if the screen is any single number, always turn it to 0 when deleting
                buffer = "0";
            } else {
                buffer = buffer.substring(0, buffer.length - 1); //delete the numbers one by one
            }
            break;
        default:
            handleMath(value);
            break;
    }
}

function handleNumber(value) {
    if (buffer === "0") {
        buffer = value;
    } else {
        buffer += value;
    }
}

function handleMath(value) {
    const internalBuffer = parseInt(buffer);

    if (currentTotal === 0) {
        currentTotal = internalBuffer;
    } else {
        flushOperation(internalBuffer);
    }

    previousOperator = value;

    buffer = "0";
}

function flushOperation(internalBuffer) {
    if (previousOperator === "+") {
        currentTotal += internalBuffer;
    } else if (previousOperator === "-") {
        currentTotal -= internalBuffer;
    } else if (previousOperator === "x") {
        currentTotal *= internalBuffer;
    } else {
        currentTotal /= internalBuffer;
    }
}

function rerenderScreen() {
    calcScreen.value = buffer;
}
// Basket Calculatro end


// Product calculator Start


let currentTotall = 0;
let bufferr = "0";

let previousOperatorr = null;

const calcScreenn = document.querySelector(".calc-numberss");

document.querySelector('.calculator-buttonss').addEventListener("click", function(event) {

    buttonClickk(event.target.innerHTML);
});

function buttonClickk(value) {
    if (isNaN(parseInt(value))) {
        handleSymboll(value);
    } else {
        handleNumberr(value);
    }
    rerenderScreenn();
}

function handleSymboll(value) {
    switch (value) {
        case "C":
            bufferr = "0";
            currentTotall = 0;
            previousOperatorr = null;
            break;
        case "=":
            if (previousOperator === null) { //this would mean that there is nothing to be calculated yet
                return;
            }
            flushOperationn(parseInt(buffer));
            bufferr = "" + currentTotal;
            previousOperatorr = null;
            currentTotall = 0;
            break;
        case "←":
            if (bufferr.length === 1) { //if the screen is any single number, always turn it to 0 when deleting
                bufferr = "0";
            } else {
                bufferr = bufferr.substring(0, bufferr.length - 1); //delete the numbers one by one
            }
            break;
        default:
            handleMathh(value);
            break;
    }
}

function handleNumberr(value) {
    if (bufferr === "0") {
        bufferr = value;
    } else {
        bufferr += value;
    }
}

function handleMathh(value) {
    const internalBufferr = parseInt(bufferr);

    if (currentTotall === 0) {
        currentTotall = internalBufferr;
    } else {
        flushOperationn(internalBufferr);
    }

    previousOperatorr = value;

    bufferr = "0";
}

function flushOperationn(internalBufferr) {
    if (previousOperatorr === "+") {
        currentTotall += internalBufferr;
    } else if (previousOperatorr === "-") {
        currentTotall -= internalBufferr;
    } else if (previousOperatorr === "x") {
        currentTotall *= internalBufferr;
    } else {
        currentTotall /= internalBufferr;
    }
}

function rerenderScreenn() {
    calcScreenn.value = bufferr;
}
// Product Calculatro end


// Calculator Discount Start


let currentTotalld = 0;
let bufferrd = "0";

let previousOperatorrd = null;

const calcScreennd = document.querySelector(".calc-discount");

document.querySelector('.calculator-buttons-discount').addEventListener("click", function(event) {

    buttonClickkd(event.target.innerHTML);
});

function buttonClickkd(value) {
    if (isNaN(parseInt(value))) {
        handleSymbolld(value);
    } else {
        handleNumberrd(value);
    }
    rerenderScreennd();
}

function handleSymbolld(value) {
    switch (value) {
        case "C":
            bufferrd = "0";
            currentTotalld = 0;
            previousOperatorrd = null;
            break;
        case "=":
            if (previousOperatorrd === null) { //this would mean that there is nothing to be calculated yet
                return;
            }
            flushOperationnd(parseInt(buffer));
            bufferrd = "" + currentTotalld;
            previousOperatorrd = null;
            currentTotalld = 0;
            break;
        case "←":
            if (bufferrd.length === 1) { //if the screen is any single number, always turn it to 0 when deleting
                bufferrd = "0";
            } else {
                bufferrd = bufferrd.substring(0, bufferrd.length - 1); //delete the numbers one by one
            }
            break;
        default:
            handleMathhd(value);
            break;
    }
}

function handleNumberrd(value) {
    if (bufferrd === "0") {
        bufferrd = value;
    } else {
        bufferrd += value;
    }
}

function handleMathhd(value) {
    const internalBufferrd = parseInt(bufferrd);

    if (currentTotalld === 0) {
        currentTotalld = internalBufferrd;
    } else {
        flushOperationnd(internalBufferrd);
    }

    previousOperatorrd = value;

    bufferrd = "0";
}

function flushOperationnd(internalBufferrd) {
    if (previousOperatorrd === "+") {
        currentTotalld += internalBufferrd;
    } else if (previousOperatorr === "-") {
        currentTotalld -= internalBufferrd;
    } else if (previousOperatorrd === "x") {
        currentTotalld *= internalBufferrd;
    } else {
        currentTotalld /= internalBufferrd;
    }
}

function rerenderScreennd() {
    calcScreennd.value = bufferrd;
}
// Calculator Discount end




//Total-Price Calculator start


let currentTotalll = 0;
let bufferrr = "0";

let previousOperatorrr = null;

const calcScreennn = document.querySelector(".calc-numbersss");

document.querySelector('.calculator-buttonsss').addEventListener("click", function(event) {

    buttonClickkk(event.target.innerHTML);
});

function buttonClickkk(value) {
    if (isNaN(parseInt(value))) {
        handleSymbolll(value);
    } else {
        handleNumberrr(value);
    }
    rerenderScreennn();
}

function handleSymbolll(value) {
    switch (value) {
        case "C":
            bufferrr = "0";
            currentTotalll = 0;
            previousOperatorrr = null;
            break;
        case "=":
            if (previousOperatorrr === null) { //this would mean that there is nothing to be calculated yet
                return;
            }
            flushOperationn(parseInt(bufferrr));
            bufferrr = "" + currentTotalll;
            previousOperatorrr = null;
            currentTotalll = 0;
            break;
        case "←":
            if (bufferrr.length === 1) { //if the screen is any single number, always turn it to 0 when deleting
                bufferrr = "0";
            } else {
                bufferrr = bufferrr.substring(0, bufferrr.length - 1); //delete the numbers one by one
            }
            break;
        default:
            handleMathhh(value);
            break;
    }
}

function handleNumberrr(value) {
    if (bufferrr === "0") {
        bufferrr = value;
    } else {
        bufferrr += value;
    }
}

function handleMathhh(value) {
    const internalBufferrr = parseInt(bufferr);

    if (currentTotalll === 0) {
        currentTotalll = internalBufferrr;
    } else {
        flushOperationnn(internalBufferrr);
    }

    previousOperatorrr = value;

    bufferrr = "0";
}

function flushOperationnn(internalBufferrr) {
    if (previousOperatorrr === "+") {
        currentTotalll += internalBufferrr;
    } else if (previousOperatorrr === "-") {
        currentTotalll -= internalBufferrr;
    } else if (previousOperatorrr === "x") {
        currentTotalll *= internalBufferrr;
    } else {
        currentTotalll /= internalBufferrr;
    }
}

function rerenderScreennn() {
    calcScreennn.value = bufferrr;
}
// Total-price Calculatro end   

//   Plus Minus Input start
$(document).ready(function() {
    $('.minus').click(function() {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function() {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});
//   Plus Minus Input end





//function for radio buttons

function addCheckAttribute() {
    let val = 0;
    $("input[name='radio-price']").click(function() {
        let prevVal = val;
        val = $("input[name='radio-price']:checked").val();
        if (val !== prevVal) {
            $(this).attr('checked', true);
            $(`input[value=${prevVal}]`).attr('checked', false);
        }
    });
};
$(document).ready(function() {
    addCheckAttribute();
});


function addCheckAttribute() {
    let val = 0;
    $("input[name='radio-price']").click(function() {
        let prevVal = val;
        val = $("input[name='radio-price-add']:checked").val();
        if (val !== prevVal) {
            $(this).attr('checked', true);
            $(`input[value=${prevVal}]`).attr('checked', false);
        }
    });
};
$(document).ready(function() {
    addCheckAttribute();
});
//function for radio buttons

// Payment Start
$(document).ready(function() {
    $('input').click(function() {
        $('input:not(:checked)').parent().removeClass("checked");
        $('input:checked').parent().addClass("checked");
    });
});
//Payment end

//   Print  btn
$('.print-btn').click(function() {
    window.print();
    return false;
});
// Print-btn