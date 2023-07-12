/* ------------------------------ 1 ------------------------------ */
/* Sum of Two Number */
const SUM_SUBMIT_BTN = document.getElementById("sum_submit");
SUM_SUBMIT_BTN.addEventListener("click", (ev) => {
    const SUM_FIRST_NUM = document.getElementById("sum_first_number").value == "" ? null : Number(document.getElementById("sum_first_number").value);
    const SUM_SECOND_NUM = document.getElementById("sum_second_number").value == "" ? null : Number(document.getElementById("sum_second_number").value);
    const SUM_RESULT_DIV = document.getElementById("sum_result");
    if (SUM_FIRST_NUM != null && SUM_SECOND_NUM != null) {
        SUM_RESULT_DIV.style.color = "green";
        SUM_RESULT_DIV.innerHTML = `Result: ${SUM_FIRST_NUM} + ${SUM_SECOND_NUM} = ${SUM_FIRST_NUM + SUM_SECOND_NUM}`;
    }
    else {
        SUM_RESULT_DIV.style.color = "red";
        SUM_RESULT_DIV.innerHTML = `Empty Input Fields or Invalid Data`;
    }
});

/* ------------------------------ 2 ------------------------------ */
/* C = r x 2 x 3,14 */
const CIRCLE_CIRCUMFERENCE_SUBMIT_BTN = document.getElementById("circle_circumference_submit");
CIRCLE_CIRCUMFERENCE_SUBMIT_BTN.addEventListener("click", (ev) => {
    const RADIUS_NUMBER = document.getElementById("radius_number").value == "" ? null : Number(document.getElementById("radius_number").value);
    const CIRCLE_CIRCUMFERENCE_RESULT_DIV = document.getElementById("circle_circumference_result");
    if (RADIUS_NUMBER != null && RADIUS_NUMBER > 0) {
        CIRCLE_CIRCUMFERENCE_RESULT_DIV.style.color = "green";
        CIRCLE_CIRCUMFERENCE_RESULT_DIV.innerHTML = `Result: ${(RADIUS_NUMBER * 2) * Math.PI}`;
    }
    else if (RADIUS_NUMBER != null && RADIUS_NUMBER <= 0) {
        CIRCLE_CIRCUMFERENCE_RESULT_DIV.style.color = "red";
        CIRCLE_CIRCUMFERENCE_RESULT_DIV.innerHTML = `Invalid Data: R must be (> 0)`;
    }
    else {
        CIRCLE_CIRCUMFERENCE_RESULT_DIV.style.color = "red";
        CIRCLE_CIRCUMFERENCE_RESULT_DIV.innerHTML = `Empty Input Field or Invalid Data`;
    }
});

/* ------------------------------ 3 ------------------------------ */
/* If number % 2 = 0 => even, otherwise odd */
const PARITY_CHECKING_SUBMIT_BTN = document.getElementById("parity_checking_submit");
PARITY_CHECKING_SUBMIT_BTN.addEventListener("click", (ev) => {
    const PARITY_NUMBER = document.getElementById("parity_number").value == "" ? null : Number(document.getElementById("parity_number").value);
    const PARITY_CHECKING_RESULT_DIV = document.getElementById("parity_checking_result");

    if (PARITY_NUMBER != null) {
        if (PARITY_NUMBER % 2 == 0) {
            PARITY_CHECKING_RESULT_DIV.style.color = "green";
            PARITY_CHECKING_RESULT_DIV.innerHTML = `Result: ${PARITY_NUMBER} is even number`;
        }
        else {
            PARITY_CHECKING_RESULT_DIV.style.color = "green";
            PARITY_CHECKING_RESULT_DIV.innerHTML = `Result: ${PARITY_NUMBER} is odd number`;
        }
    }
    else {
        PARITY_CHECKING_RESULT_DIV.style.color = "red";
        PARITY_CHECKING_RESULT_DIV.innerHTML = `Empty Input Field or Invalid Data`;
    }
});

