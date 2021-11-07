const loadText = document.querySelector(".loading-text");

const bg = document.querySelector(".bg")

let interval = setInterval(blurring,30)
let load = 0;

function blurring(){
    load++
    if (load>99){
        clearInterval(interval)
    }
    
    loadText.innerText = `${load}%`; // This is for showing content of load on "loadText" 
    loadText.style.opacity = scale(load, 1, 100 , 1, 0);
    // bg.style.opacity = scale(load, 1, 100 , .3, 1); // adding simply using above function
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`  // adding blur using filter method and in pixels
}

// This is below function that used to map a number from 1 to 100 using "stackOverflow" functions

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num -in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}



// ##################### only for practise #######################

// let load = 0;

// let interval = setInterval(() => {
//     blurring()
// }, 30);

// function blurring(){
//     load++;
//     if (load>99){
//         clearInterval(interval);
//     }

//     console.log(load);
// }