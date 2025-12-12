function aufgabe1() {
    window.location.href = "aufgabe1-1.html";
}

function aufgabe2() {
    window.location.href = "aufgabe1-2.html";
}

function aufgabe3() {
    window.location.href = "aufgabe1-3.html";

}

function aufgabe4() {
    window.location.href = "aufgabe1-2.html";
}

//........... aufgabe 1-1 .................
function check() {
    let inputvalue = document.getElementById("num1").value;
    const myresult = document.getElementById("result");

    if (inputvalue === "") {
        myresult.innerText = "";
        myresult.innerText = "Enter a number";
        return;
    }

    let num = Number(inputvalue);

    if ((num % 2) === 0) {
        myresult.innerText = "number is Even";

    } else {
        myresult.innerText = "number is Odd";
    }
}


/* function check() {
    let inputvalue = document.getElementById("num1").value;
    document.getElementById("result").innerText = inputvalue === "" ? "Enter a number"
        : Number(inputvalue) === 0 ? "number is Zero"
            : (Number(inputvalue) % 2) === 0 ? "number is Even"
                : "number is Odd";


} */
//........... aufgabe 1-2 .................

function calculate() {
    let inputvalue2 = document.getElementById("num2").value;
    let resultsum = 0;
    if (inputvalue2 === "") {
        document.getElementById("resultsum").innerText = "";
        document.getElementById("resultsum").innerText = "Enter a number";
        return;
    }
    if (Number(inputvalue2) >= 0) {
        for (let i = 0; i <= Number(inputvalue2); i++) {
            resultsum += i;
        }
    } else {
        for (let i = 0; i >= Number(inputvalue2); i--) {
            resultsum += i;
        }
    }
    document.getElementById("resultsum").innerText = resultsum;


}

//........... aufgabe 1-3 .................
function StartDrawing() {

    let inputvalue3 = document.getElementById("num3").value;
    let num3 = Number(inputvalue3);
    let resultstar = "";
    for (let i = 0; i <= num3; i++) {
        let star = "";
        for (let j = 0; j < i; j++) {
            star += "*";
        }
        resultstar += star + "<br>"
    }
    document.getElementById("resultstar").innerHTML = resultstar;
}

//........... aufgabe 1-4 .................
function CheckDivisibility() {
    let arry = [];
    let count = 0;
    for (let i = 0; i <= 100; i++) {
        if (i % 3 !== 0 && i % 7 !== 0) {
            count += 1;
            arry.push(i);
        }
    }
    document.getElementById("resultDivisibility").innerText =
        "Count: " + count + "\nNumbers: " + arry.join(", ");
}

function myclear() {
    document.getElementById("resultDivisibility").innerText = "";
}