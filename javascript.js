displayScreen = document.querySelector('.display-screen');

function handleInput (input) {
    let dt = displayScreen.textContent;
    switch (input) {
        case 'c':
            displayScreen.textContent = "0";
            break;
        case 'backspace':
            displayScreen.textContent = (dt.length <= 1) ? "0" : dt.slice(0, -1);
            break;
        case '/':
        case '*':
        case '-':
        case '+':
        case '.':
        case '=':
            break;
        case '0': case '1': case '2': case '3': case '4':
        case '5': case '6': case '7': case '8': case '9':
            if (dt.length < 10)
                displayScreen.textContent = (dt == "0") ? input : dt + input;
            break;
    }
}

calculator = document.querySelector('.calculator');
calculator.addEventListener('keydown', (event) => handleInput(event.key.toLowerCase()));
calculator.addEventListener('click', (event) => handleInput(event.target.dataset.key));