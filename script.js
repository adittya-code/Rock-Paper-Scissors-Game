let user_score = 0;
let comp_score = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_Score = document.querySelector("#user_score");
const comp_Score = document.querySelector("#comp_score");
const body = document.querySelector(".body");
const click_sound = new Audio("click.mp3");
const win_sound = new Audio("win.wav");
const lose_sound = new Audio("lose.mp3");
sound_btn = document.querySelector("#sound_btn");


sound_btn.addEventListener("click" , ()=>{
    if (sound_btn.innerText === "Sound Off") {
        sound_btn.innerText = "Sound On";
        click_sound.muted = true;
        win_sound.muted = true;
        lose_sound.muted = true;
    }else {
        sound_btn.innerText = "Sound Off";
        click_sound.muted = false;
        win_sound.muted = false;
        lose_sound.muted = false;
    }
})




choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        click_sound.play();
        win_sound.pause();
        win_sound.currentTime = 0;
        lose_sound.pause();
        lose_sound.currentTime = 0;
        const user_choice = choice.getAttribute("id")
        playGame(user_choice);
    })
})




const gencompchoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    //rock , paper , scissors
    const randidx = Math.floor(Math.random()*3);   
    return options[randidx]; 

}



const playGame = (user_choice) => {
    console.log("user_choice = " , user_choice);
    // genrate computer choice
    const comp_choice = gencompchoice();
    console.log("comp_choice = " , comp_choice)     
    
    
    
    const draw = () => {
        console.log("game was draw.");
        msg.innerText = "Game was Draw. Play Again"
        msg.style.backgroundColor = "#081b31"
        body.style.backgroundColor = "white"
    };
    



    if (user_choice === comp_choice) {
        draw()

    }else {
        let user_win = true;
        if ( user_choice === "rock") {
            //comp have choice scissors , paper
           user_win =  comp_choice === "paper"? false : true;

        } else if ( user_choice === "paper"){
            //comp have choice rock , scissors
            user_win = comp_choice === "rock"?true : false; 
        }else if ( user_choice === "scissors"){
            //comp have choice  rock , paper
            user_win = comp_choice === "paper"? true : false;
        }
        show_winner(user_win , user_choice , comp_choice);
    } 
}








    const show_winner = (user_win , user_choice , comp_choice ) => {
        if (user_win) {
            win_sound.play();
            user_score ++ ;
            user_Score.innerText = user_score
            console.log("you win!");
            msg.innerText = `You Win! Your ${user_choice} beats ${comp_choice}`;
            msg.style.backgroundColor = "green";
            body.style.backgroundColor = "rgb(0 , 255 , 0 , 0.5)";
            
        }else{
            lose_sound.play();
            comp_score ++ ; 
            comp_Score.innerText = comp_score
            console.log("you lose");
            msg.innerText = `You Lose! ${comp_choice} beats your ${user_choice} `;
            msg.style.backgroundColor = "red";
            body.style.backgroundColor = "rgb(255 , 0 , 0 , 0.5)";
        }
    }