/* ------------------------------ 1 ------------------------------ */
/* Sum of Two Number */
const sumSubmitBtn = document.getElementById("sum_submit");
sumSubmitBtn.addEventListener("click", (ev) => {
    const sumFirstNum = document.getElementById("sum_first_number").value == "" ? null : Number(document.getElementById("sum_first_number").value);
    const sumSecondNum = document.getElementById("sum_second_number").value == "" ? null : Number(document.getElementById("sum_second_number").value);
    const sumResultDiv = document.getElementById("sum_result");
    if (sumFirstNum != null && sumSecondNum != null) {
        sumResultDiv.style.color = "green";
        sumResultDiv.innerHTML = `Result: ${sumFirstNum} + ${sumSecondNum} = ${sumFirstNum + sumSecondNum}`;
    }
    else {
        sumResultDiv.style.color = "red";
        sumResultDiv.innerHTML = `Empty Input Fields or Invalid Data`;
    }
});

/* ------------------------------ 2 ------------------------------ */
/* C = r x 2 x 3,14 */
const circleCircumferenceSubmitBtn = document.getElementById("circle_circumference_submit");
circleCircumferenceSubmitBtn.addEventListener("click", (ev) => {
    const radiusNumber = document.getElementById("radius_number").value == "" ? null : Number(document.getElementById("radius_number").value);
    const circleCircumferenceResultDiv = document.getElementById("circle_circumference_result");
    if (radiusNumber != null && radiusNumber > 0) {
        circleCircumferenceResultDiv.style.color = "green";
        circleCircumferenceResultDiv.innerHTML = `Result: ${(radiusNumber * 2) * Math.PI}`;
    }
    else if (radiusNumber != null && radiusNumber <= 0) {
        circleCircumferenceResultDiv.style.color = "red";
        circleCircumferenceResultDiv.innerHTML = `Invalid Data: R must be (> 0)`;
    }
    else {
        circleCircumferenceResultDiv.style.color = "red";
        circleCircumferenceResultDiv.innerHTML = `Empty Input Field or Invalid Data`;
    }
});

/* ------------------------------ 3 ------------------------------ */
/* If number % 2 = 0 => even, otherwise odd */
const parityCheckingSubmitBtn = document.getElementById("parity_checking_submit");
parityCheckingSubmitBtn.addEventListener("click", (ev) => {
    const parityNumber = document.getElementById("parity_number").value == "" ? null : Number(document.getElementById("parity_number").value);
    const parityCheckingResultDiv = document.getElementById("parity_checking_result");

    if (parityNumber != null) {
        if (parityNumber % 2 == 0) {
            parityCheckingResultDiv.style.color = "green";
            parityCheckingResultDiv.innerHTML = `Result: ${parityNumber} is even number`;
        }
        else {
            parityCheckingResultDiv.style.color = "green";
            parityCheckingResultDiv.innerHTML = `Result: ${parityNumber} is odd number`;
        }
    }
    else {
        parityCheckingResultDiv.style.color = "red";
        parityCheckingResultDiv.innerHTML = `Empty Input Field or Invalid Data`;
    }
});

/* ------------------------------ 4 ------------------------------ */
/* Concatenate String */
const concatStringSubmitBtn = document.getElementById("concat_string_submit");
concatStringSubmitBtn.addEventListener("click", (ev) => {
    const concatFirstString = String(document.getElementById("concat_first_string").value).trim();
    const concatSecondString = String(document.getElementById("concat_second_string").value).trim();
    const concatStringResultDiv = document.getElementById("concat_string_result");
    if (concatFirstString != "" && concatSecondString != "") {
        concatStringResultDiv.style.color = "green";
        concatStringResultDiv.innerHTML = `Result: ${concatFirstString} ${concatSecondString}`;
    }
    else {
        concatStringResultDiv.style.color = "red";
        concatStringResultDiv.innerHTML = `Empty Input Fields or Invalid Data`;
    }
});

/* ------------------------------ 5 ------------------------------ */
/* One Word Contain Check */
const oneWOrdStringSubmitBtn = document.getElementById("one_word_string_submit");
oneWOrdStringSubmitBtn.addEventListener("click", (ev) => {
    const oneWordString = String(document.getElementById("one_word_string").value).trim();
    const oneWordStringResultDiv = document.getElementById("one_word_string_result");
    if (oneWordString != "" && oneWordString.indexOf(' ') == -1) {
        oneWordStringResultDiv.style.color = "green";
        oneWordStringResultDiv.innerHTML = `Result: ${oneWordString} (is one word)`;
    }
    else if (oneWordString != "" && oneWordString.indexOf(' ') >= 0) {
        oneWordStringResultDiv.style.color = "darkorange";
        oneWordStringResultDiv.innerHTML = `Result: ${oneWordString} (is a paragraph)`;
    }
    else {
        oneWordStringResultDiv.style.color = "red";
        oneWordStringResultDiv.innerHTML = `Empty Input Field or Invalid Data`;
    }
});

