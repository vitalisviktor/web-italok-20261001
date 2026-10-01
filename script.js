let drinksList = [
  {name: "Coca-Cola", price: 500},
  {name: "Coca-Cola Zero", price: 550},
  {name: "Fanta", price: 500},
  {name: "Sprite", price: 500},
  {name: "Jeges tea", price: 600},
];

const table = document.getElementById("table-body");

function Add(name,price){
const elements = [name,price];
const tr = document.createElement("tr");
for (let i = 0; i < 2; i++) {
    const td = document.createElement("td");
    td.innerText = elements[i];
    tr.appendChild(td);
    
}
table.appendChild(tr);
}

drinksList.forEach(e => {
    Add(e.name,e.price);
});

const form = document.getElementById("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    const price = formData.get("price");
    Add(name,price);
});