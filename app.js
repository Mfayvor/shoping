let shop = document.getElementById("shop");

let shopItemsData = [{
  id: "fcfuehuref",
  name: "Casual Shirt",
  price: 45,
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  img: "images/img-2.jpg"
},
{
  id: "frufuerh",
  name: "Office Shirt",
  price: 100,
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  img: "images/img-2.jpg"
},
{
  id: "ehduehfdfn",
  name: "T-Shirt",
  price: 25,
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  img: "images/img-2.jpg"
},
{
  id: "gefrufrhf",
  name: "Men's Suit",
  price: 300,
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  img: "images/img-2.jpg"
}];

let basket = [
//   {
//   // id:"guufgdsf",
//   // item: 1
// }
];

let generateShop = ()=> {
  return (shop.innerHTML = shopItemsData.map((x)=>{
    let { id, name, price, desc, img } = x;
    return  `
    <div id=product-id-${id} class="item">
      <img width="220" src=${x.img} alt="">
      <div class="details">
        <h3>${x.name}</h3>
        <p>${x.desc}</p>
        <div class="price-quantity">
          <h2>$ ${x.price}</h2>
          <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantity">0</div>
            <i onclick="increment(${id})" class="bi-plus-lg"></i>
          </div>
        </div>
      </div>
    </div>
  `
  }).join(""));
};

generateShop();

let increment = (id)=> {
  let selectedItem = id;
  let search = basket.find((x)=> x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
    id: selectedItem.id,
    item: 1,
  });
  } 
  else {
    search.item += 1;
  }


  // console.log(basket);
  update(selectedItem.id);
};
let decrement = (id)=> {
  let selectedItem = id;
  let search = basket.find((x)=> x.id === selectedItem.id);

  if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  // console.log(basket);
  update(selectedItem.id);
};
let update = (id) => {
  let search = basket.find((x) =>x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation()
};

let calculation = ()=>{
  console.log("calculation function is running")
};