const progressBar = document.querySelector('#progress');
const leaderboardBtn = document.querySelector('#leaderboard');
const hideDiv = document.querySelector('.hide');
const dispalyDiv = document.querySelector(".leader-board");
const backBtn = document.querySelector('#back');
let error = document.querySelector('.error');

//add votes to user score and reduce total votes
const increaseCount = () => {
    const totalVotes = parseInt(document.querySelector("h1").innerHTML);
    const className = this.event.target.className;
    const spans = document.querySelectorAll(".votes-count");
    spans.forEach((span) => {
      if (span.classList[0] === className) {
        const spanValue = parseInt(span.innerHTML);
        if (totalVotes <= 100 && spanValue <= 100) {
          if (totalVotes === 0) {
            return;
          }
          document.querySelector("h1").innerHTML = totalVotes - 1;
          span.innerHTML = spanValue + 1;
        }      
      }
    });
  };
 
  //subtraact votes from user score and add to total votes
  const decreaseCount = () => {
    const totalVotes = parseInt(document.querySelector("h1").innerHTML);
   const  className = this.event.target.className;
    const spans = document.querySelectorAll(".votes-count");
    spans.forEach((span) => {
      if (span.classList[0] === className) {
        const spanValue = parseInt(span.innerHTML);
        if (totalVotes < 100 || spanValue < 100) {
          if (spanValue < 1 || totalVotes === 100) {
            return;
          }
          document.querySelector("h1").innerHTML = totalVotes + 1;
          span.innerHTML = spanValue - 1;
        }
      }
    });
  };


  //bring up leaderBoard at button click
    leaderboardBtn.addEventListener('click', () => {
      let numberVotes = parseInt(document.querySelector('.board-num').innerHTML);
      if (numberVotes === 0) {
        hideDiv.style.display = "none";
        dispalyDiv.style.display = "block";
      } else 
      error.innerHTML = '*finish the votes';
 })
  
 backBtn.addEventListener('click', () => {
   dispalyDiv.style.display = "none";
   hideDiv.style.display = "block";
 })


 //sort leaderboard 

