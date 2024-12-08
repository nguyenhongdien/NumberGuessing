const guessedNumTxt = document.getElementById("guessedNumTxt");
const numInp = document.getElementById("numInp");
const submitBtn = document.getElementById("submitBtn");
const notifyTxt = document.getElementById("notifyTxt");
const reloadBtn = document.getElementById("reloadBtn");

const randomNum = Math.ceil(Math.random() * 200);
console.log(randomNum);

submitBtn.onclick = function(){
    let num = numInp.value;
    if (num == "" || num == null){
        notifyTxt.textContent = `You must enter a number!`;
    } else if (num > randomNum) {
        guessedNumTxt.textContent = `${num}`
        notifyTxt.textContent = `The number is lower`;
        notifyTxt.style.color = "rgba(209, 223, 82, 1)";
    } else if (num < randomNum) {
        guessedNumTxt.textContent = `${num}`
        notifyTxt.textContent = `The number is higher`;
        notifyTxt.style.color = "orange";
    } else if (num == randomNum) {
        guessedNumTxt.textContent = `${num}`
        notifyTxt.textContent = `You guess it right!\nThe number is ${randomNum}`;
        notifyTxt.style.color = "green";
    }
}

document.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        submitBtn.click();
    }
});

reloadBtn.onclick = function(){
    location.reload();
}