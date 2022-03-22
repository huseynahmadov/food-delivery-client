import { restaurants } from "./mock.js";

const categoryItems = [];

function showItems(item) {
  // const path = item.name.split(" ");
  // <div class="cart" data-id=${path.join("").toLowerCase()}>
  $(".mcw-right").append(`
        <div class="cart" data-id=${item.id}>
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
  $(`.list-item[data-id="All"`).addClass("active");
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
  $(`.list-item`).removeClass("active");

  for (let restaurant of restaurants) {
    if (dataId === restaurant.type) {
      showItems(restaurant);
      $(`.list-item[data-id="${dataId}"`).addClass("active");
    } else if (dataId === "All") {
      $(".mcw-right").empty();
      $(`.list-item[data-id="${dataId}"`).addClass("active");

      restaurants.map((item) => {
        showItems(item);
      });
    }
  }
});

$(".cart").on("click", function (e) {
  const id = $(this).data("id");
  console.log(id);
  e.preventDefault();
  window.history.pushState({}, null, `/restaurants/${id}`);
  window.history.pushState({ data }, null, `/restaurant/restaurant.html`);
  handleLocation();
});

const handleLocation = async () => {
  // const data = restaurants.filter((item) => {
  //   item.id === id;
  // });
  // window.location.href = "/restaurant/restaurant.html";
  // const path = window.location.pathname;
  // console.log(path);
  // const html = await fetch("../restaurant/restaurant.html").then((data) =>
  //   data.text()
  // );
  // $(".main-container-wrapper").empty();
  // $(".main-container-wrapper").append(html);
  // console.log(html);
};
// window.onpopstate = handleLocation;


const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href)
}

window.route = route;
