const adviceId=document.getElementById("advice-id");
const adviceTxt=document.getElementById("advice-text");
const adviceBtn=document.getElementById("generate-btn");
const url = "https://api.adviceslip.com/advice";

async function getAdvice(){
    const res = await fetch(url);
    const resp = await res.json();
    adviceId.innerText = resp.slip.id;
    adviceTxt.innerText = resp.slip.advice;
}
getAdvice()

adviceBtn.addEventListener("click",getAdvice);