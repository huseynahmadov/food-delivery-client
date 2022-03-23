$(document).ready(function () {
  const initialState = { items: [], totalPrice: 0, totalQuantity: 0 };
  const data = JSON.parse(localStorage.getItem("res"));
  const basket = JSON.parse(localStorage.getItem("basket"));
  let newItems = initialState.items.slice();

  const updateBasket = () => {
    if (basket === null) {
      return;
    } else {
      console.log(basket.items);
      basket.items.map((item) =>
        $(".pr-container").append(
          `  
          <div class="product-item">
          <div class="product-item-delete">
            <img src="/public/images/deleteitem.svg" alt="" />
          </div>
          <div class="product-item-count">
            <span>+</span>
            <p>1</p>
            <span>-</span>
          </div>
          <div class="product-item-desc">
            <img src="${item.img}" alt="" />
            <div>
              <p>${item.name}</p>
              <p>$${item.price}</p>
            </div>
          </div>
        </div>`
        )
      );
    }
  };
  updateBasket();

  const addProductHandler = (item) => {
    const basket = JSON.parse(localStorage.getItem("basket"));

    if (basket === null) {
      newItems.push(item);
      initialState.items = newItems.slice();
      localStorage.setItem("basket", JSON.stringify(initialState));
      updateBasket();
    } else {
      const newBasket = basket.items;
      newItems.push(item);
      initialState.items = newBasket.concat(newItems);
      localStorage.setItem("basket", JSON.stringify(initialState));
      newItems = [];
      updateBasket();
    }
    // const existingItem = basket.items.find((items) => console.log(items));
  };

  data.at(0).products.map((item) =>
    $(".products-left").append(`
        <div class="product">
        <div class="pr-left">
            <img src="${item.img}" alt="" />
        <div class="pr-left-desc">
            <p>${item.name}</p>
            <p>
            ${item.desc}
            </p>
        </div>
        </div>
        <div class="btn-price">
            <p style="margin-right: 20px">${item.price} $</p>
            <button class="add-product" data-id="${item.id}">+</button>
        </div>
        </div>
    `)
  );

  $(`.add-product`).on("click", function () {
    var dataId = $(this).attr("data-id");
    const item = data.at(0).products.filter((item) => item.id === dataId);
    addProductHandler(item.at(0));
  });
});
