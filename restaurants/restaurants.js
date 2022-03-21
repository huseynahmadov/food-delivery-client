import { restaurants } from "./mock.js";

const categoryItems = [];

function showItems(item) {
  const path = item.name.split(" ");
  $(".mcw-right").append(`
        <div class="cart" data-id=${path.join("").toLowerCase()}>
        <div class="cart-wrapper">
        <div class="cart-img">
        <img src="${item.img}" alt="">
        </div>
        <div class="cart-body">
        <h3>${item.name}</h3>
        <p>${item.dess}</p>
        </div>
        <div class="cart-footer">
        <div class="price">
        <span>$${item.price} delivery</span>
        </div>
        <div class="delivery">
        <span>0${item.delivery} Min</span>
        </div>
        </div>
        </div>
        </div>
    `);
}
// Show all Items first time
restaurants.map((item) => {
  categoryItems.push(item.type);
  showItems(item);
});
// Uniqe category list
[...new Set(categoryItems)].map((category) => {
  $(".categories").append(`
    <li class="list-item" data-id='${category}'>
    <img src="../public/images/restaurants/list-img.svg" alt="list-icon">
    <span class='${category}'>${category}</span>
    </li>
    `);
});
// Display selected category restaurants
$(".list-item").on("click", function () {
  var dataId = $(this).attr("data-id");
  $(".mcw-right").empty();

  for (let restaurant of restaurants) {
    if (dataId === restaurant.type) {
      showItems(restaurant);
    } else if (dataId === "All") {
      $(".mcw-right").empty();
      restaurants.map((item) => {
        showItems(item);
      });
    }
  }
});

$(".cart").on("click", function () {
  const id = $(this).data("id");
  // document.location.href = `restaurants/${id}`;
});
