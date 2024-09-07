// const input = document.querySelector("input");
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   const randomRedColorNumber = Math.floor(Math.random() * 256);
//   const randomGreenColorNumber = Math.floor(Math.random() * 256);
//   const randomBlueColorNumber = Math.floor(Math.random() * 256);

//   const resultRgbColor = `rgb(${randomRedColorNumber}, ${randomGreenColorNumber}, ${randomBlueColorNumber})`;

//   input.value = resultRgbColor;

//   document.body.style.backgroundColor = resultRgbColor;
// });





// const container = document.querySelector(".container");

// function clickgetmeCodeRgb(colorCode){
    
//     navigator.clipboard.writeText(colorCode).then(function() {
//         console.log(`${colorCode} is copied to clipboard successfully!`);
//     }).catch(function(error) {
//         console.error('Error copying text to clipboard: ', error);
//     });
// }
// function generateColors() {
//     for (let r = 0; r <= 255; r += 100) {  // Increment step can be adjusted
//         for (let g = 0; g <= 255; g += 100) {
//             for (let b = 0; b <= 255; b += 100) {
//                 const color = `rgb(${r},${g},${b})`;
//                 container.innerHTML += `<button onclick="clickgetmeCodeRgb('${color}')" style="background-color:${color};">${color}</button>`

//             }
//         }
//     }
// }

// generateColors();



// const arr = [[[[[1,2,3]]]], [[[4,5,6]]], [[[[[7,8,9]]]]]];

// console.log(arr.flat(Infinity));
//[[1,2,3,4,5,6,7,8,9]]

//[1,2,3,4,5,6,7,8,9]

