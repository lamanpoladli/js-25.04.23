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



// var pomodoro = {
//     minutes : 0,
//     seconds : 0,
//     fillerHeight : 0,
//     fillerIncrement : 0,
//     interval : null,
//     minutesDom : null,
//     secondsDom : null,
//     fillerDom : null,
//     init : function(){
//       var self = this;
//       this.minutesDom = document.querySelector('#minutes');
//       this.secondsDom = document.querySelector('#seconds');
//       this.fillerDom = document.querySelector('#filler');
//       this.interval = setInterval(function(){
//         self.intervalCallback.apply(self);
//       }, 1000);
//       document.querySelector('#work').onclick = function(){
//         self.startWork.apply(self);
//       };
//       document.querySelector('#shortBreak').onclick = function(){
//         self.startShortBreak.apply(self);
//       };
//       document.querySelector('#longBreak').onclick = function(){
//         self.startLongBreak.apply(self);
//       };
//       document.querySelector('#stop').onclick = function(){
//         self.stopTimer.apply(self);
//       };
//     },
//     resetVariables : function(mins, secs, started){
//       this.minutes = mins;
//       this.seconds = secs;
//       this.started = started;
//       this.fillerIncrement = 200/(this.minutes*60);
//       this.fillerHeight = 0;  
//     },
//     startWork: function() {
//       this.resetVariables(25, 0, true);
//     },
//     startShortBreak : function(){
//       this.resetVariables(5, 0, true);
//     },
//     startLongBreak : function(){
//       this.resetVariables(15, 0, true);
//     },
//     stopTimer : function(){
//       this.resetVariables(25, 0, false);
//       this.updateDom();
//     },
//     toDoubleDigit : function(num){
//       if(num < 10) {
//         return "0" + parseInt(num, 10);
//       }
//       return num;
//     },
//     updateDom : function(){
//       this.minutesDom.innerHTML = this.toDoubleDigit(this.minutes);
//       this.secondsDom.innerHTML = this.toDoubleDigit(this.seconds);
//       this.fillerHeight = this.fillerHeight + this.fillerIncrement;
//       this.fillerDom.style.height = this.fillerHeight + 'px';
//     },
//     intervalCallback : function(){
//       if(!this.started) return false;
//       if(this.seconds == 0) {
//         if(this.minutes == 0) {
//           this.timerComplete();
//           return;
//         }
//         this.seconds = 59;
//         this.minutes--;
//       } else {
//         this.seconds--;
//       }
//       this.updateDom();
//     },
//     timerComplete : function(){
//       this.started = false;
//       this.fillerHeight = 0;
//     }
// };
// window.onload = function(){
//   pomodoro.init();
// };



let istenilenSure = 25;
let toplamSaniye = istenilenSure * 60;
let sayacElement = document.querySelector("#sayac");

let sayacBaslat = setInterval(()=>{
    if (toplamSaniye <= 0) {
        clearInterval(sayacBaslat);
        sayacElement.innerHTML = "Sayac sonlandi:";
        
    }else{
        toplamSaniye--;
        const dakika = Math.floor(toplamSaniye / 60) % 60;
        const saniye = Math.floor(toplamSaniye % 60);

        sayacElement.innerHTML = `${format(dakika)}:${format(saniye)}`;
    }


},1000);
function format(a){
    return a < 10 ? `0${a}` : a;
}

let pause = document.querySelector("#pause");
let reset = document.querySelector("#reset");




reset.onclick = function(){
    clearInterval(sayacBaslat);
    sayacElement.innerHTML = `${25}:${0}${0}`;
}
pause.onclick = function(){
    clearInterval(sayacBaslat);
    sayacElement.innerHTML = `${format(dakika)}:${format(saniye)}`;
}


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
