let turn = true;
let winnerlist = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]
let boxes = document.querySelectorAll(".btns");
let container=document.querySelector(".content");
let winner=document.querySelector(".winnershowcase");
let winnerx=document.querySelector("#winnershowcase1");
let winner0=document.querySelector("#winnershowcase2");
let newgame=document.querySelector("#newgame")
let retry=document.querySelector(".retry");
let drawcase=document.querySelector("#draw");
let draw=0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        box.style.fontSize="4rem";
        if (turn) {
            box.innerText = "x";
            turn = false;
            draw++;
        }
        else {
            box.innerText = "o";
            turn = true;
            draw++;
        }
        box.disabled=true;
        checkwinner();
        draw1();
        console.log(draw);
        
    });
});
checkwinner=()=>{
    for (let pattern of winnerlist) {
        let val0=boxes[pattern[0]].innerText;
        let val1=boxes[pattern[1]].innerText;
        let val2=boxes[pattern[2]].innerText;
        if(val0!=="" && val1!==""&&val2!==""){
            if(val0===val1&&val1===val2 ){
                boxes.forEach((box) => {
                    box.style.display="none";
                 });
                 retry.style.display="inline";
                if(val0==="x"){
                 winnerx.style.display="inline";
                 newgame.style.display="none";
                 break;
                }
                else{
                    winner0.style.display="inline";
                    newgame.style.display="none";
                    break;
                }
            }
        }
    }
    console.log(draw);
}
newgame.addEventListener("click",()=>{
    showcasedissappear();
    boxappear();
    textremove();
    turn=true;
    buttons();
    retry.style.display="none";
    drawcase.style.display="none";
});
textremove=()=>{
    boxes.forEach((box)=>{
        box.innerText="";
    });
}
boxappear=()=>{
    boxes.forEach((box) => {
        box.style.display="inline";
     });
}
showcasedissappear=()=>{
    draw=0;
    if(winnerx.style.display!=="none"){
        winnerx.style.display="none";
    }
     else if(winner0.style.display!=="none")
     {
        winner0.style.display="none";
    }
}
text=()=>{
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            console.log("clicked");
            if (turn) {
                box.innerText = "x";
                turn = false;
            }
            else {
                box.innerText = "0";
                turn = true;
            }
            box.disabled=true;
            checkwinner();
            
        });
    });
}
retry.addEventListener("click",()=>{
    showcasedissappear();
    boxappear();
    textremove();
    turn=true;
    buttons();
    newgame.style.display="inline";
    retry.style.display="none";
    drawcase.style.display="none";

});
buttons=()=>{
    boxes.forEach((box)=>{
    box.disabled=false;
    })
}
draw1=()=>{
    if(draw===9)
    {
      drawcase.style.display="inline";
      winnerx.style.display="none";
      winner0.style.display="none";
      draw=0;
      boxes.forEach((box) => {
        box.style.display="none";
     });
    }
}
