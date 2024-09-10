const input = [];

for(let i=1; i<9; i++){
  input[i] = document.getElementById("textBox"+i);
}

const startBtnClick = () => {
  check1 = false;
  check2 = false;
  input[1].focus();
  for(let i = 1; i < 9; i++){
    input[i].value = "";
    input[i].style.backgroundColor = "";
  }

  operation1.style.backgroundColor = "";
  operation1.style.border = "";
  operation1.textContent = "１工程";

  operation2.style.backgroundColor = "";
  operation2.style.border = "";
  operation2.textContent = "２工程";

  audioStartBtn.currentTime = 0;
  audioStartBtn.play();
};

const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startBtnClick);

const operation1 = document.getElementById("operation1");
const operation2 = document.getElementById("operation2");

const audioStartBtn = document.getElementById("startBtn_audio");
const audioOp1 = document.getElementById("op1_audio");
const audioOp2 = document.getElementById("op2_audio");
const audioSuccess = document.getElementById("success_audio");
const audioError = document.getElementById("error_audio");

let check1 = false, check2 = false;

function nextfeild(str) {

  

  if (str.value.length >= str.maxLength) {
    for (let i = 1; i < input.length; i++) {
      if (input[i] === str) {
        if(input[i].value >= 20){
          input[i].style.backgroundColor = "#75F94D";
          audioSuccess.currentTime = 0;
          audioSuccess.play();
        } else {
          input[i].style.backgroundColor = "#FF0000";
          audioError.currentTime = 0;
          audioError.play();
        }
        (input[i+1] || startBtn).focus();
        break;
      }
    }
    if(check1 === false && input[1].value >= 20 && input[2].value >= 20 && input[3].value >= 20 && input[4].value >= 20){
      check1 = true;
      operation1.textContent = "１工程完了";
      operation1.style.backgroundColor = "#75F94D"
      operation1.style.border = "solid"
      audioOp1.play();
    
    }
    if(check2 === false && input[5].value >= 20 && input[6].value >= 20 && input[7].value >= 20 && input[8].value >= 20){
      check2 = true;
      operation2.textContent = "２工程完了";
      operation2.style.backgroundColor = "#75F94D"
      operation2.style.border = "solid"
      audioOp2.play();
    }
  }
}
