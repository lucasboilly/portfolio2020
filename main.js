

let containerWidth = document.getElementById("container").offsetWidth;
let imgWidth = document.getElementById("ok").offsetWidth;

console.log(containerWidth);
console.log(imgWidth);


function resize() {
    containerWidth = imgWidth;
}

resize;

console.log(imgWidth);