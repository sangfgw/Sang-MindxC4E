// Define DOM
const $$ = document.querySelectorAll.bind(document);

/* -------------------------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------- Exercise 1 ------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------------------------- */

// get dom Input
const domExercise1Input = $$("#exercise_1_form__input");
// get dom Result Div
const domExercise1ResultDiv = $$("#exercise_1_result");

domExercise1Input[0].addEventListener("change", (ev) => {
    // Input Value
    const exercise1InputValue = domExercise1Input[0].value !== "" ? Number(domExercise1Input[0].value) : undefined;

    if (exercise1InputValue !== undefined) {
        // Convert Number < 2
        domExercise1Input[0].value = convertNumLessThan(exercise1InputValue, 2);
    }
});

// dom Form
const domExercise1Form = $$("#exercise_1_form");
domExercise1Form[0].addEventListener("submit", (ev) => {
    ev.preventDefault();
    // Clear Inner Result Div
    domExercise1ResultDiv[0].innerHTML = "";
    domExercise1ResultDiv[0].style.color = "unset";

    // Input Value
    const exercise1InputValue = domExercise1Input[0].value !== "" ? Number(domExercise1Input[0].value) : undefined;
    if (exercise1InputValue !== undefined) {
        // a.1)
        switch (isEvenNumber(exercise1InputValue)) {
            case true:
                domExercise1ResultDiv[0].innerHTML += `<div style="color: green;">The number ${exercise1InputValue} is an even number</div>`;
                break;
            case false:
                domExercise1ResultDiv[0].innerHTML += `<div style="color: green;">The number ${exercise1InputValue} is an odd number</div>`;
                break;
        }

        // b.1)
        // console.log(posNegNeuNumber(exercise1InputValue));
        switch (posNegNeuNumber(exercise1InputValue)) {
            case 1:
                domExercise1ResultDiv[0].innerHTML += `<div style="color: green;">The number ${exercise1InputValue} is a positive number</div>`;
                break;
            case 0:
                domExercise1ResultDiv[0].innerHTML += `<div style="color: darkorange;">The number ${exercise1InputValue} is a neutral number</div>`;
                break;
            case -1:
                domExercise1ResultDiv[0].innerHTML += `<div style="color: green;">The number ${exercise1InputValue} is a negative number</div>`;
                break;
        }

        // c.1)
        switch (isPrimeNumber(exercise1InputValue)) {
            case true:
                domExercise1ResultDiv[0].innerHTML += `<div style="color: green;">The number ${exercise1InputValue} is a prime number</div>`;
                break;
            case false:
                domExercise1ResultDiv[0].innerHTML += `<div style="color: darkorange;">The number ${exercise1InputValue} is not a prime number</div>`;
                break;
        }

        // d.1)
        domExercise1ResultDiv[0].innerHTML += `<div style="color: green;">Prime List Less Than ${exercise1InputValue}: <span style="color: black;">${primeListNumber(exercise1InputValue).join(", ")}</span></div>`;

        // e.1)
        domExercise1ResultDiv[0].innerHTML += `<div style="color: green;">Even Number List from 0 to ${exercise1InputValue}: <span style="color: black;">${evenNumberList(exercise1InputValue).join(", ")}</span></div>`;

        // f.1)
        domExercise1ResultDiv[0].innerHTML += `<div style="color: green;">Odd Number List from 1 to ${exercise1InputValue}: <span style="color: black;">${oddNumberList(exercise1InputValue).join(", ")}</span></div>`;

        // g.1)
        domExercise1ResultDiv[0].innerHTML += `<div style="color: green;">Square Number List from 1 to ${exercise1InputValue}: <span style="color: black;">${squareNumberList(exercise1InputValue).join(", ")}</span></div>`;
    } else {
        domExercise1ResultDiv[0].innerHTML = `<div style="color: red;">Input Field: Empty, You must input number greater than 1</div>`;
    }
});

// Function: Convert Number < 2 to 2 (default param value is 0)
const convertNumLessThan = (num = 0, baseNum = 0) => num < baseNum ? baseNum : num;
const convertNumGreaterThan = (num = 0, baseNum = 0) => num > baseNum ? baseNum : num;

// a.1) Function: Odd or Even Number Check
const isEvenNumber = (num = 0) => num % 2 === 0 ? true : false;

// b.1) Function: Positive or Negative Number Check
const posNegNeuNumber = (num = 0) => num > 0 ? 1 : num === 0 ? 0 : -1;

// c.1) Function: check whether the number is a prime or not
const isPrimeNumber = (num = 0) => {
    let isPrime = true;
    let myStr = "";
    myStr

    if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    return isPrime;
}

