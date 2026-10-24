// console.log("hello world");

// const CountVowels=(inputString)=>{
//     let count=0;
//     let lowerStr = inputString.toLowerCase();
   
//     for(i=0;i<=lowerStr.length ;i++){
//          let char = lowerStr[i];
//          if(char==="a" || char==="e" ||char==="i" ||char==="o" ||char==="u"){
//          count++;

//     }
    
// }return count;

//     }
    
// let inputString = prompt("Enter the string: ");
// let totalVowels = CountVowels(inputString);

// console.log("Total vowels:", totalVowels);

// let num=[1,2,3,4,5];
// const SqauredNum=(n)=>{
//     return n*n;
    


// }
// let n=Number(prompt("enter the number"));
// let a=SqauredNum(n);
// console.log(a);


// const CalcSquared((SqauredNum)=>{
//     array.forEach(element => {
        
//     });
    
// })


// num.forEach((i) => {
//     console.log(i*i);

        
// });


// let num=[1,2,3];
// let n=num.length;
// const CalcAvg=num.reduce((res,curr)=>{
//     return res + curr/ n;

// }, 0);

// console.log(CalcAvg);

// let div=document.querySelector("div");

// console.dir(div);





// let ga=div.getAttribute("id");
// console.log(ga);

// div.style.backgroundColor="blue";


// div.innerText="yogesh";
// div.style.fontSize="70px";
// div.style.textAlign="center";
// div.style.alignItems="center";
// div.style.borderRadius="10%";


// let div=document.querySelector("div");

// console.log(div);


// let newBTN=document.createElement("button");
// newBTN.innerText="click me!!"
// newBTN.remove();


    // <!-- <button ondblclick="console.log('button was clicked 2 times ')">Click Me 2 times!!!</button> -->

    // <!-- <div id="box1" onmouseover="console.log('you r inside div')">this is a box</div> -->




// hihi.onclick=()=>{
//     console.log("hello world");
//     let a=20;
//     a++;
//     console.log(a);
// }


// hihi.addEventListener("click",(evt)=>{
//     console.log("btn1 was clicked hand1");
// });

// hihi.addEventListener("click",()=>{
//     console.log("btn1 was clicked hand2");
// });


// const rem3=()=>{
//     console.log("btn1 was clicked hand3");
// }

// hihi.removeEventListener("click",rem3);


// hihi.addEventListener("click",()=>{
//     console.log("btn1 was clicked hand4");
// })



// let hihi=document.querySelector("#hihi");

// let CurrMode="light";


// hihi.addEventListener("click",()=>{
//     if(CurrMode==="light"){
//         CurrMode="dark";
//         document.querySelector("body").style.backgroundColor="black";
        
//     }
//     else{
//         CurrMode="light";
//         document.querySelector("body").style.backgroundColor="wheat";
//     }
//     console.log(CurrMode);
    
// })



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