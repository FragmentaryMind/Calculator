let a = 0, op = "", b = 0, newInput = false;
displayScreen = document.querySelector('.display-screen');

function operate () {
    let pa = parseFloat(a); a = "";
    let pb = parseFloat(b); b = "";
    if (op == "/" && !pb) return "ERROR";
    switch (op) {
        case '/': pa = pa / pb; break;
        case '*': pa = pa * pb; break;
        case '-': pa = pa - pb; break;
        case '+': pa = pa + pb; break;
        default: return "ERROR";
    }
    op = "";
    a = parseFloat(pa.toFixed(3));
    return a;
}

function handleInput (input) {
    let dt = displayScreen.textContent;
    if (dt == "ERROR" && input != 'c') return;
    switch (input) {
        case 'c':
            a = b = 0; op = "";
            displayScreen.textContent = "0";
            break;
        case 'backspace':
            displayScreen.textContent = (dt.length <= 1) ? "0" : dt.slice(0, -1);
            break;
        case '/': case '*': case '-': case '+':
            if (op) if (!newInput) { b = dt; displayScreen.textContent = operate(); op = input; newInput = true; } else break;
            else { a = dt; op = input; newInput = true; }
            break;
        case '=':
            if (a && op) { if (!b) if (!newInput) b = dt; else break; displayScreen.textContent = operate(); newInput = true; }
            break;
        case '.':
            if (dt.length < 8 && dt.indexOf('.') == -1 || newInput)
                displayScreen.textContent = ((dt == "0" || newInput) ? "0" : dt) + input;
            if (newInput) newInput = false;
            break;
        case '0': case '1': case '2': case '3': case '4':
        case '5': case '6': case '7': case '8': case '9':
            if (dt.length < 8 || newInput) displayScreen.textContent = (dt == "0" || newInput) ? input : dt + input;
            if (newInput) newInput = false;
            break;
    }
}

calculator = document.querySelector('.calculator');
calculator.addEventListener('keydown', (event) => handleInput(event.key.toLowerCase()));
calculator.addEventListener('click', (event) => handleInput(event.target.dataset.key));