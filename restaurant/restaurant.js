$(document).ready(function () {
  const data = JSON.parse(localStorage.getItem("res"));

    const addProductHandler = (item) => {
    console.log(item);
  };

  data.at(0).products.map((item) =>
    $(".products-left").append(`<div class="product">
        <div>
        <img src="${item.img}" alt="" />
        <div style="margin-left: 30px">
            <p>${item.name}</p>
            <p style="margin-top: 15px">
            ${item.desc}
            </p>
        </div>
        </div>
        <div class="btn-price">
            <p style="margin-right: 20px">${item.price} $</p>
            <button class='add-btn'>+</button>
        </div>
        </div>
    `)
  );
});
