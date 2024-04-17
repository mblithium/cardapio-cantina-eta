const form = document.querySelector("#form-cardapio");
const confirmBtn = document.querySelector("#confirm-cardapio");
const selectMenu = document.querySelector("#selectMenu");
const btnModalClose = document.querySelector("#btn-modal-close");

let cardapioData = {
  "menutitle": "Título do Menu",
  "available": [],
  "menu": [
    {
      "name": "Esfiha",
      "id": "esfiha",
      "img": "./img/Esfiha.png",
    },
    {
      "name": "Croissant",
      "id": "croissant",
      "img": "./img/croissant.webp",
    },
    {
      "name": "Coxinha",
      "id": "coxinha",
      "img": "./img/coxinha.png",
    }
  ]
}

confirmBtn.addEventListener("click", () => { 
  checkForm();
  OpenCloseModal();
});

selectMenu.addEventListener("click", OpenCloseModal );
btnModalClose.addEventListener("click", OpenCloseModal );
OpenCloseModal();


//form.addEventListener("change", checkForm);

let formdata = new FormData(form);
let formObj = Object.fromEntries(formdata);

function OpenCloseModal() {
  const cardapio = document.querySelector(".menu-cardapio");
  const cardapioBg = document.querySelector("#form-cardapio-bgblock");

  if (cardapio.style.display === "block") {
    cardapio.style.display = "none";
    cardapioBg.style.display = "none";
  } else {
    cardapio.style.display = "block";
    cardapioBg.style.display = "block";
  }
  
}

function checkForm() {
  formdata = new FormData(form);
  formObj = Object.fromEntries(formdata);

  cardapioData.available = [];
  for (x in formObj) {
    cardapioData.available.push(x);
  }

  createViewCardapioDisponiveis(formObj);
}

function createViewCardapioDisponiveis(formObj) {
  const cardapioDisponiveis = document.querySelector("#view-cardapio-disponiveis");

  cardapioDisponiveis.innerHTML = "";

  for (x of cardapioData.menu) {
    if (cardapioData.available.includes(x.id)) {
      createItemView(x);
    }
  }

  function createItemView(item) {
    const elem = document.createElement("div");
    elem.className = "itemView";
    elem.id = `itemView-${item.id}`;
    elem.innerHTML = `
    <div class="itemView-image">
      <img src="${item.img}">
    </div>
    <div class="itemView-name">
      <h1>${item.name}</h1>
    </div>
    `
    cardapioDisponiveis.appendChild(elem);
  }
}

function actualDay() {
  let date = new Date();
  let actualDateFormated = date.toLocaleDateString();
  console.log(actualDateFormated);

  document.querySelector(".date").innerHTML = actualDateFormated;
}

actualDay();