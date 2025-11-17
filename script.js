let msg = document.getElementById("msg");
let next = document.getElementById("next");

let step = 0;

next.onclick = () => {
    step++;

    if(step === 1){
        msg.innerText = "huh? a flower?";
    }
    else if(step === 2){
        msg.innerText = "this is for you 🌸";
    }
    else if(step === 3){
        msg.innerText = "happy birthday again!";
        next.innerText = "done";
    }
    else {
        next.disabled = true;
    }
};
