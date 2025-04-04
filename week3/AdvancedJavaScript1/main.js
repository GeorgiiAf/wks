// main.js
import { restaurantRow, restaurantModal } from './components.js';
import { BASE_URL, MENU_API_BASE } from './variables.js';
import { fetchData } from './utils.js';

const restaurantsList = document.getElementById('restaurants-list');
const modal = document.getElementById('restaurant-modal');
const closeBtn = document.querySelector('.close-btn');

const init = async () => {
    const restaurants = await fetchData(BASE_URL);
    restaurants.length ? displayRestaurants(restaurants) : restaurantsList.innerHTML = '<p>No restaurants found</p>';
};

const displayRestaurants = (restaurants) => {
    restaurantsList.innerHTML = '';
    restaurants.forEach(restaurant => {
        const row = restaurantRow(restaurant);
        row.addEventListener('click', async () => {
            row.classList.add('loading');
            const menu = await fetchData(`${MENU_API_BASE}/${restaurant._id}/fi`);
            modal.innerHTML = restaurantModal(restaurant, menu);
            modal.showModal();
            row.classList.remove('loading');
        });
        restaurantsList.appendChild(row);
    });
};

closeBtn.addEventListener('click', () => modal.close());
modal.addEventListener('click', (e) => e.target === modal && modal.close());

init();
