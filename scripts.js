const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-all");
const buttonPriceTotal = document.querySelector(".Price-total");
const buttonFilterAll = document.querySelector(".filter-all");

function formatCurrency (value){
  const newValue = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }) 
  return newValue
}

function showAll(productsArray) {
  let myLi = "";

  productsArray.forEach((product) => {
    myLi += `
        <li>
            <img src= ${product.src}>
            <p>${product.name}</p>
            <p class="item-price"> ${formatCurrency(product.price)}</p>
        </li>
`;
  });
  list.innerHTML = myLi;
}
function mapAllItem() {
  const newPrices = menuOptions.map((product) => ({
    /// ( parentese aqui retornapara guarda o valor na nova variavel)
    ...product, ///puxa todo os dados do array
    price: product.price * 0.9,
  }));

  showAll(newPrices);
}

function totalPrice() {
  const valuePrice = menuOptions.reduce((acc, value) => acc + value.price, 0);
  list.innerHTML = `
    <li>
      <p>O valor total dos itens é: ${formatCurrency(valuePrice)}</p>
    </li>
`;
}

// function totalPrice () {
// const valuePrice = menuOptions.reduce((acc, value) => {
// const price = value.price
// return acc + price
// }, 0)
// console.log(valuePrice)
// }

function filterAllItems () {
  const filterJustVegan = menuOptions.filter((product) => product.vegan === true)
  
  showAll(filterJustVegan)
}



buttonShowAll.addEventListener("click", () => showAll(menuOptions)); ////com essa função no parentese ela espera chama essa funçao para executa
buttonMapAll.addEventListener("click", mapAllItem);
buttonPriceTotal.addEventListener("click", totalPrice);
buttonFilterAll.addEventListener("click", filterAllItems)
