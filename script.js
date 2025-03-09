let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let win = document.querySelector(".result");
let turn = "X";
const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const disable = () => {
  for (box of boxes) box.disabled = true;
};

const winnerfun = (pos1) => {
  win.innerText = `Game winner is ${pos1}`;
  win.classList.remove("dis");
};

const checkwinner = () => {
  for (pat of winpattern) {
    let pos1 = boxes[pat[0]].innerHTML;
    let pos2 = boxes[pat[1]].innerHTML;
    let pos3 = boxes[pat[2]].innerHTML;

    if (pos1 != "" || pos2 != "" || pos3 != "") {
      if (pos1 === pos2 && pos1 === pos3) {
        disable();
        winnerfun(pos1);
      }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      box.innerText = turn;
      turn = turn === "X" ? "O" : "X";
      box.disabled = true;
      checkwinner();
    }
  });
});

reset.addEventListener("click", () => {
  turn = "X";
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
    win.classList.add("dis");
  }
});
