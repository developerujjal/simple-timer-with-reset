

let intervalId; // Store the interval ID

const startTiming = () => {
    let count = 0;
    intervalId = setInterval(() => {
        ++count;
        const numberCounting = document.getElementById('number-counting');
        numberCounting.innerText = count;

    }, 1000);
}

const stopTiming = () => {
    clearInterval(intervalId); // This will stop the interval
}



const rest = ()=>{
    const numberCounting = document.getElementById('number-counting');
        numberCounting.innerText = "0";
}