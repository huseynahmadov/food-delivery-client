import { restaurants } from "./mock.js";
import { categories } from "./mock.js";
categories.map((category) => {
    $('.categories').append(`
    <li class="active">
    <img src="../public/images/restaurants/list-img.svg" alt="list-icon">
    <span>${category.category}</span>
    </li>
  
    `)
})