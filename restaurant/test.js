$(document).ready(function () {
  let initialState = { items: [], totalPrice: 0, totalQuantity: 0 };
  const data = JSON.parse(localStorage.getItem("res"));
  let newItems = initialState.items.slice();

  // Display products
  const showProductHandler = () => {
    return data.at(0).products.map((item) =>
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
  };
  // Update & display basket
  const updateBasket = () => {
    const basket = JSON.parse(localStorage.getItem("basket"));
    if (basket === null) {
      return;
    } else {
      $("#items-count").text(`${basket.items.length} items`);
      $("#totalPrice").text(`$${basket.totalPrice}`);
      console.log(basket.totalPrice);
      $(".product-list").empty();
      basket.items.map((item) => {
        $(".product-list").append(
          `  
            <div class="product-item">
            <div class="product-item-delete" data-id="${item.id}">
              <img src="/public/images/deleteitem.svg" alt="" />
            </div>
            <div class="product-item-count">
              <span>+</span>
              <p>${item.quantity}</p>
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
        );
      });
    }
  };
  // Add product button
  const addProductHandler = (item) => {
    const basket = JSON.parse(localStorage.getItem("basket"));

    if (basket === null) {
      newItems.push(item);
      initialState.items = newItems.slice();
      initialState.totalQuantity = initialState.totalQuantity + 1;
      initialState.totalPrice = initialState.totalPrice + newItems[0].price;
      localStorage.setItem("basket", JSON.stringify(initialState));
      newItems = [];
      updateBasket();
      // console.log(basket);
      // console.log("1");
    } else {
      const existingItem = basket.items.find(
        (product) => product.id === item.id
      );

      console.log(existingItem);
      console.log(item);
      console.log("q2");
      // if (!existingItem) {
      //   const newBasket = basket;
      //   newItems.push(item);
      //   newBasket.items = newBasket.items.concat(newItems);
      //   newBasket.totalQuantity = newBasket.totalQuantity + 1;
      //   newBasket.totalPrice = newBasket.totalPrice + newItems[0].price;
      //   initialState = newBasket;
      //   localStorage.setItem("basket", JSON.stringify(initialState));
      //   newItems = [];
      //   console.log(basket);
      //   console.log("2");
      // }
      // else {
      //   const newItem = existingItem[0];
      //   const index = basket.items.findIndex((item) => item.id === newItem.id);
      //   const newBasket = basket;
      //   newItem.price = newItem.price + item.price;
      //   newItem.quantity = newItem.quantity + 1;
      //   newBasket.items[index] = newItem;
      //   newBasket.totalQuantity = newBasket.totalQuantity + 1;
      //   newBasket.totalPrice = newBasket.totalPrice + existingItem[0].price;
      //   console.log(existingItem[0].price);
      //   initialState = newBasket;
      //   localStorage.setItem("basket", JSON.stringify(initialState));
      //   console.log(basket);
      //   console.log("3");
      // }

      updateBasket();
    }
    // const existingItem = basket.items.find((items) => console.log(items));
  };

  const deleteItemFromBasket = (id) => {
    const basket = JSON.parse(localStorage.getItem("basket"));
    const removedItem = basket.items.filter((item) => item.id !== id);
    basket.items = removedItem;
    initialState = basket;
    localStorage.setItem("basket", JSON.stringify(initialState));
    updateBasket();
  };

  // Add product button
  $(document).on("click", ".add-product", function () {
    var dataId = $(this).attr("data-id");
    const item = data.at(0).products.filter((item) => item.id === dataId);
    addProductHandler(item.at(0));
  });

  // Delete product button
  $(document).on("click", ".product-item-delete", function () {
    var dataId = $(this).attr("data-id");
    deleteItemFromBasket(dataId);
  });

  updateBasket();
  showProductHandler();
});
