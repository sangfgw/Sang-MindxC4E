/* 1. Driving Age Verification Program */
const drivingAgeVerificationSubmitBtn = document.getElementById("driving_age_verification_submit");
drivingAgeVerificationSubmitBtn.addEventListener("click", (ev) => {
    const userAgeValue = document.getElementById("user_age").value == "" ? null : Number(document.getElementById("user_age").value);
    const drivingAgeVerificationResultDiv = document.getElementById("driving_age_verification_result");

    if (userAgeValue != null && userAgeValue < 1) {
        drivingAgeVerificationResultDiv.style.color = "red";
        drivingAgeVerificationResultDiv.innerHTML = `Invalid Data (Your age must be greater than 0)`;
    }
    else if (userAgeValue != null && isValidDrivingAge(userAgeValue)) {
        drivingAgeVerificationResultDiv.style.color = "green";
        drivingAgeVerificationResultDiv.innerHTML = `You are old enough to drive.`;
    }
    else if (userAgeValue != null) {
        drivingAgeVerificationResultDiv.style.color = "darkorange";
        drivingAgeVerificationResultDiv.innerHTML = `You are not old enough to drive.`;
    }
    else {
        drivingAgeVerificationResultDiv.style.color = "red";
        drivingAgeVerificationResultDiv.innerHTML = `Empty Input Field Or Invalid Data`;
    }
});

// Function: If age >= 18 (valid), else "Invalid"
function isValidDrivingAge(age) {
    return age >= 18 ? true : false;
}

/* 2. Negative, Positive or Neutral number Checking */
const numberCheckingSubmitBtn = document.getElementById("number_checking_submit");
numberCheckingSubmitBtn.addEventListener("click", (ev) => {
    const numberCheckingValue = document.getElementById("number_checking").value == "" ? null : Number(document.getElementById("number_checking").value);
    const numberCheckingResultDiv = document.getElementById("number_checking_result");

    if (numberCheckingValue != null && numberMarkVerify(numberCheckingValue) > 0) {
        numberCheckingResultDiv.style.color = "green";
        numberCheckingResultDiv.innerHTML = `${numberCheckingValue} is a positive number`;
    }
    else if (numberCheckingValue != null && numberMarkVerify(numberCheckingValue) == 0) {
        numberCheckingResultDiv.style.color = "green";
        numberCheckingResultDiv.innerHTML = `${numberCheckingValue} is a neutral number`;
    }
    else if (numberCheckingValue != null && numberMarkVerify(numberCheckingValue) < 0) {
        numberCheckingResultDiv.style.color = "green";
        numberCheckingResultDiv.innerHTML = `${numberCheckingValue} is a negative number`;
    }
    else {
        numberCheckingResultDiv.style.color = "red";
        numberCheckingResultDiv.innerHTML = `Empty Input Field Or Invalid Data`;
    }
});

// Function: If number < 0 (return -1), else if number = 0 (return 0), else return 1
function numberMarkVerify(number) {
    return number < 0 ? -1 : number == 0 ? 0 : 1;
}

/* 3. Program checking whether input number can divide 3 and 5 or not */
const numberDivideCheckingSubmitBtn = document.getElementById("number_divide_checking_submit");
numberDivideCheckingSubmitBtn.addEventListener("click", (ev) => {
    const numberDivideCheckingValue = document.getElementById("number_divide_checking").value == "" ? null : Number(document.getElementById("number_divide_checking").value);
    const numberDivideCheckingResultDiv = document.getElementById("number_divide_checking_result");

    if (numberDivideCheckingValue != null && isDivideThreeAndFive(numberDivideCheckingValue)) {
        numberDivideCheckingResultDiv.style.color = "green";
        numberDivideCheckingResultDiv.innerHTML = `Number ${numberDivideCheckingValue} can divide 3 and 5`;
    }
    else if (numberDivideCheckingValue != null && !isDivideThreeAndFive(numberDivideCheckingValue)) {
        numberDivideCheckingResultDiv.style.color = "darkorange";
        numberDivideCheckingResultDiv.innerHTML = `Number ${numberDivideCheckingValue} cannot divide 3 and 5`;
    }
    else {
        numberDivideCheckingResultDiv.style.color = "red";
        numberDivideCheckingResultDiv.innerHTML = `Empty Input Field Or Invalid Data`;
    }
});

// Function: If number can divide 3 and 5 (valid), else (invalid)
function isDivideThreeAndFive(number) {
    return number % 3 == 0 && number % 5 == 0 ? true : false;
}

