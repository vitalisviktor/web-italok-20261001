let drinksList = [
  {name: "Coca-Cola", price: 500},
  {name: "Coca-Cola Zero", price: 550},
  {name: "Fanta", price: 500},
  {name: "Sprite", price: 500},
  {name: "Jeges tea", price: 600},
];

const form = document.getElementById("form");
form.reset();
const nameError = document.getElementById("name-error");
const priceError = document.getElementById("price-error");
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

form.addEventListener("submit", function(e){
    e.preventDefault();
    let error = false;
    const formData = new FormData(form);
    const name = formData.get("name");
    const price = formData.get("price");
    
    if(name.trim() == ""){
        nameError.innerText = "A név nem lehet üres!";
        error = true;
    }
    else{
        nameError.innerText = "" ;
    }
    if(price < 0){
        priceError.innerText = "Az ár nem lehet negatív!";
        error = true;
    }
    else if(price % 10 != 0){
        priceError.innerText = "Az árnak oszthatónak kell lennie 10-zel!";
        error = true;
    }
    else{
        priceError.innerText = "";
    }
    if(!error){
        Add(name,price);
        form.reset();
    }
});