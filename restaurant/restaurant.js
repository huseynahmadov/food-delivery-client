$(document).ready(function () {
  const data = JSON.parse(localStorage.getItem("res"));

  const addProductHandler = (item) => {
    console.log(item);
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
    addProductHandler(item);
  });
});
