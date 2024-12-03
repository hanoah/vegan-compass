// Restaurant data
const restaurants = {
    "owen-sound": [
        {
            "name": "Casero Kitchen Table",
            "image": "https://caserofood.ca/cdn/shop/files/SpringMorrisPhoto_CaseroSaubleBeach_32A8120_1024x.jpg?v=1656385411",
            "price": "$$$",
            "rating": 4.5,
            "type": "Restaurant | Vegan Options",
            "description": "Mexican-inspired restaurant offering fresh, locally sourced dishes with creative, made-from-scratch flavors.",
            "address": "946 3rd Ave E, Owen Sound, ON N4K 2K9",
            "tags": [
                "Lunch",
                " Dinner"
            ],
            "website": "https://cdn.shopify.com/s/files/1/0362/2774/3880/files/Novtakeout1.pdf?v=1731345352",
            "must_try_dish": "Sneaky Cauliflower Taco"
        },
        {
            "name": "New Orleans Pizza",
            "image": "https://neworleanspizza.impellent.app/media/61527091_140275833744834_4027250270078808382_n-1024x1005.webp",
            "price": "$",
            "rating": 4.1,
            "type": "Take Out | Vegan Options",
            "description": "Canadian pizza chain offering a wide selection of classic and specialty pizzas and sides for takeout and delivery.",
            "address": "795 9th Ave E, Owen Sound, ON N4K 3E6",
            "tags": [
                "Lunch",
                " Dinner"
            ],
            "website": "https://www.neworleanspizza.com/menu?group=27",
            "must_try_dish": "Plant Based Pepperoni"
        },
        {
            "name": "Yummy Yummy Sushi",
            "image": "https://www.visitgrey.ca/sites/default/files/styles/large/public/listings-gallery-updated/yummyyummy3.jpg?itok=EBJOx5Oi",
            "price": "$$",
            "rating": 4.5,
            "type": "Restaurant | Sushi",
            "description": "Popular sushi restaurant offering fresh sushi and Japanese dishes in a cozy atmosphere.",
            "address": "251 10th St E, Owen Sound, ON N4K 1S4",
            "tags": [
                "Lunch",
                " Dinner"
            ],
            "website": "https://order.mrsdigi.com/167301839345636/56c58c9c-79d6-5db5-89e1-d1b44ddefb97#/menu-full",
            "must_try_dish": "VEGE Dragon"
        },
        {
            "name": "Fat Bastard Burrito Co.",
            "image": "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=2000,height=720,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/f2b57ded-165a-4ecb-99b2-92fb5f58e2de.jpg",
            "price": "$",
            "rating": 4.5,
            "type": "Fast Food | Mexican | Vegan Options",
            "description": "Canadian chain offering customizable burritos, quesadillas, and Mexican-inspired dishes.",
            "address": "1350 16th St E Unit 8, Owen Sound, ON N4K 6N7",
            "tags": [
                "Lunch",
                " Dinner"
            ],
            "website": "https://order.online/store/-28400000/?pickup=true&hideModal=true&utm_source=gfo&rwg_token=AJKvS9VZYpQqqsFoBuEDDiB4r1erhPn44Ru2xiCnZhWJW1cjR9NEOJ_fYnKDRcfKoJE4GNePL_LuTsFlKFlc_L3i9xOsaFJmMg%3D%3D",
            "must_try_dish": "Tofu Burrito"
        },
        {
            "name": "Sabitri's Global Cuisine",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRje_YI5-3fQC2XZAugDWigFKOHDQ50pes12Q&s",
            "price": "$$",
            "rating": 4.3,
            "type": "Restaurant | Nepalese | Indian",
            "description": "Family-run restaurant offering authentic Nepalese and Indian cuisine.",
            "address": "945 2nd Ave E, Owen Sound, ON N4K 2H5",
            "tags": [
                "Lunch",
                " Dinner"
            ],
            "website": "https://sabitrisnepaleseandindianfoodon.com/sabitris-nepalese-and-indian-food/menu/941-2nd-Ave-E/",
            "must_try_dish": "Nepalese Momo"
        }
    ],
    "collingwood": [
        {
            "name": "Mountain View Kitchen",
            "image": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
            "price": "$$",
            "rating": 4.7,
            "type": "Restaurant | 100% Vegan",
            "description": "Modern vegan cuisine with spectacular mountain views.",
            "address": "789 Blue Mountain Road",
            "tags": [
                "Lunch",
                "Dinner",
                "View"
            ],
            "website": "https://example.com/mountain-view-kitchen",
            "must_try_dish": "Cashew Mac & Cheese"
        },
        {
            "name": "The Conscious Corner",
            "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
            "price": "$$",
            "rating": 4.3,
            "type": "Cafe & Bakery | Vegan Options",
            "description": "Artisanal bakery and cafe with creative plant-based options.",
            "address": "321 Hurontario Street",
            "tags": [
                "Breakfast",
                "Bakery",
                "Coffee"
            ],
            "website": "https://example.com/conscious-corner",
            "must_try_dish": "Double Chocolate Banana Muffins"
        }
    ]
};


// Function to generate star rating HTML
function generateStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="bi bi-star-fill text-warning"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="bi bi-star-half text-warning"></i>';
        } else {
            stars += '<i class="bi bi-star text-warning"></i>';
        }
    }
    return stars + `<small class="text-muted ms-1">(${rating})</small>`;
}

// Function to generate restaurant card HTML
function generateRestaurantCard(restaurant) {
    return `
        <div class="col-md-6">
            <div class="card h-100 shadow-sm">
                <img src="${restaurant.image}" class="card-img-top" alt="${restaurant.name}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <h2 class="card-title h4 mb-0">${restaurant.name}</h2>
                        <span class="text-success">${restaurant.price}</span>
                    </div>
                    <div class="mb-2">
                        ${generateStarRating(restaurant.rating)}
                    </div>
                    <p class="card-subtitle mb-2 text-muted">${restaurant.type}</p>
                    <p class="card-text">${restaurant.description}</p>
                    <p class="card-text"><small class="text-muted">${restaurant.address}</small></p>
                    <div class="mt-3 mb-3">
                        ${restaurant.tags.map(tag => `<span class="badge bg-primary me-1">${tag}</span>`).join('')}
                    </div>
                    <p class="card-text"><strong>Must-try dish:</strong> ${restaurant.must_try_dish}</p>
                    <div class="d-flex gap-2">
                        <a href="${restaurant.website}" target="_blank" class="btn btn-outline-primary flex-grow-1">
                            <i class="bi bi-menu-app"></i> View Menu
                        </a>
                        <button class="btn btn-outline-secondary flex-grow-1" disabled>
                            <i class="bi bi-star"></i> See Reviews
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to update restaurants based on selected town
function updateRestaurants(town) {
    const mainContent = document.querySelector('main');
    if (restaurants[town]) {
        mainContent.innerHTML = restaurants[town].map(restaurant => generateRestaurantCard(restaurant)).join('');
    } else {
        mainContent.innerHTML = '<div class="col-12 text-center"><p>Please select a town to see available restaurants.</p></div>';
    }
}

// Event listener for town selection
document.getElementById('townSelect').addEventListener('change', (e) => {
    updateRestaurants(e.target.value);
});

// Initialize with default view
document.addEventListener('DOMContentLoaded', () => {
    updateRestaurants(document.getElementById('townSelect').value);
});