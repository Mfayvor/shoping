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

let generateShop = () => {
  return (shop.innerHTML = shopItemsData.map((x)=>{
    let { id, name, price, desc, img } = x;
    return  `
    <div class="item">
      <img width="220" src=${x.img} alt="">
      <div class="details">
        <h3>${x.name}</h3>
        <p>${x.desc}</p>
        <div class="price-quantity">
          <h2>$ ${x.price}</h2>
          <div class="buttons">
            <i class="bi bi-dash-lg"></i>
            <div class="quantity">0</div>
            <i class="bi-plus-lg"></i>
          </div>
        </div>
      </div>
    </div>
  `
  }).join(""));
};

generateShop();