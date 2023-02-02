
let chrono = document.getElementById("chrono")
let resetBtn = document.getElementById("reset")
let stopBtn = document.getElementById("stop")
let startBtn = document.getElementById("start")



let heures = 0;
let minutes = 0;
let secondes = 0;

let timeout;

let estArrete = true;






const démarrer = () => {
    if (estArrete) {
        estArrete = false;
        defilerTemps();
    }
    startBtn.style.backgroundColor="#e66465"
}

const arreter = () => {
    if (!estArrete) {
        estArrete = true;
        clearTimeout(timeout);
    }
}

const defilerTemps = () => {
    if (estArrete) return;
    secondes = parseInt(secondes);
    minutes = parseInt(minutes)
    heures = parseInt(heures)
    secondes++;

    if (secondes= 60) {
        minutes++;
        secondes = 0;
    }

    if (minutes = 60) {
        heures++;
        minutes = 0;
    }

    // pour affichage
    if (secondes < 10) {
        secondes = "0" + secondes; 
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (heures < 10) {
        heures = "0" + heures;
    }

    chrono.textContent = `${heures} :${minutes}:${secondes}`;

    timeout = setTimeout(defilerTemps, 1000);

};

const reset = () => {
    chrono.textContent = "00:00:00";
    estArrete = true;
    heures = 0;
    minutes = 0;
    secondes = 0;
    clearTimeout(timeout);
    startBtn.style.backgroundColor="#3a6eff"
};

startBtn.addEventListener("click", démarrer)
stopBtn.addEventListener("click", arreter)
resetBtn.addEventListener("click", reset)







let timer = document.getElementById("timer")
let resetTimerbtn = document.getElementById("resetTimer")
let stopTimer = document.getElementById("stopTimer")
let startTimer= document.getElementById("startTimer")
let textfield= document.getElementById("textfield")

let heures2 = 0;
let minutes2 = 0;
let secondes2 = 0;

let timeoutTimer;


let estArreteTimer = true;


const démarrerTimer = () => {
    if (estArreteTimer) {
        estArreteTimer = false;
        defilerTempsinverse();
    }
    
}

const arreterTimer = () => {
    if (!estArreteTimer) {
        estArreteTimer = true;
        clearTimeout(timeoutTimer);
    }
}



const defilerTempsinverse = () => {
    if (estArreteTimer) return;
    secondes2 = parseInt(secondes2);
    secondes2--;    
    

    

    // pour affichage
    if (secondes < 10) {
        secondes = "0" + secondes; 
    }

    

    // pour affichage
    if (secondes2 < 10) {
        secondes2 = "0" + secondes2; 
    }


    timer.textContent = `${secondes2}`;

    timeoutTimer = setTimeout(defilerTempsinverse, 1000);

};


const resetTimer = () => {
    timer.textContent = "0";
    estArreteTimer = true;
    clearTimeout(timeoutTimer);
    textfield.value = null
   }


startTimer.addEventListener("click", démarrerTimer)
stopTimer.addEventListener("click", arreterTimer)
resetTimerbtn.addEventListener("click", resetTimer)

    textfield.addEventListener("input", (event) => {
    timer.textContent = `${textfield.value}`
    console.log(textfield.value)
    secondes2=parseInt(textfield.value,)

})
