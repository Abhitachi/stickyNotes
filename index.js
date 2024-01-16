const content = document.querySelector(".text").children;
const btn = document.querySelector("#btn");
const color = document.querySelector("#color");
const noteSection = document.querySelector(".notes");
const eDisplay = document.querySelector("#emptyDisplay");
const card = document.querySelector(".card");

console.log(content[0].value);

function addNote(e) {
  console.log(e);
  const note = content[0].value;
  console.log(note.length);
  if (note.length === 0) {
    alert("please add your note");
    return;
  }
  const noteColor = color.value;
  eDisplay.remove();
  let div = document.createElement("div");
  const ptag = document.createElement("p");
  ptag.innerText = note;
  var button = document.createElement("button");
  button.innerHTML = "X";
  button.setAttribute("id", "x-button");
  console.log(ptag);
  div.appendChild(ptag);
  div.appendChild(button);
  card.appendChild(div);
  div.classList.add("card-show");
  div.style.backgroundColor = noteColor;
  div.style.height = "160px";
  div.style.width = "180px";
  // console.log(card);
  // // ptag.innerText = "";
  // console.log(content[0].value)
  content[0].value = "";

  // const xbtn = document.querySelectorAll("#x-button");
  // console.log(xbtn);
  // xbtn.forEach((x) => {
  //   x.addEventListener("click", (e) => {
  //     // console.log(e.target.parent);
  //     e.target.parentElement.remove();
  //   });
  // });
}

card.addEventListener("click", (e) => {
  console.log(e.target.innerText === "X");
  if (e.target.innerText === "X") {
    e.target.parentElement.remove();
  }
});
btn.addEventListener("click", addNote);

// const xbtn = document.querySelectorAll("#x-button");
// console.log(xbtn);

// xbtn.addEventListener("click", (e) => {
//   console.log(xbtn);
// });
