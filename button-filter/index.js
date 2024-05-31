let radio = document.querySelectorAll("#category");

let row = document.getElementById("card-row");

let contents = [
  {
    title: "CSS Project 1",
    text: "  Some quick example text to build on the card title and make upthe bulk of the card's content.",
    img: "assets/img/hero-img-1.jpg",
    id: "css-card",
  },
  {
    title: "CSS Project 2",
    text: "  Some quick example text to build on the card title and make upthe bulk of the card's content.",
    img: "assets/img/hero-img-1.jpg",
    id: "css-card",
  },
  {
    title: "CSS Project 3",
    text: "  Some quick example text to build on the card title and make upthe bulk of the card's content.",
    img: "assets/img/hero-img-1.jpg",
    id: "css-card",
  },
  {
    title: "Javascript Project 1",
    text: "  Some quick example text to build on the card title and make upthe bulk of the card's content.",
    img: "assets/img/hero-img-1.jpg",
    id: "javascript-card",
  },
  {
    title: "Javascript Project 2",
    text: "  Javascript Contetn.",
    img: "assets/img/hero-img-1.jpg",
    id: "javascript-card",
  },
  {
    title: "php Project 1",
    text: "  PHP Contetn.",
    img: "assets/img/hero-img-1.jpg",
    id: "php-card",
  },
  {
    title: "php Project 2",
    text: "  PHP Contetn. 2",
    img: "assets/img/hero-img-1.jpg",
    id: "php-card",
  },
  {
    title: "php Project 3",
    text: "  PHP Contetn. 2",
    img: "assets/img/hero-img-1.jpg",
    id: "php-card",
  },
];

for (let index = 0; index < contents.length; index++) {
  let elementRequired = {
    div: [
      document.createElement("div"),
      document.createElement("div"),
      document.createElement("div"),
    ],
    img: document.createElement("img"),
    h5: document.createElement("h5"),
    p: document.createElement("p"),
    a: document.createElement("a"),
  };

  elementRequired.div[0].classList.add("col-lg-3");
  elementRequired.div[0].classList.add("my-4");
  row.appendChild(elementRequired.div[0]);

  elementRequired.div[1].classList.add("card");
  elementRequired.div[1].style.width = "18rem";
  elementRequired.div[1].setAttribute("id", contents[index]["id"]);

  elementRequired.div[0].appendChild(elementRequired.div[1]);

  elementRequired.img.src = contents[index]["img"];
  elementRequired.img.style.width = 100;
  elementRequired.img.classList.add("card-img-top");
  elementRequired.div[1].appendChild(elementRequired.img);

  elementRequired.div[2].classList.add("card-body");
  elementRequired.div[1].appendChild(elementRequired.div[2]);

  elementRequired.h5.innerText = contents[index]["title"];
  elementRequired.div[2].appendChild(elementRequired.h5);

  elementRequired.p.innerText = contents[index]["text"];
  elementRequired.div[2].appendChild(elementRequired.p);

  elementRequired.a.href = "www.youtube.com";
  elementRequired.a.setAttribute("target", "_blank");
  elementRequired.a.classList.add("btn");
  elementRequired.a.classList.add("btn-primary");
  elementRequired.a.innerText = "Go to Website";
  elementRequired.div[2].appendChild(elementRequired.a);
}
let originalCard = document.querySelectorAll(".col-lg-3");

radio.forEach((element) => {
  element.addEventListener("click", () => {
    let category = element.value;
    let cards = document.querySelectorAll(".col-lg-3");

    cards.forEach((card) => {
      card.remove();
    });

    if (category === "none") {
      originalCard.forEach((card) => {
        row.appendChild(card.cloneNode(true));
      });
    }

    originalCard.forEach((element) => {
      if (element.children[0].id === `${category}-card`) {
        row.appendChild(element.cloneNode(true));
      }
    });
  });
});