/* 4. Day of the Week Checking Program */
const dayOfWeekNumberSubmitBtn = document.getElementById("day_of_week_number_submit");
dayOfWeekNumberSubmitBtn.addEventListener("click", (ev) => {
    const dayOfWeekNumber = document.getElementById("day_of_week_number").value == "" ? null : Number(document.getElementById("day_of_week_number").value);
    const dayOfWeekNumberResultDiv = document.getElementById("day_of_week_number_result");

    if (dayOfWeekNumber != null && dayOfWeek(dayOfWeekNumber) != null) {
        dayOfWeekNumberResultDiv.style.color = "green";
        dayOfWeekNumberResultDiv.innerHTML = `Number ${dayOfWeekNumber} corresponds to: ${dayOfWeek(dayOfWeekNumber)}`;
    }
    else if (dayOfWeekNumber != null && dayOfWeek(dayOfWeekNumber) == null) {
        dayOfWeekNumberResultDiv.style.color = "red";
        dayOfWeekNumberResultDiv.innerHTML = `Invalid Data, Your Input Field Must Be In Range 1 to 7`;
    }
    else {
        dayOfWeekNumberResultDiv.style.color = "red";
        dayOfWeekNumberResultDiv.innerHTML = `Empty Input Field Or Invalid Data`;
    }
});

// Function: Return Day Of A Week
function dayOfWeek(day) {
    switch (day) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return null;
    }
}

/* 5. Sum of 1 to N */
const sumNumberSubmitBtn = document.getElementById("sum_number_submit");
sumNumberSubmitBtn.addEventListener("click", (ev) => {
    const sumNumber = document.getElementById("sum_number").value == "" ? null : Number(document.getElementById("sum_number").value);
    const sumNumberResultDiv = document.getElementById("sum_number_result");

    if (sumNumber != null && Number.isInteger(sumNumber)) {
        sumNumberResultDiv.style.color = "green";
        sumNumberResultDiv.innerHTML = `Sum of 1 to ${sumNumber} is: ${sumOfOneToNumber(sumNumber)}`;
    }
    else if (sumNumber != null && !Number.isInteger(sumNumber)) {
        sumNumberResultDiv.style.color = "red";
        sumNumberResultDiv.innerHTML = `Invalid Data, Your Input Field Must Be An Integer Value`;
    }
    else {
        sumNumberResultDiv.style.color = "red";
        sumNumberResultDiv.innerHTML = `Empty Input Field Or Invalid Data`;
    }
});

// Function: Calculate Sum of 1 to N
function sumOfOneToNumber(number) {
    let sum = 0;

    for (let i = 1; i <= number; i++) {
        sum += i;
    }

    return sum;
}

/* 6. Print List of Number With Skip Value Program */
// Listen change Start Range Value
const inputStartRangeNumber = document.getElementById("start_range_number");
const currentStartRangeValueDiv = document.getElementById("current_start_range_value");
currentStartRangeValueDiv.textContent = `Current Start Range Value: ${inputStartRangeNumber.value}`

inputStartRangeNumber.addEventListener("input", (ev) => {
    currentStartRangeValueDiv.textContent = `Current Start Range Value: ${ev.target.value}`;
});

// Listen change End Range value
const inputEndRangeNumber = document.getElementById("end_range_number");
const currentEndRangeValueDiv = document.getElementById("current_end_range_value");
currentEndRangeValueDiv.textContent = `Current End Range Value: ${inputEndRangeNumber.value}`

inputEndRangeNumber.addEventListener("input", (ev) => {
    currentEndRangeValueDiv.textContent = `Current End Range Value: ${ev.target.value}`;
});

// Skip Number
let skipNumber = document.getElementById("skip_number").value == "" ? null : Number.isInteger(Number(document.getElementById("skip_number").value)) ? Number(document.getElementById("skip_number").value) : null;

// Listen Click Submit Button
const rangeSkipNumberSubmitBtn = document.getElementById("range_skip_number_submit");
const rangeSkipNumberResultDiv = document.getElementById("range_skip_number_result");

rangeSkipNumberSubmitBtn.addEventListener("click", (ev) => {
    skipNumber = document.getElementById("skip_number").value == "" ? null : Number.isInteger(Number(document.getElementById("skip_number").value)) ? Number(document.getElementById("skip_number").value) : null;
    if (skipNumber != null) {
        rangeSkipNumberResultDiv.style.color = "green";
        rangeSkipNumberResultDiv.innerHTML = "";
        printLoopSkipNumber(Number(inputStartRangeNumber.value), Number(inputEndRangeNumber.value), skipNumber);
    }
    else {
        rangeSkipNumberResultDiv.style.color = "red";
        rangeSkipNumberResultDiv.innerHTML = `Invalid Skip Number`;
    }
});

