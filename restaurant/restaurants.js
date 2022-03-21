import { restaurants } from "./mock.js";

const categoryItems = [];

function showItems(item) {
    $('.mcw-right').append(`
        <div class="cart">
        <div class="cart-wrapper">
        <div class="cart-img">
        <img src="../public/images/restaurants/soup.svg" alt="">
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
    `)
}

restaurants.map((item) => {
    categoryItems.push(item.type);
    showItems(item);
});

[...new Set(categoryItems)].map((category) => {
    $('.categories').append(`
    <li class="list-item" data-id='${category}'>
    <img src="../public/images/restaurants/list-img.svg" alt="list-icon">
    <span class='${category}'>${category}</span>
    </li>
    `)
});

$('.list-item').on('click', function() {
    var dataId = $(this).attr("data-id");
    $('.mcw-right').empty();
    
    
        
        for(let restaurant of restaurants) {
            console.log(restaurant);

            if(dataId === restaurant.type) {
                $('.mcw-right').append(`
                <div class="cart">
                <div class="cart-wrapper">
                <div class="cart-img">
                <img src="${restaurant.img}" alt="">
                </div>
                <div class="cart-body">
                <h3>${restaurant.name}</h3>
                <p>${restaurant.dess}</p>
                </div>
                <div class="cart-footer">
                <div class="price">
                <span>$${restaurant.price} delivery</span>
                </div>
                <div class="delivery">
                <span>0${restaurant.delivery} Min</span>
                </div>
                </div>
                </div>
                </div>
            `) 
            }

            else if(dataId === 'All') {
                $('.mcw-right').empty();
                restaurants.map((item) => {
                    showItems(item);
                });
            }
        }
});