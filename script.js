const plantCards = document.getElementById("plant-cards");
const loader = document.getElementById("loader");
const cartContainer = document.getElementById("cart-container");
let cartList = [];

const manageLoader = (loadingStatus) => {
    if(loadingStatus){
        loader.classList.remove("hidden");
        plantCards.classList.add("hidden");
    }
    else{
        loader.classList.add("hidden");
        plantCards.classList.remove("hidden");
    }
}

const loadAllCategories = async() => {
    const url = "https://openapi.programming-hero.com/api/categories";
    const res = await fetch(url);
    const data = await res.json();
    showAllCategories(data.categories);
}

const showAllCategories = (categories) => {
    const categoryList = document.getElementById("category-list");
    categories.forEach(category => {
        categoryList.innerHTML += `
            <li id="tree-${category.id}" onclick="loadPlantsByCategory('${category.id}')" class="px-3 py-2 cursor-pointer rounded duration-300 hover:bg-[#15803d] hover:text-white">${category.category_name}</li>
        `;
    });
}
