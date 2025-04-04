import { restaurantRow, restaurantModal } from './components.js';
import { BASE_URL, MENU_API_BASE } from './variables.js';
import { fetchData } from './utils.js';

const restaurantsList = document.getElementById('restaurants-list');
const modal = document.getElementById('restaurant-modal');
const modalContent = document.getElementById('modal-content');
const filterSodexoBtn = document.getElementById('filter-sodexo');
const filterCompassBtn = document.getElementById('filter-compass');
const filterAllBtn = document.getElementById('filter-all');

let allRestaurants = [];

const displayRestaurants = (restaurants) => {
    restaurantsList.innerHTML = '';
    restaurants.forEach(restaurant => {
        const row = restaurantRow(restaurant);
        row.addEventListener('click', async () => {
            try {
                row.classList.add('loading');
                const menu = await fetchData(`${MENU_API_BASE}/${restaurant._id}/fi`);
                modalContent.innerHTML = restaurantModal(restaurant, menu);
                modal.showModal();
            } catch (error) {
                console.error('Error loading menu:', error);
                modalContent.innerHTML = `<p>Error loading menu for ${restaurant.name}</p>`;
                modal.showModal();
            } finally {
                row.classList.remove('loading');
            }
        });
        restaurantsList.appendChild(row);
    });
};

const filterRestaurants = (company) => {
    if (!allRestaurants.length) return;

    const filtered = company
        ? allRestaurants.filter(restaurant => {
            const restaurantCompany = restaurant.company?.toLowerCase() || '';
            return restaurantCompany.includes(company.toLowerCase());
        })
        : allRestaurants;

    displayRestaurants(filtered);
};

const init = async () => {
    try {
        allRestaurants = await fetchData(BASE_URL);

        console.log('Loaded restaurants:', allRestaurants);
        console.log('Unique companies:', [...new Set(allRestaurants.map(r => r.company))]);

        displayRestaurants(allRestaurants);

        filterSodexoBtn.addEventListener('click', () => {
            console.log('Filtering Sodexo');
            filterRestaurants('Sodexo');
        });

        filterCompassBtn.addEventListener('click', () => {
            console.log('Filtering Compass');
            filterRestaurants('Compass');
        });

        filterAllBtn.addEventListener('click', () => {
            filterRestaurants(null);
        });

    } catch (error) {
        console.error('Error:', error);
    }
};

init();