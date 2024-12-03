import csv
import json
from collections import defaultdict

def convert_csv_to_js():
    # Initialize a defaultdict to group restaurants by town
    restaurants_by_town = defaultdict(list)
    
    # Read the CSV file
    with open('restaurants.csv', 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            # Convert tags from string to list
            row['tags'] = row['tags'].split(',')
            
            # Add the restaurant to its town's list
            restaurants_by_town[row['town']].append({
                'name': row['name'],
                'image': row['image'],
                'price': row['price'],
                'rating': float(row['rating']),
                'type': row['type'],
                'description': row['description'],
                'address': row['address'],
                'tags': row['tags'],
                'website': row['website'],
                'must_try_dish': row['must_try_dish']
            })

    # Create the JavaScript code
    js_code = "// Restaurant data\nconst restaurants = "
    js_code += json.dumps(restaurants_by_town, indent=4)
    js_code += ";\n\n"
    
    # Add the rest of the JavaScript functions
    js_code += """
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
});"""

    # Write the JavaScript file
    with open('script.js', 'w') as jsfile:
        jsfile.write(js_code)

if __name__ == '__main__':
    convert_csv_to_js()
    print("Successfully converted restaurants.csv to script.js!")
