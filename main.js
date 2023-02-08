var btnMinus = document.querySelectorAll("#minus");
var btnPlus = document.querySelectorAll("#plus");

for (var i = 0; i < btnMinus.length; i++) {
  btnMinus[i].addEventListener("click", function (event) {
    if (event.target.nextElementSibling.textContent > 0) {
      event.target.nextElementSibling.textContent--;
    }
    calcule();
  });
}

for (var i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", function (event) {
    if (event.target.previousElementSibling.textContent >= 0) {
      event.target.previousElementSibling.textContent++;
    }
    calcule();
  });
}

//

var heartIcons = document.querySelectorAll(".fa-regular");
for (var i = 0; i < heartIcons.length; i++) {
  heartIcons[i].addEventListener("click", function (e) {
    if (e.target.style.color === "red") {
      e.target.classList.remove("fa-solid");
      e.target.classList.add("fa-regular");
      e.target.style.color = "black";
    } else {
      e.target.classList.remove("fa-regular");
      e.target.classList.add("fa-solid");
      e.target.style.color = "red";
    }
  });
}

// -------------------------------------------

var addprd = document.querySelectorAll(".addprd");
for (var i = 0; i < addprd.length; i++) {
  addprd[i].addEventListener("click", function (e) {
    var textname =
      e.target.previousElementSibling.previousElementSibling.children[1]
        .innerText;
    var prixtext =
      e.target.previousElementSibling.previousElementSibling.children[2]
        .innerText;
    var img =
      e.target.previousElementSibling.previousElementSibling
        .previousElementSibling.src;
    console.log(textname);
    console.log(prixtext);
    console.log(img);
  });
}

// ---------------

var qty = document.getElementsByClassName("qty");
var prix = document.getElementsByClassName("prix");
function calcule() {
  var total = 0;
  for (var i = 0; i < qty.length; i++) {
    var price = prix[i].innerText.replace("TND", "");
    var quantite = qty[i].innerText;
    total += quantite * price;
  }
  document.querySelector(".totalfini").textContent = total;
}
calcule();

// --------------------

var xicon = document.querySelectorAll(".xicone");
for (let i = 0; i < xicon.length; i++) {
  xicon[i].addEventListener("click", function (e) {
    console.log(e.target);
    e.target.parentElement.parentElement.remove();
    calcule();
  });
}