// Print Only Once Skip Loop
if (skipNumber != null) {
    printLoopSkipNumber(Number(inputStartRangeNumber.value), Number(inputEndRangeNumber.value), skipNumber);
}

// Function: Loop From start to end number with skip value
function printLoopSkipNumber(startNum, endNum, skipNum) {
    for (; startNum <= endNum; startNum++) {
        if (startNum == skipNum) {
            continue;
        }
        rangeSkipNumberResultDiv.style.color = "green";
        rangeSkipNumberResultDiv.innerHTML += `${startNum}<br>`;
    }

    // // While Method
    // while (startNum <= endNum) {
    //     if (startNum == skipNum) {
    //         startNum++;
    //         continue;
    //     }
    //     rangeSkipNumberResultDiv.style.color = "green";
    //     rangeSkipNumberResultDiv.innerHTML += `${startNum}<br>`;
    //     startNum++;
    // }
}

/* 7. Print List of Number Can Divide A given number Program */
// Listen change Start Range Divide Value
const inputStartRangeDivideNumber = document.getElementById("start_range_divide_number");
const currentStartRangeDivideValueDiv = document.getElementById("current_start_range_divide_value");
currentStartRangeDivideValueDiv.textContent = `Current Start Range Value: ${inputStartRangeDivideNumber.value}`

inputStartRangeDivideNumber.addEventListener("input", (ev) => {
    currentStartRangeDivideValueDiv.textContent = `Current Start Range Value: ${ev.target.value}`;
});

// Listen change End Range Divide value
const inputEndRangeDivideNumber = document.getElementById("end_range_divide_number");
const currentEndRangeDivideValueDiv = document.getElementById("current_end_range_divide_value");
currentEndRangeDivideValueDiv.textContent = `Current End Range Value: ${inputEndRangeDivideNumber.value}`

inputEndRangeDivideNumber.addEventListener("input", (ev) => {
    currentEndRangeDivideValueDiv.textContent = `Current End Range Value: ${ev.target.value}`;
});

// Divide Number
let divideNumber = document.getElementById("divide_number").value == "" ? null : Number.isInteger(Number(document.getElementById("divide_number").value)) ? Number(document.getElementById("divide_number").value) : null;

// Listen Click Submit Button
const rangeDivideNumberSubmitBtn = document.getElementById("range_divide_number_submit");
const rangeDivideNumberResultDiv = document.getElementById("range_divide_number_result");

rangeDivideNumberSubmitBtn.addEventListener("click", (ev) => {
    divideNumber = document.getElementById("divide_number").value == "" ? null : Number.isInteger(Number(document.getElementById("divide_number").value)) ? Number(document.getElementById("divide_number").value) : null;
    if (divideNumber != null && divideNumber > 0) {
        rangeDivideNumberResultDiv.style.color = "green";
        rangeDivideNumberResultDiv.innerHTML = "";
        printFirstDivideNumber(Number(inputStartRangeDivideNumber.value), Number(inputEndRangeDivideNumber.value), divideNumber);
    }
    else if (divideNumber != null && divideNumber <= 0) {
        rangeDivideNumberResultDiv.style.color = "red";
        rangeDivideNumberResultDiv.innerHTML = `Divide Number Must Be A Positive Number and greater than 0`;
    }
    else {
        rangeDivideNumberResultDiv.style.color = "red";
        rangeDivideNumberResultDiv.innerHTML = `Invalid Divide Number`;
    }
});

// Print Only Once Divide Loop
if (divideNumber != null) {
    printFirstDivideNumber(Number(inputStartRangeDivideNumber.value), Number(inputEndRangeDivideNumber.value), divideNumber);
}

// Function: Loop From start to end number and divide the given value if number % 2 == 0 then print it and break loop;
function printFirstDivideNumber(startNum, EndNum, divideNum) {
    rangeDivideNumberResultDiv.style.color = "green";
    rangeDivideNumberResultDiv.innerHTML = `First Number That Can Divide ${divideNum}: `;

    for (; startNum <= EndNum ; startNum++) {
        if (startNum % divideNum == 0) {
            rangeDivideNumberResultDiv.innerHTML += `${startNum}<br>`;
            break;
        }
    }

    // // While Loop Method
    // while (startNum <= EndNum) {
    //     if (startNum % divideNum == 0) {
    //         rangeDivideNumberResultDiv.innerHTML += `${startNum}<br>`;
    //         break;
    //     }
    //     startNum++;
    // }
}