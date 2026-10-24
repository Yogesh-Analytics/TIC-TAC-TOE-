
let boxes =document.querySelectorAll(".box");

let rstbtn=document.querySelector("#reset-btn");

let NewGameBtn=document.querySelector("#NewGameBtn");

let msgContain=document.querySelector(".msgContain");

let msg=document.querySelector("#msg");

let trunO=true;
let WinningPatterns=[[0,1,2],
              [3,4,5],
              [6,7,8],
              [0,3,6],
              [1,4,7],
              [2,5,8],
              [0,4,8],
              [2,4,6]];


const resetGame=()=>{
    trunO=true;
    enabledboxes();
    msgContain.classList.add("hide");
};




boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button was clicked"); 
        if(trunO===true){
            box.innerText="X";
            trunO=false;
        }
        else{
            box.innerText="O";
            trunO=true;

        }
        box.disabled=true;
        checkWIN();
    });
});


const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
}
};


const enabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
}
};
   
    

const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContain.classList.remove("hide");
    disabledboxes();
};


const checkWIN=()=>{
    for(let patterns of WinningPatterns){
        let pos1Val=boxes[patterns[0]].innerText;
        let pos2Val=boxes[patterns[1]].innerText;
        let pos3Val=boxes[patterns[2]].innerText;
        if(pos1Val!="" && pos2Val!="" &&pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }

    }
};


rstbtn.addEventListener("click", resetGame);
NewGameBtn.addEventListener("click", resetGame);