/* ------------------------------ 4 ------------------------------ */
/* Concatenate String */
const CONCAT_STRING_SUBMIT_BTN = document.getElementById("concat_string_submit");
CONCAT_STRING_SUBMIT_BTN.addEventListener("click", (ev) => {
    const CONCAT_FIRST_STRING = String(document.getElementById("concat_first_string").value).trim();
    const CONCAT_SECOND_STRING = String(document.getElementById("concat_second_string").value).trim();
    const CONCAT_STRING_RESULT_DIV = document.getElementById("concat_string_result");
    if (CONCAT_FIRST_STRING != "" && CONCAT_SECOND_STRING != "") {
        CONCAT_STRING_RESULT_DIV.style.color = "green";
        CONCAT_STRING_RESULT_DIV.innerHTML = `Result: ${CONCAT_FIRST_STRING} ${CONCAT_SECOND_STRING}`;
    }
    else {
        CONCAT_STRING_RESULT_DIV.style.color = "red";
        CONCAT_STRING_RESULT_DIV.innerHTML = `Empty Input Fields or Invalid Data`;
    }
});

/* ------------------------------ 5 ------------------------------ */
/* One Word Contain Check */
const ONE_WORD_STRING_SUBMIT_BTN = document.getElementById("one_word_string_submit");
ONE_WORD_STRING_SUBMIT_BTN.addEventListener("click", (ev) => {
    const ONE_WORD_STRING = String(document.getElementById("one_word_string").value).trim();
    const ONE_WORD_STRING_RESULT_DIV = document.getElementById("one_word_string_result");
    if (ONE_WORD_STRING != "" && ONE_WORD_STRING.indexOf(' ') == -1) {
        ONE_WORD_STRING_RESULT_DIV.style.color = "green";
        ONE_WORD_STRING_RESULT_DIV.innerHTML = `Result: ${ONE_WORD_STRING} (is one word)`;
    }
    else if (ONE_WORD_STRING != "" && ONE_WORD_STRING.indexOf(' ') >= 0) {
        ONE_WORD_STRING_RESULT_DIV.style.color = "darkorange";
        ONE_WORD_STRING_RESULT_DIV.innerHTML = `Result: ${ONE_WORD_STRING} (is a paragraph)`;
    }
    else {
        ONE_WORD_STRING_RESULT_DIV.style.color = "red";
        ONE_WORD_STRING_RESULT_DIV.innerHTML = `Empty Input Field or Invalid Data`;
    }
});

/* ------------------------------ 6 ------------------------------ */
/* Empty String Check */
const EMPTY_STRING_SUBMIT_BTN = document.getElementById("empty_string_submit");
EMPTY_STRING_SUBMIT_BTN.addEventListener("click", (ev) => {
    const EMPTY_STRING_VALUE = String(document.getElementById("empty_string").value).trim();
    const EMPTY_STRING_RESULT_DIV = document.getElementById("empty_string_result");
    if (EMPTY_STRING_VALUE != "") {
        EMPTY_STRING_RESULT_DIV.style.color = "red";
        EMPTY_STRING_RESULT_DIV.innerHTML = `Result: ${EMPTY_STRING_VALUE} is not an empty string`;
    }
    else {
        EMPTY_STRING_RESULT_DIV.style.color = "green";
        EMPTY_STRING_RESULT_DIV.innerHTML = `Empty Input Field`;
    }
});