/* ------------------------------ 6 ------------------------------ */
/* Empty String Check */
const emptyStringSubmitBtn = document.getElementById("empty_string_submit");
emptyStringSubmitBtn.addEventListener("click", (ev) => {
    const emptyStringValue = String(document.getElementById("empty_string").value).trim();
    const emptyStringResultDiv = document.getElementById("empty_string_result");
    if (emptyStringValue != "") {
        emptyStringResultDiv.style.color = "red";
        emptyStringResultDiv.innerHTML = `Result: ${emptyStringValue} is not an empty string`;
    }
    else {
        emptyStringResultDiv.style.color = "green";
        emptyStringResultDiv.innerHTML = `Empty Input Field`;
    }
});

/* ------------------------------ 7 ------------------------------ */
/* Positive, Negative Number Check */
const positiveNegativeNumberSubmitBtn = document.getElementById("positive_negative_number_submit");
positiveNegativeNumberSubmitBtn.addEventListener("click", (ev) => {
    const positiveNegativeNumber = document.getElementById("positive_negative_number").value == "" ? null : Number(document.getElementById("positive_negative_number").value);
    const positiveNegativeNumberResultDiv = document.getElementById("positive_negative_number_result");

    if (positiveNegativeNumber != null && positiveNegativeNumber > 0) {
        positiveNegativeNumberResultDiv.style.color = "green";
        positiveNegativeNumberResultDiv.innerHTML = `Result: ${positiveNegativeNumber} is a positive number`;
    }
    else if (positiveNegativeNumber != null && positiveNegativeNumber == 0) {
        positiveNegativeNumberResultDiv.style.color = "darkorange";
        positiveNegativeNumberResultDiv.innerHTML = `Result: ${positiveNegativeNumber} is a neutral number`;
    }
    else if (positiveNegativeNumber != null && positiveNegativeNumber < 0) {
        positiveNegativeNumberResultDiv.style.color = "green";
        positiveNegativeNumberResultDiv.innerHTML = `Result: ${positiveNegativeNumber} is a negative number`;
    }
    else {
        positiveNegativeNumberResultDiv.style.color = "red";
        positiveNegativeNumberResultDiv.innerHTML = `Empty Input Field or Invalid Data`;
    }
});

/* ------------------------------ 8 ------------------------------ */
/* Sum, Subtraction, Multiplication, Divide Calculator */
const compositeCalculationNumberSubmitBtn = document.getElementById("composite_calculation_number_submit");
compositeCalculationNumberSubmitBtn.addEventListener("click", (ev) => {
    const compositeCalculationFirstNumber = document.getElementById("composite_calculation_first_number").value == "" ? null : Number(document.getElementById("composite_calculation_first_number").value);
    const compositeCalculationSecondNumber = document.getElementById("composite_calculation_second_number").value == "" ? null : Number(document.getElementById("composite_calculation_second_number").value);
    const compositeCalculationNumberResultDiv = document.getElementById("composite_calculation_number_result");

    if (compositeCalculationFirstNumber != null && compositeCalculationSecondNumber != null) {
        compositeCalculationNumberResultDiv.style.color = "green";
        compositeCalculationNumberResultDiv.innerHTML = 
        `
            <div>${compositeCalculationFirstNumber} + ${compositeCalculationSecondNumber} = ${compositeCalculationFirstNumber + compositeCalculationSecondNumber}</div>
            <div>${compositeCalculationFirstNumber} - ${compositeCalculationSecondNumber} = ${compositeCalculationFirstNumber - compositeCalculationSecondNumber}</div>
            <div>${compositeCalculationFirstNumber} * ${compositeCalculationSecondNumber} = ${compositeCalculationFirstNumber * compositeCalculationSecondNumber}</div>
            <div>${compositeCalculationFirstNumber} / ${compositeCalculationSecondNumber} = ${compositeCalculationFirstNumber / compositeCalculationSecondNumber}</div>
        `;
    }
    else {
        compositeCalculationNumberResultDiv.style.color = "red";
        compositeCalculationNumberResultDiv.innerHTML = `Empty Input Fields or Invalid Data`;
    }
});
