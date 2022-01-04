let op1,
    op2,
    opr,
    perform,
    flag = true;
dot = true;

function btnpress(val) {
    if (flag !== true) {
        console.log(flag);
        btnClear();
    }
    console.log("press:" + flag);
    opr = document.getElementById("ans").innerHTML;

    if (val === "." && dot !== false) {
        opr = opr + val;
        dot = false;
    } else if (val === "." && dot === false) {
    } else {
        if (parseInt(opr) === 0 && dot !== false) {
            opr = val;
        } else {
            opr = opr + val;
        }
    }
    console.log(opr);
    document.getElementById("ans").innerHTML = opr;
}

function btnOpration(opration) {
    perform = opration;
    dot = true;
    op1 = document.getElementById("ans").innerHTML;
    document.getElementById("ans").innerHTML = 0;
}

function getAns() {
    flag = false;
    op2 = document.getElementById("ans").innerHTML;
    let ans;
    switch (perform) {
        case "+":
            ans = (parseFloat(op1) + parseFloat(op2)).toFixed(2);
            document.getElementById("ans").innerHTML = ans;
            break;
        case "-":
            ans = (parseFloat(op1) - parseFloat(op2)).toFixed(2);
            document.getElementById("ans").innerHTML = ans;
            break;
        case "*":
            ans = (parseFloat(op1) * parseFloat(op2)).toFixed(2);
            document.getElementById("ans").innerHTML = ans;
            break;
        case "/":
            ans = (parseFloat(op1) / parseFloat(op2)).toFixed(2);
            document.getElementById("ans").innerHTML = ans;
            break;

        case "mod":
            ans = parseInt(op1) % parseInt(op2);
            document.getElementById("ans").innerHTML = ans;
            break;
        case "xtopowy":
            ans = xTopowY();
            document.getElementById("ans").innerHTML = ans;
            break;

    }
    op1 = 0;
    op2 = 0;
    perform = "";
    console.log("ans:" + flag);
}

function btnClear() {
    document.getElementById("ans").innerHTML = 0;
    flag = true;
    dot = true;
}


function btnDel() {
    document.getElementById("ans").innerHTML = document
        .getElementById("ans")
        .innerHTML.slice(0, -1);
    if (document.getElementById("ans").innerHTML === "") {
        document.getElementById("ans").innerHTML = 0;
    }
}

function btnAbs() {
    document.getElementById("ans").innerHTML = Math.abs(
        document.getElementById("ans").innerHTML
    );
}

function btnchangesign() {
    let ans = document.getElementById("ans").innerHTML;
    ans[0] === "-"
        ? (document.getElementById("ans").innerHTML = Math.abs(ans))
        : (document.getElementById("ans").innerHTML = "-" + ans);
}

function btnFactorial() {
    let val = document.getElementById("ans").innerHTML;
    let ans = 1;
    if (val == 0 || val == 1) {
        document.getElementById("ans").innerHTML = 1;
    } else {
        for (var i = val; i >= 1; i--) {
            ans *= i;
        }
        document.getElementById("ans").innerHTML = ans;
    }
}

function btnPie() {
    console.log(ans)
    document.getElementById("ans").innerHTML = (Math.PI) * (parseFloat(document.getElementById("ans").innerHTML))
}
/*     enter the number and then click the log,ln,e,exp button    */
function btnLog() {
    document.getElementById("ans").innerHTML = Math.log10(
        parseFloat(document.getElementById("ans").innerHTML)
    );
}

function btnLn() {
    document.getElementById("ans").innerHTML = Math.log(parseFloat(document.getElementById("ans").innerHTML))
}
function btnE() {
    document.getElementById("ans").innerHTML = (Math.E) * (parseFloat(document.getElementById("ans").innerHTML))
}

function btnExp() {
    document.getElementById("ans").innerHTML = Math.exp(parseInt(document.getElementById("ans").innerHTML))
}

function btnPower() {
    document.getElementById("ans").innerHTML = Math.pow(parseFloat(document.getElementById("ans").innerHTML), 2)
}
function btnInverse() {
    document.getElementById("ans").innerHTML = Math.pow(parseFloat(document.getElementById("ans").innerHTML), -1)

}
function btnPow10() {
    document.getElementById("ans").innerHTML = Math.pow(10, parseFloat(document.getElementById("ans").innerHTML))
}
function btnSqrt() {
    document.getElementById("ans").innerHTML = Math.sqrt(parseFloat(document.getElementById("ans").innerHTML))
}
function xTopowY() {

    return Math.pow(parseFloat(op1), parseInt(op2));
}
function Trigo() {
    var select = document.getElementById('fn');
    var text = select.options[select.selectedIndex].text;
    console.log(text);
    if (text === "Sin") {
        document.getElementById("ans").innerHTML = Math.sin(parseFloat(document.getElementById("ans").innerHTML))
    }
    else if (text === "Cos") {
        document.getElementById("ans").innerHTML = Math.cos(parseFloat(document.getElementById("ans").innerHTML))
    }
    else if (text === "Tan") {
        document.getElementById("ans").innerHTML = Math.tan(parseFloat(document.getElementById("ans").innerHTML))
    }
    else if (text === "Sinh") {
        document.getElementById("ans").innerHTML = Math.sinh(parseFloat(document.getElementById("ans").innerHTML))
    }
    else if (text === "Cosh") {
        document.getElementById("ans").innerHTML = Math.cosh(parseFloat(document.getElementById("ans").innerHTML))
    }
    else if (text === "Tanh") {
        document.getElementById("ans").innerHTML = Math.tanh(parseFloat(document.getElementById("ans").innerHTML))
    }


}
/* enter the value and select the function it directly gives values*/
function Fun() {
    var select = document.getElementById("fun");
    var text = select.options[select.selectedIndex].text;
    if (text === "Trunc") {
        document.getElementById("ans").innerHTML = Math.trunc(parseFloat(document.getElementById("ans").innerHTML))
    }
    else if (text === "Ceil") {
        document.getElementById("ans").innerHTML = Math.ceil(parseFloat(document.getElementById("ans").innerHTML))
    }
    else if (text === "Floor") {
        document.getElementById("ans").innerHTML = Math.floor(parseFloat(document.getElementById("ans").innerHTML))
    }
    else if (text === "Round") {
        document.getElementById("ans").innerHTML = Math.round(parseFloat(document.getElementById("ans").innerHTML))
    }


}
function btnMC() {


}
function btnMR() {

}
function btnMP() {

}
function btnMM() {

}
function btnMS() {

}
/* enter the value and click on button to convert value to degree or vice versa*/
function btnDeg() {
    let a = document.getElementById("dtor").innerHTML;
    if (a === "DEG") {
        let rad = document.getElementById("ans").innerHTML;
        let degr = (rad * 180) / Math.PI;
        document.getElementById("ans").innerHTML = degr;
        document.getElementById("dtor").innerHTML = "RND";
    }
    else {
        let degr = document.getElementById("ans").innerHTML;
        let rad = (degr * Math.PI) / 180;
        document.getElementById("ans").innerHTML = rad;
        document.getElementById("dtor").innerHTML = "DEG";

    }


}
function btnFE() {
    ans = parseFloat(document.getElementById("ans").innerHTML).toExponential();
    document.getElementById("ans").innerHTML = ans;
}