/* ------------------------------ 7 ------------------------------ */
/* Positive, Negative Number Check */
const POSITIVE_NEGATIVE_NUMBER_SUBMIT_BTN = document.getElementById("positive_negative_number_submit");
POSITIVE_NEGATIVE_NUMBER_SUBMIT_BTN.addEventListener("click", (ev) => {
    const POSITIVE_NEGATIVE_NUMBER = document.getElementById("positive_negative_number").value == "" ? null : Number(document.getElementById("positive_negative_number").value);
    const POSITIVE_NEGATIVE_NUMBER_RESULT_DIV = document.getElementById("positive_negative_number_result");

    if (POSITIVE_NEGATIVE_NUMBER != null && POSITIVE_NEGATIVE_NUMBER > 0) {
        POSITIVE_NEGATIVE_NUMBER_RESULT_DIV.style.color = "green";
        POSITIVE_NEGATIVE_NUMBER_RESULT_DIV.innerHTML = `Result: ${POSITIVE_NEGATIVE_NUMBER} is a positive number`;
    }
    else if (POSITIVE_NEGATIVE_NUMBER != null && POSITIVE_NEGATIVE_NUMBER == 0) {
        POSITIVE_NEGATIVE_NUMBER_RESULT_DIV.style.color = "darkorange";
        POSITIVE_NEGATIVE_NUMBER_RESULT_DIV.innerHTML = `Result: ${POSITIVE_NEGATIVE_NUMBER} is a neutral number`;
    }
    else if (POSITIVE_NEGATIVE_NUMBER != null && POSITIVE_NEGATIVE_NUMBER < 0) {
        POSITIVE_NEGATIVE_NUMBER_RESULT_DIV.style.color = "green";
        POSITIVE_NEGATIVE_NUMBER_RESULT_DIV.innerHTML = `Result: ${POSITIVE_NEGATIVE_NUMBER} is a negative number`;
    }
    else {
        POSITIVE_NEGATIVE_NUMBER_RESULT_DIV.style.color = "red";
        POSITIVE_NEGATIVE_NUMBER_RESULT_DIV.innerHTML = `Empty Input Field or Invalid Data`;
    }
});

/* ------------------------------ 8 ------------------------------ */
/* Sum, Subtraction, Multiplication, Divide Calculator */
const COMPOSITE_CALCULATION_NUMBER_SUBMIT_BTN = document.getElementById("composite_calculation_number_submit");
COMPOSITE_CALCULATION_NUMBER_SUBMIT_BTN.addEventListener("click", (ev) => {
    const COMPOSITE_CALCULATION_FIRST_NUMBER = document.getElementById("composite_calculation_first_number").value == "" ? null : Number(document.getElementById("composite_calculation_first_number").value);
    const COMPOSITE_CALCULATION_SECOND_NUMBER = document.getElementById("composite_calculation_second_number").value == "" ? null : Number(document.getElementById("composite_calculation_second_number").value);
    const COMPOSITE_CALCULATION_NUMBER_RESULT_DIV = document.getElementById("composite_calculation_number_result");

    if (COMPOSITE_CALCULATION_FIRST_NUMBER != null && COMPOSITE_CALCULATION_SECOND_NUMBER != null) {
        COMPOSITE_CALCULATION_NUMBER_RESULT_DIV.style.color = "green";
        COMPOSITE_CALCULATION_NUMBER_RESULT_DIV.innerHTML = 
        `
            <div>${COMPOSITE_CALCULATION_FIRST_NUMBER} + ${COMPOSITE_CALCULATION_SECOND_NUMBER} = ${COMPOSITE_CALCULATION_FIRST_NUMBER + COMPOSITE_CALCULATION_SECOND_NUMBER}</div>
            <div>${COMPOSITE_CALCULATION_FIRST_NUMBER} - ${COMPOSITE_CALCULATION_SECOND_NUMBER} = ${COMPOSITE_CALCULATION_FIRST_NUMBER - COMPOSITE_CALCULATION_SECOND_NUMBER}</div>
            <div>${COMPOSITE_CALCULATION_FIRST_NUMBER} * ${COMPOSITE_CALCULATION_SECOND_NUMBER} = ${COMPOSITE_CALCULATION_FIRST_NUMBER * COMPOSITE_CALCULATION_SECOND_NUMBER}</div>
            <div>${COMPOSITE_CALCULATION_FIRST_NUMBER} / ${COMPOSITE_CALCULATION_SECOND_NUMBER} = ${COMPOSITE_CALCULATION_FIRST_NUMBER / COMPOSITE_CALCULATION_SECOND_NUMBER}</div>
        `;
    }
    else {
        COMPOSITE_CALCULATION_NUMBER_RESULT_DIV.style.color = "red";
        COMPOSITE_CALCULATION_NUMBER_RESULT_DIV.innerHTML = `Empty Input Fields or Invalid Data`;
    }
});
