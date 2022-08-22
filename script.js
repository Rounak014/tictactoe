console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X";
let winner=false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}
const checkwin=()=>{
    let boxtexts=document.getElementsByClassName('boxtext')
    let grid=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,3,5]
    ]
    grid.forEach((temp)=>{
        if((boxtexts[temp[0]].innerText===boxtexts[temp[1]].innerText)&&(boxtexts[temp[1]].innerText===boxtexts[temp[2]].innerText)&&(boxtexts[temp[0]].innerText!='')){
            let inform=document.querySelector('.info');
            inform.innerText=turn + " won";
            winner=true;
            let exci=document.getElementsByClassName("imgbox");
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
        };
    })



}
let boxes=document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText=turn;
            audioTurn.play();
            if(!winner)checkwin();
            turn=changeTurn();
            if(!winner)document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
        }
    })
    
});
reset.addEventListener('click',()=>{
    let re=document.getElementsByClassName('boxtext');
    Array.from(re).forEach((e)=>{
        e.innerText='';
    })
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"



})