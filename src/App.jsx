import "./App.css";
const tRex = document.getElementsByClassName("dino")[0];
const cacto = document.getElementsByClassName("cacto")[0];
const score = document.getElementsByClassName("score")[0];
let count = 0;
let alreadyJump = false;

function App() {
  const addJump = (event) => {
    if (event.key === "ArrowUp") {
      if (!tRex.classList.contains("jump")) {
        tRex.classList.add("jump");
        alreadyJump = true;
      }

      setTimeout(() => {
        tRex.classList.remove("jump");
        alreadyJump = false;
      }, 800);
    }
  };

  document.addEventListener("keydown", (event) => addJump(event));
  console.log(tRex);
  setInterval(() => {
    // let dinoBottom = tRex.offsetTop;
    // let cactoLeft = cacto.offsetLeft;
    // let cactoLeft = parseInt(window.getComputedStyle(cacto)).getPropertyValue(
    //   "left"
    // );

    // if (cactoLeft > 40 && cactoLeft < 270 && dinoBottom <= 50 && !alreadyJump) {
    //   alert(`Game Over! Seu score foi ${count}`);
    // }
    // console.log(window);
    count++;

    score.innerHTML = `Score: ${count}`;
  }, 5000);

  return (
    <div className="game">
      <span className="score"></span>
      <div className="dino"></div>
      <div className="cacto"></div>
    </div>
  );
}

export default App;
