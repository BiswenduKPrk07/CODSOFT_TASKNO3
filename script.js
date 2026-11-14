
const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;

        if (!/^[0-9+\-*/%.() ]+$/.test(expression)) {
            display.value = "Error";
            return;
        }

        let result = Function('"use strict"; return (' + expression + ')')();

        if (!Number.isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = Number(result.toFixed(10)).toString();
        }
    } catch {
        display.value = "Error";
    }
}
