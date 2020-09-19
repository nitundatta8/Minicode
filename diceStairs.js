function createDice() {

  function createStair(n) {
    return Math.floor((Math.sqrt((8 * n) + 1) - 1) / 2);
  }
  let n = parseInt(document.getElementById("dice").value);
  console.log("n   " + n);
  let x = createStair(n)
  console.log("x   " + x);
  // window.addEventListener("load", () => {

  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  canvas.height = 1000;
  canvas.width = 1000;

  if (x === 1) {
    ctx.strokeRect(20, 20, 150, 100);
    console.log(" row 1 ");
    let rem = 2 - x;
    let text = "You have " + rem + " coin left to buy something";
    document.getElementById("output").innerHTML = text;

  }
  else if (x === 2) {
    ctx.strokeRect(20, 20, 150, 100);
    ctx.strokeRect(20, 120, 150, 100);
    ctx.strokeRect(170, 120, 150, 100);

    let rem = Math.abs(3 - n);
    let text = "You have " + rem + " coins left to buy something";
    document.getElementById("output").innerHTML = text;

    console.log(" row 2 " + rem);
  }

  else if (x === 3) {
    ctx.strokeRect(20, 20, 150, 100);
    ctx.strokeRect(20, 120, 150, 100);
    ctx.strokeRect(170, 120, 150, 100);
    ctx.strokeRect(20, 220, 150, 100);
    ctx.strokeRect(170, 220, 150, 100);
    ctx.strokeRect(320, 220, 150, 100);
    let rem = Math.abs(n - 6);
    let text = "You have " + rem + " coins left to buy something";
    document.getElementById("output").innerHTML = text;
    console.log(" row 3 ");
  }

  else if (x === 4) {
    ctx.strokeRect(20, 20, 150, 100);
    ctx.strokeRect(20, 120, 150, 100);
    ctx.strokeRect(170, 120, 150, 100);
    ctx.strokeRect(20, 220, 150, 100);
    ctx.strokeRect(170, 220, 150, 100);
    ctx.strokeRect(320, 220, 150, 100);
    ctx.strokeRect(20, 320, 150, 100);
    ctx.strokeRect(170, 320, 150, 100);
    ctx.strokeRect(320, 320, 150, 100);
    ctx.strokeRect(470, 320, 150, 100);
    let rem = Math.abs(n - 10);
    let text = "You have " + rem + " coins left to buy something.";
    document.getElementById("output").innerHTML = text;
  }
  else if (x === 5) {
    ctx.strokeRect(20, 20, 150, 100);
    ctx.strokeRect(20, 120, 150, 100);
    ctx.strokeRect(170, 120, 150, 100);
    ctx.strokeRect(20, 220, 150, 100);
    ctx.strokeRect(170, 220, 150, 100);
    ctx.strokeRect(320, 220, 150, 100);
    ctx.strokeRect(20, 320, 150, 100);
    ctx.strokeRect(170, 320, 150, 100);
    ctx.strokeRect(320, 320, 150, 100);
    ctx.strokeRect(470, 320, 150, 100);
    ctx.strokeRect(20, 420, 150, 100);
    ctx.strokeRect(170, 420, 150, 100);
    ctx.strokeRect(320, 420, 150, 100);
    ctx.strokeRect(470, 420, 150, 100);
    ctx.strokeRect(620, 420, 150, 100);
    let rem = Math.abs(n - 15);
    let text = "You have " + rem + " coins left to buy something";
    document.getElementById("output").innerHTML = text;

  }




}