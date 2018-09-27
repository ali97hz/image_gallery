// ma az extentione prettier estefade mikonim ke bade ^S khodesh ; mizare va code ham moratab mikone maman

//mosalaman estefade az jquery inja kheili bhtar va tamiztar az getElementByClassName, getElementBy... hastesh

//const current = document.querySelector("#current");
//const imgs = document.querySelectorAll(".imgs img");

//estefade az ES6 jaleb tar az do khate balast hata
const [current, imgs] = [
  document.querySelector("#current"),
  document.querySelectorAll(".imgs img")
];

const opacity = 0.6;

// Set first img opacity (avalin aks ke vaqti vared page mishim dar halate selecte baiad opacity dashtee bashe)
imgs[0].style.opacity = opacity;
//va estefade az foreach kheili herfeii tar az for
//va arrow function bjaye function mamoli
//current = variable for the current image
imgs.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {
  // Reset the opacity(baraye inke roye aks new click krdi opacitye ghabli reset she)
  imgs.forEach(img => (img.style.opacity = 1));

  // Change current image to src of clicked image
  current.src = e.target.src;

  // Add fade in class
  current.classList.add("fade-in");

  // Remove fade-in class after .5 seconds
  // fadeIn animation faqad ba farakhanie class ejra mishe pas miaim bad az 0.5s removesh mikonim ta
  // baad az dafe aval hm ejra she :)
  setTimeout(() => current.classList.remove("fade-in"), 500);

  // Change the opacity to opacity var
  e.target.style.opacity = opacity;
}
