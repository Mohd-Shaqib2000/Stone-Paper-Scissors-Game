//two variables for count score
let userScore = 0;
let compScore = 0;


//Access the choices all   usersss
const choices = document.querySelectorAll(".choice");
// stone, paper, scissors


const msg = document.querySelector("#msg");
const userScorePare = document.querySelector("#user-score");
const compScorePare = document.querySelector("#comp-score");






//choices is used for access all choices and     choise is for access the choicess one ,one ,one from choices         forEach is a function
choices.forEach((choice) => {
choice.addEventListener("click", ()=> {

// this is variable to get id value like stone,paper,scissors
const userChoice = choice.getAttribute("id");
// console.log("choice was clicked",userChoice);

playGame(userChoice);     //function call
});
});



const playGame = (userChoice) =>{
// console.log("user choice =", userChoice);
//generate computer choice      modular mean make separate functions to easy access 

const CompChoice = genCompChoice();          // call
// console.log("comp choice =",CompChoice);


if (userChoice===CompChoice){
    // draw game 
    drawGame();
}

else{
let userWin = true;

if (userChoice==="rock"){
//scissor ,paper

userWin = CompChoice==="paper" ? false : true;
}

else if(userChoice==="paper"){
    //rock , scissors
    userWin = CompChoice==="scissors" ? false : true;
}

else{
    //rock , paper
    userWin = CompChoice==="rock" ? false : true;
}

showWiner(userWin, userChoice,CompChoice);   // call   function
}
};


const genCompChoice =() =>{
    const option = ["rock","paper","scissors"];    //array
    const randIdx = Math.floor(Math.random() * 3); // floor give complete value and random func  gives random value we want 0 to 2 so * by 3
    return option[randIdx];
}



const  drawGame = () =>{
console.log("Game was Draw.");
msg.innerText ="Game was Draw. play again!";
msg.style.backgroundColor = "#081b31";


}


const showWiner = (userWin, userChoice,CompChoice) =>{
    if(userWin){
        userScore++;
        userScorePare.innerText = userScore;
    // console.log("User Win!.");
    msg.innerText =`You win! your ${userChoice} beats ${CompChoice}`;
    msg.style.backgroundColor = "green";
    }

    else{    
         compScore++;
        compScorePare.innerText = compScore;
        // console.log("User  Lose!.");
        msg.innerText =`You lost. ${userChoice} beats your ${CompChoice}`;

        msg.style.backgroundColor = "red";
    }
    };
    
