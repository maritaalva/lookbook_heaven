

let cambioimagen = (img, alt) => {
  let imagengrande = document.querySelector("#caja");
  imagengrande.src = img;
  imagengrande.alt = alt;
};


document.querySelectorAll('.mini').forEach(item => {
  item.addEventListener('click', event => {
    cambioimagen(item.src, item.alt);
  })
});

let cambiodesc = (figcaption, id) => {
  let hovertext = document.querySelector('#imgdesc1');
  hovertext.item = figcaption;
  hovertext.id = id;
};

// let parr = document.querySelector("#imgdesc1");
let imgcaption = document.querySelector("figcaption")
let imgAct = 1;
let nextimg = document.querySelector("#nextderecha");
nextimg.addEventListener("click", () => {
  if (imgAct == 15) {
    imgAct = 1;
  } else {
    imgAct++;
  }
  cambioimagen(`assets/images/${imgAct}.png`, "picture");
  // imgcaption.style.opacity="1"
  // parr.textContent = "Heaven Logo Rug<br>375$<br> Alfombra de algodón de pelo<br> medio realizada a mano."
  cambiodesc("figcaption", `imgdesc${imgAct}`);

});

let previmg = document.querySelector("#previzqu")
previmg.addEventListener("click", () => {
  if (imgAct == 1) {
    imgAct = 15;
  } else {
    imgAct--;
  }
  cambioimagen(`assets/images/${imgAct}.png`, "picture")

});




let caption = document.querySelector('figcaption')
let op = document.querySelector('#caja');
op.addEventListener("mouseover", () => {

  op.style.opacity = "1";
  caption.style.opacity = "1"

})
op.addEventListener("mouseout", () => {
  op.style.opacity = "1";
  caption.style.opacity = "0"
})


function whitetheme() {
  document.getElementById("bkg_sky").style.display = "none";
  document.getElementById("bkg_color").style.backgroundColor = "Gainsboro";
  document.getElementById("skytheme").style.borderColor = "black";
  document.getElementById("whitetheme").style.borderColor = "black";
  document.getElementById("blacktheme").style.borderColor = "black";
  document.getElementById('logopage').src = 'assets/images/logo_white.png';
  document.getElementById("descriptionlogo").style.color = "DodgerBlue";

}
function blacktheme() {
  document.getElementById("bkg_sky").style.display = "none";
  document.getElementById("bkg_color").style.backgroundColor = "black";
  document.getElementById("skytheme").style.borderColor = "white";
  document.getElementById("whitetheme").style.borderColor = "white";
  document.getElementById("blacktheme").style.borderColor = "white";
  document.getElementById('logopage').src = 'assets/images/logo_black.png';
  document.getElementById("descriptionlogo").style.color = "DeepPink";
}
function skytheme() {
  document.getElementById("bkg_sky").style.display = "block";
  document.getElementById("skytheme").style.borderColor = "black";
  document.getElementById("whitetheme").style.borderColor = "black";
  document.getElementById("blacktheme").style.borderColor = "black";
  document.getElementById('logopage').src = 'assets/images/logo_sky.png';
  document.getElementById("descriptionlogo").style.color = "Black";
}

function descriptionvisible() {
  document.getElementById('descriptionlogo').style.display = "block";
  document.getElementById('descriptionlogo').style.opacity = "1";
  document.getElementById('descriptionlogo').style.zIndex = "3";
}
function descriptionnotvisible() {
  document.getElementById('descriptionlogo').style.display = "none";
  document.getElementById('descriptionlogo').style.zIndex = "-2";
  document.getElementById('caja').style.zIndex = "4";
}


// let bkg = document.querySelector('#previzqu')

// bkg.addEventListener.apply('mouseover',blue)
// function blue (){
//  alert("ghj")
// }
// let cloud = document.querySelectorAll('#descriptionlogo')
