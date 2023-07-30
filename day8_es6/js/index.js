/* 1. Sort Array By Ascending */
const array = [
    [{ name: "Hoàng", score: 2 }, { name: "Long", score: 4 }],
    [{ name: "Tú", score: 100 }, { name: "Linh", score: 10 }],
    [{ name: "Ngọc", score: 1 }, { name: "Long Lê", score: 9 }]
];

// Define Function
const sortArrASC = (arr) => {
    // Create temp object array
    const objArr = [];

    arr.forEach(item => {
        if (typeof item === "object") {

            // loop throught each object inside array
            item.map(objItem => {
                return objArr.push(objItem);
            });
        }
    });

    // Sort Temp Array
    objArr.sort((itemA, itemB) => {
        if (itemA.score < itemB.score)
            return -1;
        if (itemA.score > itemB.score)
            return 1;

        // equal
        return 0;
    });

    return objArr;
}

// Use Function
document.write(
    `
    <h1>1. Ascending Sort Score Array:</h1>
    <div>[</div>
`);
sortArrASC(array).forEach((objItem, objIndex) => {
    const keys = Object.keys(objItem);
    const values = Object.values(objItem);
    document.write(`
        <div>&emsp;{</div>
        <div>&emsp;&emsp;
    `);
    keys.forEach((key, keyIndex) => {
        document.write(`<span>${keys[keyIndex]}: 
        ${typeof values[keyIndex] === "string" ? "\"" : ""}${values[keyIndex]}${typeof values[keyIndex] === "string" ? "\"" : ""}
        ${keyIndex === keys.length - 1 ? "" : ", "}</span>`);
    });
    document.write(`${objIndex === sortArrASC(array).length - 1 ? "</div><div>&emsp;}</div>" : "</div><div>&emsp;}, </div>"}`);
});
document.write(`<div>]</div>`);

// document.write(
//     `
//     <h1>1. Ascending Sort Score Array:</h1>
//     <p>${JSON.stringify(sortArrASC(array))}</p>
// `);

/* 2. Optional */
const array2 = [
    ["Bai_01", "Bai_02", "Bai_03", "Bai_04"],
    ["Bai_01", "Bai_03"],
    ["Bai_02", "Bai_04", "Bai_01"],
    ["Bai_04", "Bai_02", "Bai_03", "Bai_01"],
    ["Bai_04", "Bai_03", "Bai_02", "Bai_01"]
];

// Define Function
const funcLessonObj = (arr) => {
    const objArr = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            item.forEach((strItem, index) => {
                if (index + 1 <= item.length - 1) {
                    objArr.push({ [strItem]: item[index + 1] });
                }
            });
        }
    });

    return objArr;
}

// Use Function
document.write(
    `
    <h1>2. Lesson Object (Optional):</h1>
    <div>{</div>
`);

funcLessonObj(array2).forEach((objItem, objIndex) => {
    const keys = Object.keys(objItem);
    const values = Object.values(objItem);
    keys.forEach((key, keyIndex) => {
        document.write(`<div>&emsp;${keys[keyIndex]}: 
        ${typeof values[keyIndex] === "string" ? "\"" : ""}${values[keyIndex]}${typeof values[keyIndex] === "string" ? "\"" : ""}
        ${objIndex === funcLessonObj(array2).length - 1 ? "" : ",<br>"}</div>`);
    });
});

document.write(
    `
    <div>}</div>
`);

// document.write(
//     `
//     <h1>2. Lesson Object (Optional):</h1>
//     <p>${JSON.stringify(funcLessonObj(array2))}</p>
// `);