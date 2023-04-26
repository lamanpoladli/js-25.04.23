var span = document.getElementById('span');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);

let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let start = document.querySelector(".start");
let pause = document.querySelector(".pause");
let reset = document.querySelector(".reset");

let intervalId;
let minuteCount = 25;
let secondCount = 0;
start.addEventListener("click",()=>{
    intervalId = setInterval(()=>{
        secondCount--;
        if(secondCount < 0){
            secondCount = 59;
            minuteCount--;
        }
        minute.innerText = minuteCount;
        second.innerText = secondCount;
    },1000)
});

reset.addEventListener("click",()=>{
    clearInterval(intervalId);
    minute.innerText = "25";
    second.innerText = "00";
    minuteCount = 25;
    secondCount = 0;
})
pause.addEventListener("click",()=>{
    clearInterval(intervalId);
})

let ul =document.querySelector(".ul");
let undo = document.querySelector(".undo");

let buttonend = document.querySelector(".end-button");
let div2 = document.querySelector(".haha");

undo.addEventListener("click",(e)=>{
    e.preventDefault();
    let input = document.querySelector(".inputt");
    let errorMsg=document.querySelector(".error");
    if(input.value ==""){
        
        errorMsg.classList.replace("d-none","d-block");
    }
    else{
        ul.innerHTML += `
    <li>
        <div class="list-div">
            ${input.value}
            <button class="delete-button">Add</button>
        </div>
    </li>
`
errorMsg.classList.replace("d-block","d-none");
    }
input.value="";

let removeButtons=[];

    for (let i = 0; i < ul.children.length; i++) {
        removeButtons.push(ul.children[i]);
    }
    removeButtons.forEach((removeButton)=>{
        removeButton.addEventListener("click",(e)=>{
            window.alert("To do added!")
            
            
        })
    })


})