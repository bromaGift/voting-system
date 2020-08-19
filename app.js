const increaseCount = () => {
    const totalVotes = parseInt(document.querySelector("h1").innerHTML);
    const className = this.event.target.className;
    const spans = document.querySelectorAll(".votes-count");
    spans.forEach((span) => {
      if (span.classList[0] === className) {
        const spanValue = parseInt(span.innerHTML);
        if (totalVotes <= 150 && spanValue <= 150) {
          if (totalVotes === 0) {
            return;
          }
          document.querySelector("h1").innerHTML = totalVotes - 1;
          span.innerHTML = spanValue + 1;
        }
      }
      const progress = document.querySelector('#progressbar');
    });
  };


 
  const decreaseCount = () => {
    const totalVotes = parseInt(document.querySelector("h1").innerHTML);
   const  className = this.event.target.className;
    const spans = document.querySelectorAll(".votes-count");
    spans.forEach((span) => {
      if (span.classList[0] === className) {
        const spanValue = parseInt(span.innerHTML);
        if (totalVotes < 150 || spanValue < 150) {
          if (spanValue < 1 || totalVotes === 150) {
            return;
          }
          document.querySelector("h1").innerHTML = totalVotes + 1;
          span.innerHTML = spanValue - 1;
        }
      }
    });
  };