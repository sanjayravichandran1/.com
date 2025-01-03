let circularprogress = document.querySelector(".circular-progress-bar"),
    progressValue = document.querySelector(".progress-value");
let progressStarValue = 0,
    progressEndValue = 95,
    speed = 100;
let progress = setInterval(() => {
    progressStarValue++;
    progressValue.textContent = `${progressStarValue}%`
    circularprogress.style.background = `conic-gradient(#0652dd
        ${progressStarValue * 3.6}deg,green 0deg)`
    if (progressStarValue == progressEndValue) {
        clearInterval(progress)
    }
}, speed);