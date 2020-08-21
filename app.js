const progressBar = document.querySelector('#progress');
const leaderboardBtn = document.querySelector('#leaderboard');
const hideDiv = document.querySelector('.hide');
const dispalyDiv = document.querySelector(".leader-board");
const backBtn = document.querySelector('#back');
let error = document.querySelector('.error');
const voteBtn = document.querySelectorAll('.vote-button');

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
          progressBar.style.width = totalVotes+ '%';
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
          progressBar.style.width = totalVotes + '%';
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
        voteBtn.forEach((btn) => {
          btn.style.display = 'none'
        }) 
        leaderboard();
      } else 
      error.innerHTML = '*finish the votes';
 })
  
 //hide the leaderboard at click of back button
 backBtn.addEventListener("click", () => {
  const divs = document.querySelectorAll(".contestant-box");
  divs.forEach((div) => {
    document.querySelector(".contestants").appendChild(div);
  });
  dispalyDiv.style.display = "none";
  hideDiv.style.display = "block";
    voteBtn.forEach((btn) => {
      btn.style.display = 'block';  
  }) 
});

 //sort leaderboard 
  const leaderboard = () => {
    // Initialize an empty contestant array to be used later on
    let contestants = [];
    let number = 0;

    // Grab all vote containers and all contestant containers
    const spans = document.querySelectorAll(".votes-count");
    const divs = document.querySelectorAll(".contestant-box");

     // For each span, save their classList and score in an object
        // Then push that Object to the contestants array
        spans.forEach((span) => {
          contestants.push({
            class: span.classList[0],
            position: parseInt(span.innerText),
          });
        });

         // Use the "position" key of each span to sort the array in ascending order
         contestants.sort((a, b) => {
          return a.position - b.position;
        });

        // Then reverse the array, returns the array in descending fashion then save it to a new array
        // You can as well reverse it without assigning it to a new variable
        const positions = contestants.reverse();
      
        positions.forEach((position) => {
          // Loop through each object in the array and find the div whose classList matches its "classList" key
          divs.forEach((div) => {
            if (div.classList[0] === position.class) {
             const paragraph = document.createElement("p")
             paragraph.classList.add('number')
              paragraph.innerHTML = number + 1;
              number++;
              div.appendChild(paragraph);

              //hide paragraph on click of back button
              backBtn.addEventListener("click", () => {
                const divs = document.querySelectorAll(".contestant-box");
                divs.forEach((div) => {
                  document.querySelector(".contestants").appendChild(div);
                });
                dispalyDiv.style.display = "none";
                hideDiv.style.display = "block";
                  voteBtn.forEach((btn) => {
                    btn.style.display = 'block';  
                    paragraph.style.display = 'none'
                }) 
              });
              // If it finds a matching pair, append that div to the leaderboard div.
              // This way the span with the highest score will loop through all the divs till it finds it match
              // Then it will also append that div to the leaderboard,
              // that way the contestants with the highest votes always appear on top
              document.querySelector(".board2").appendChild(div);
            }
          });
        });

         // For the eviction message, grab the class of the last child in the leaderboard div,
        // which also holds the user with the least votes, we'll use the class as the contestant's name
        const contestantName = document.querySelector(".board2").lastChild
          .classList[0];

           // create a new element that we will append to the div we grabbed above
        // and we can add a class to style it
        const evictedMessage = document.querySelector('.message');

        // Store an eviction message inside the element using the class as the contestant name
        evictedMessage.innerHTML = contestantName + " has been evicted";
      };