// d.1) Function: Return Array of Prime Number Less than input number
const primeListNumber = (num = 0) => {
    const primeList = [];

    if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (isPrimeNumber(i)) {
                primeList.push(i);
            }
        }
    }

    return primeList;
}

// e.1) Function: Return Array of Even Number from 0 to input number
const evenNumberList = (num = 0) => {
    const evenList = [];

    for (let i = 0; i < num; i++) {
        if (isEvenNumber(i))
            evenList.push(i);
    }

    return evenList;
}

// f.1) Function: Return Array of Even Number from 1 to N
const oddNumberList = (num = 0) => {
    const oddList = [];

    for (let i = 1; i < num; i++) {
        if (!isEvenNumber(i))
            oddList.push(i);
    }

    return oddList;
}

// g.1) Function: Return Array of square number from 0 to N
const squareNumberList = (num = 0) => {
    const squareList = [];

    for (let i = 1; i <= num; i++) {
        if (Math.pow(i, 2) <= num)
            squareList.push(Math.pow(i, 2));
    }

    return squareList;
}

/* -------------------------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------- Exercise 2 ------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------------------------- */

// get dom Input
const domExercise2Input = $$("#exercise_2_form__input");
// get dom Result Div
const domExercise2ResultDiv = $$("#exercise_2_result");

domExercise2Input[0].addEventListener("change", (ev) => {
    // Input Value
    const exercise2InputValue = domExercise2Input[0].value !== "" ? Number(domExercise2Input[0].value) : undefined;

    if (exercise2InputValue !== undefined) {
        // Convert Number > 0 && < 13
        if (exercise2InputValue < 1) {
            domExercise2Input[0].value = convertNumLessThan(exercise2InputValue, 1);
        } else if (exercise2InputValue > 12) {
            domExercise2Input[0].value = convertNumGreaterThan(exercise2InputValue, 12);
        }
    }
});

// dom Form
const domExercise2Form = $$("#exercise_2_form");
domExercise2Form[0].addEventListener("submit", (ev) => {
    ev.preventDefault();
    // Clear Inner Result Div
    domExercise2ResultDiv[0].innerHTML = "";
    domExercise2ResultDiv[0].style.color = "unset";

    // Input Value
    const exercise2InputValue = domExercise2Input[0].value !== "" ? Number(domExercise2Input[0].value) : undefined;
    if (exercise2InputValue !== undefined) {
        domExercise2ResultDiv[0].innerHTML = `<div style="color: green;">${printMonth(exercise2InputValue)} in ${new Date().getFullYear()} have total ${dayInMonth(exercise2InputValue)} days</div>`;
    } else {
        domExercise2ResultDiv[0].innerHTML = `<div style="color: red;">Input Field: Empty, You must input number greater than 0 and less than 13</div>`;
    }
});

// Function: Return String Month
const printMonth = (month = 0) => {
    switch (month) {
        case 1:
            return `January`;
        case 2:
            return `February`;
        case 3:
            return `March`;
        case 4:
            return `April`;
        case 5:
            return `May`;
        case 6:
            return `June`;
        case 7:
            return `July`;
        case 8:
            return `August`;
        case 9:
            return `September`;
        case 10:
            return `October`;
        case 11:
            return `November`;
        case 12:
            return `December`;
    }
}

// Function: Return Total Day In a Month
const dayInMonth = (month = 0) => {
    switch (month) {
        case 1:
            return new Date(new Date().getFullYear() , 1, 0).getDate();
        case 2:
            return new Date(new Date().getFullYear() , 2, 0).getDate();
        case 3:
            return new Date(new Date().getFullYear() , 3, 0).getDate();
        case 4:
            return new Date(new Date().getFullYear() , 4, 0).getDate();
        case 5:
            return new Date(new Date().getFullYear() , 5, 0).getDate();
        case 6:
            return new Date(new Date().getFullYear() , 6, 0).getDate();
        case 7:
            return new Date(new Date().getFullYear() , 7, 0).getDate();
        case 8:
            return new Date(new Date().getFullYear() , 8, 0).getDate();
        case 9:
            return new Date(new Date().getFullYear() , 9, 0).getDate();
        case 10:
            return new Date(new Date().getFullYear() , 10, 0).getDate();
        case 11:
            return new Date(new Date().getFullYear() , 11, 0).getDate();
        case 12:
            return new Date(new Date().getFullYear() , 12, 0).getDate();
    }
}


// const btn = document.getElementById("change");
// btn.addEventListener("change", (ev) => {
//     ev.preventDefault();
// });