let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let Win=document.querySelector(".winner");
let msg=document.querySelector(".massage");
let New=document.querySelector(".New");




let playerO="O";

const winPatterns=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if (playerO==="O") {
            box.innerText="O"
            playerO="X"
        } else {
            box.innerText="X"
            playerO="O"           
        }
        box.disabled=true;
        checkWinner()
    });
});

const showWinner =(winner)=>{
    Win.innerText=`Winner Is ${winner}`;
    msg.classList.remove("hide")
}

const checkWinner = () => {
    for (let patterns of winPatterns) {
        let pos1=boxes[patterns[0]].innerText;
        let pos2=boxes[patterns[1]].innerText;
        let pos3=boxes[patterns[2]].innerText;

        if (pos1!=="" && pos2!=="" && pos3!=="") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner",pos1);
                showWinner(pos1);
            }
        }
    }
}
