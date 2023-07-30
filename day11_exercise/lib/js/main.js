import {isPositiveNumber, add, minus, times, divide, characterCount} from './lib.js';

/* -------------------------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------- Exercise 3. a) --------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------------------------- */
// Define DOM
const $$ = document.querySelectorAll.bind(document);

const domInput1Exercise3a = $$("#exercise_3_a_form__input_1");
const domInput2Exercise3a = $$("#exercise_3_a_form__input_2");

// Number a: Random (1 -> 2000):
const randomNum1 = Math.floor(Math.random() * 2000) + 1;
// console.log(randomNum1);

// Number b: Random (-100 -> 100):
const randomNum2 = Math.floor(Math.random() > 0.5 ? Math.random() * 101 : Math.random() * -100);
// console.log(randomNum2);
domInput1Exercise3a[0].value = randomNum1;
domInput2Exercise3a[0].value = randomNum2;

// Random Number On Click Event
const domExercise3aInput1Btn = $$("#exercise_3_a_random_input_1");
const domExercise3aInput2Btn = $$("#exercise_3_a_random_input_2");

domExercise3aInput1Btn[0].addEventListener("click", (ev) => {
    domInput1Exercise3a[0].value = Math.floor(Math.random() * 2000) + 1;
});

domExercise3aInput2Btn[0].addEventListener("click", (ev) => {
    domInput2Exercise3a[0].value = Math.floor(Math.random() > 0.5 ? Math.random() * 101 : Math.random() * -100);
});

// dom Form Exercise 3. a)
const domExercise3aForm = $$("#exercise_3_a_form");
const domExercise3aResultDiv = $$("#exercise_3_a_result");
domExercise3aForm[0].addEventListener("submit", (ev) => {
    ev.preventDefault();

    // Reset Result Div
    domExercise3aResultDiv[0].innerHTML = "";
    domExercise3aResultDiv[0].style.color = "unset";

    // Consider Result
    if (domInput1Exercise3a[0].value != "" && domInput1Exercise3a[0].value != "") {
        domExercise3aResultDiv[0].innerHTML += `
        <div style="color: green;">
            ${domInput1Exercise3a[0].value} is a ${isPositiveNumber(Number(domInput1Exercise3a[0].value)) ? "positive" : "negative"} number,
            ${domInput2Exercise3a[0].value} is a ${isPositiveNumber(Number(domInput2Exercise3a[0].value)) ? "positive" : "negative"} number
        </div>
        `;

        domExercise3aResultDiv[0].innerHTML += `
        <div style="color: green;">
            ${domInput1Exercise3a[0].value} + ${isPositiveNumber(Number(domInput2Exercise3a[0].value)) ? `${domInput2Exercise3a[0].value}` : `(${domInput2Exercise3a[0].value})`} = ${add(Number(domInput1Exercise3a[0].value), Number(domInput2Exercise3a[0].value))}
            <br>
            ${domInput1Exercise3a[0].value} - ${isPositiveNumber(Number(domInput2Exercise3a[0].value)) ? `${domInput2Exercise3a[0].value}` : `(${domInput2Exercise3a[0].value})`} = ${minus(Number(domInput1Exercise3a[0].value), Number(domInput2Exercise3a[0].value))}
            <br>
            ${domInput1Exercise3a[0].value} * ${isPositiveNumber(Number(domInput2Exercise3a[0].value)) ? `${domInput2Exercise3a[0].value}` : `(${domInput2Exercise3a[0].value})`} = ${times(Number(domInput1Exercise3a[0].value), Number(domInput2Exercise3a[0].value))}
            <br>
            ${domInput1Exercise3a[0].value} / ${isPositiveNumber(Number(domInput2Exercise3a[0].value)) ? `${domInput2Exercise3a[0].value}` : `(${domInput2Exercise3a[0].value})`} = ${divide(Number(domInput1Exercise3a[0].value), Number(domInput2Exercise3a[0].value))}
        </div>
        `;

        domExercise3aResultDiv[0].innerHTML += `
        <div style="color: green;"> 
            ${characterCount(domInput1Exercise3a[0].value)}, ${characterCount(domInput2Exercise3a[0].value)}
        </div>
        `;
    } else {
        domExercise3aResultDiv[0].innerHTML = `<div style="color: red;">Input Fields: Empty</div>`
    }
});

/* -------------------------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------------- Exercise 3. b) --------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------------------------- */

const consist = [
    ["bai_1", 0, 1000],
    ["bai_2", 500, 2000],
    ["bai_3", 2500, 3000],
    ["bai_4", 400, 1400],
]
let counter = 0;

const concurencyCount = () => {
    const shortestStartArr = [];
    let counter = 0;

    // Loop: Take The [Shortest Time Start Array]
    for (let item of consist) {
        if (shortestStartArr && shortestStartArr.length > 0) {
            if (shortestStartArr[1] > item[1]) {
                shortestStartArr.splice(0, shortestStartArr.length);
                shortestStartArr.push(...item);
            }
        } else {
            shortestStartArr.push(...item);
        }
    }
    
    // console.log(shortestStartArr);

    // Count All The Items That The (Start Time) Less Than [Shortest Time Start Array] (Ending Time)
    for (let item of consist) {
        if (shortestStartArr && shortestStartArr.length > 0) {
            // console.log(item[1], shortestStartArr[1]);
            if (item[1] < shortestStartArr[2]) {
                counter++;
            }
        }
    }

    return counter;
}

const domExercise3bResultDiv = $$("#exercise_3_b_result");
domExercise3bResultDiv[0].innerHTML = `Concurency Count: <strong style="color: red;">${concurencyCount()}</strong> task(s)`;

// const concurency = async () => {
//     for (let item of consist) {
//         new Promise(resolve => {
//             setTimeout(() => {
//                 resolve(counter++);
//                 console.log(counter);
//             }, item[1])
//         });
//     }
// }

// concurency();
