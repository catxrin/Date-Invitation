const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const title = document.getElementById("title");
const par = document.getElementById("par");

let value = 40;

noBtn.addEventListener("mouseenter", () => {
  noBtn.style.marginTop = `${value}px`;
  noBtn.style.marginBottom = `${value}px`;

  value = value === 40 ? -40 : 40;
});

yesBtn.addEventListener("click", () => {
  yesBtn.remove();
  noBtn.remove();
  title.remove();
  par.innerHTML =
    "<p>Thank you! I knew you can't resist me :] <br/> Have a nice day!<p/>";
  par.style.paddingTop = "60px";
  par.style.fontSize = "1.1rem";
});
