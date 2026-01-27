const finalPassword = document.querySelector(".finalPassword");
// const genPass = document.getElementById("genPass");
const copyBtn = document.querySelector(".copyBtn");
const upperCheck = document.getElementById("upperCheck");
const lowerCheck = document.getElementById("lowerCheck");
const numberCheck = document.getElementById("numberCheck");
const symbolCheck = document.getElementById("symbolCheck");

// let a = Math.floor(Math.random() * (parseInt(passLen) - 1 + 1)) + 1;

let listUpper = [];
let listLower = [];
let listNumber = [];
let listSymbols = [];


for (let i = 65; i <= 90; i++) {
    listUpper += String.fromCharCode(i);
}
for (let i = 97; i <= 122; i++) {
    listLower += String.fromCharCode(i);
}
for (let i = 48; i <= 57; i++) {
    listNumber += String.fromCharCode(i);
}
for (let i = 33; i <= 47; i++) {
    listSymbols += String.fromCharCode(i);
}
for (let i = 58; i <= 64; i++) {
    listSymbols += String.fromCharCode(i);
}
for (let i = 91; i <= 96; i++) {
    listSymbols += String.fromCharCode(i);
}
for (let i = 123; i <= 126; i++) {
    listSymbols += String.fromCharCode(i);
}
console.log(listUpper.length);
console.log(listLower.length);
console.log(listNumber.length);
console.log(listSymbols.length);
console.log(listSymbols);


function genPassClick() {
    let listFinalPass = [];
    let c = 0;
    let passLen = parseInt(document.getElementById("passLen").value);
    for (let i = 1; i <= passLen; i++) {
        while (true && upperCheck.checked) {
            let randomU = Math.floor(Math.random() * 26);
            listFinalPass += [listUpper[randomU]];
            c++;
            break;
        }
        if (c === passLen) {
            break;
        }
        while (true && lowerCheck.checked) {
            let randomL = Math.floor(Math.random() * 26);
            listFinalPass += [listLower[randomL]];
            c++;
            break;
        }
        if (c === passLen) {
            break;
        }
        while (true && numberCheck.checked) {
            let randomN = Math.floor(Math.random() * 10);
            listFinalPass += [listNumber[randomN]];
            c++;
            break;
        }
        if (c === passLen) {
            break;
        }
        while (true && symbolCheck.checked) {
            let randomS = Math.floor(Math.random() * 32);
            if (listSymbols[randomS] !== " ") {
                listFinalPass += [listSymbols[randomS]];
                c++;
                break;
            } else {
                continue;
            }
            // listFinalPass += [listSymbols[randomS]!==" "?listSymbols[randomS]:continue];
        }
        if (c === passLen) {
            break;
        }
    }

    const name = listFinalPass;
    let charsArray = name.split("");
    charsArray.sort(() => Math.random() - 0.5);
    charsArray = charsArray.join("");
    finalPassword.innerText = charsArray;
    return charsArray;
}

function copyClick() {
    const password = finalPassword.innerText;

    if (password === "") {
        alert("No password to copy!");
        return;
    }

    navigator.clipboard.writeText(password)
        .then(() => {
            alert("Password copied to clipboard!");
        })
        .catch(() => {
            alert("Failed to copy password");
        });
}
