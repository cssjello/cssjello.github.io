//pet category card scrolling

const cardsContainer = [...document.querySelectorAll(".cardcontainer")];
const nxtBtn = [...document.querySelectorAll(".nxtbtn")];
const preBtn = [...document.querySelectorAll(".prebtn")];

cardsContainer.forEach((item, i) => {
  const containerDimens = item.getBoundingClientRect();
  const containerWidth = containerDimens.width;
  const cardGap = 120;
  const scrollBy = containerWidth + cardGap - 10; //1600
  console.log(containerDimens.width);

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += scrollBy;
  });
  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= scrollBy;
  });
});

//nav bar color

function changeBg() {
  const navbar = document.querySelector(".navbar");
  const listdrop = document.querySelectorAll(".listdrop");
  let scrollValue = window.scrollY;
  if (scrollValue < 500) {
    navbar.classList.remove("navbar--dense");
    listdrop.forEach((item) => {
      item.classList.remove("listdrop--dense");
    });
  } else {
    navbar.classList.add("navbar--dense");
    listdrop.forEach((item) => {
      item.classList.add("listdrop--dense");
    });
  }
}

window.addEventListener("scroll", changeBg);

//dropdown
let toggles = document.getElementsByClassName("droptoggle");
let contentDiv = document.getElementsByClassName("aContent");
let icons = document.getElementsByClassName("droparrow");
// console.log(toggles, contentDiv, icons);

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", () => {
    console.log(contentDiv[i].style.height, contentDiv[i].scrollHeight);
    if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      icons[i].style.transform = "rotate(180deg)";
    } else {
      contentDiv[i].style.height = "0";
      icons[i].style.transform = "rotate(0)";
    }

    for (let j = 0; j < contentDiv.length; j++) {
      console.log(i, j);
      if (j !== i) {
        contentDiv[j].style.height = "0";
        icons[j].style.transform = "rotate(0)";
      }
    }
  });
}

// pet category selection
let k = document.getElementsByClassName("petCategory");
let p = [...document.getElementsByClassName("cardsection")];
for (let m = 0; m < k.length; m++) {
  console.log(k, p);
  k[m].addEventListener("click", function () {
    const selectedEl = document.querySelector(".petRoll--poly");
    if (selectedEl) {
      selectedEl.classList.remove("petRoll--poly");
      this.classList.add("petRoll--poly");
      p[m].classList.remove("hidden");
      let exceptEl = p.filter((or, l) => l !== m);
      exceptEl.forEach((category) => {
        category.classList.add("hidden");
      });
    } else {
      this.classList.add("petRoll--poly");
    }
  });
}

//about text selection
let s = document.getElementsByClassName("strip");
let t = [...document.getElementsByClassName("aboutText")];
for (let v = 0; v < s.length; v++) {
  console.log(s, t);
  s[v].addEventListener("click", function () {
    const selectedText = document.querySelector(".aboutText-active");
    if (selectedText) {
      selectedText.classList.remove("aboutText-active");
      this.classList.add("strip--activate");
      t[v].classList.add("aboutText-active");
      const es = [...document.getElementsByClassName("strip")];
      let exceptStrip = es.filter((or, l) => l !== v);
      exceptStrip.forEach((strip) => {
        strip.classList.remove("strip--activate");
      });
    } else {
      this.classList.add("aboutText-active");
    }
  });
}

//multi-step progress bar
const prvBtns = document.querySelectorAll(".prvStepArrow");
const nxtBtns = document.querySelectorAll(".nxtStepArrow");
const processes = document.querySelectorAll(".process");
const steps = document.querySelectorAll(".step");

let processNum = 0;
nxtBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    processNum++;
    updateProcess();
    updateStepBar();
  });
});

prvBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    processNum--;
    updateProcess();
    updateStepBar();
  });
});

function updateProcess() {
  processes.forEach((process) => {
    if (process.classList.contains("process-active")) {
      process.classList.remove("process-active");
    }
  });

  processes[processNum].classList.add("process-active");
}

function updateStepBar() {
  steps.forEach((step, idx) => {
    if (idx < processNum + 1) {
      step.classList.add("step--active");
    } else {
      step.classList.remove("step--active");
    }
  });
}

//mobile version [[[[[---nav bar---]]]]
const burger = document.querySelector(".burger_button");
const navVertic = document.querySelector(".mainnavcontainer");
const navItems = document.querySelectorAll(".nav__listitem");

const navSlide = () => {
  burger.addEventListener("click", () => {
    navVertic.classList.toggle("mainnavcontainer--active");
    //nav items fade in
    navItems.forEach((item, index) => {
      // console.log(index / 5);
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `mainnavFade .5s ease forwards ${
          index / 5 + 0.1
        }s`;
      }
    });
    //burger animation
    burger.classList.toggle("burger--toggle");
  });
};

navSlide();
