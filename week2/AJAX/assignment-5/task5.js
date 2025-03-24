document.addEventListener('DOMContentLoaded', () => {
    const restaurantsList = document.getElementById('restaurants-list');
    const modal = document.getElementById('restaurant-modal');
    const closeBtn = document.querySelector('.close-btn');
    const restaurantInfo = document.getElementById('restaurant-info');
    const menuItems = document.getElementById('menu-items');

    const RESTAURANTS_API = 'https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants';
    const MENU_API_BASE = 'https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/daily';

    async function fetchRestaurants() {
        try {
            const response = await fetch(RESTAURANTS_API);
            if (!response.ok) throw new Error('Network response was not ok');
            return await response.json();
        } catch (error) {
            console.error('Error fetching restaurants:', error);
            restaurantsList.innerHTML = '<p class="error">Error loading restaurants. Please try again later.</p>';
            return [];
        }
    }

    async function fetchMenu(restaurantId) {
        try {
            const response = await fetch(`${MENU_API_BASE}/${restaurantId}/fi`);
            if (!response.ok) throw new Error('Failed to fetch menu');
            const data = await response.json();
            console.log('Menu data for restaurant', restaurantId, ':', data); // ← Добавьте эту строку
            return data;
        } catch (error) {
            console.error('Error:', error);
            return { error: 'Failed to load menu' };
        }
    }

    function displayRestaurants(restaurants) {
        restaurantsList.innerHTML = '';

        restaurants.forEach(restaurant => {
            const card = document.createElement('div');
            card.className = 'restaurant-card';
            card.innerHTML = `
                <h3>${restaurant.name}</h3>
                <p>${restaurant.address}, ${restaurant.city}</p>
            `;

            card.addEventListener('click', async () => {
                card.classList.add('loading');
                try {
                    const menu = await fetchMenu(restaurant._id);
                    showModal(restaurant, menu);
                } catch (error) {
                    console.error('Error:', error);
                    alert('Failed to load menu. Please try again.');
                } finally {
                    card.classList.remove('loading');
                }
            });

            restaurantsList.appendChild(card);
        });
    }

    function showModal(restaurant, menu) {
        restaurantInfo.innerHTML = `
            <h2>${restaurant.name}</h2>
            <p><strong>Address:</strong> ${restaurant.address}, ${restaurant.city}</p>
            <hr>
        `;

        if (menu.error) {
            menuItems.innerHTML = `<p class="error">Error loading menu</p>`;
        } else if (!menu.courses || menu.courses.length === 0) {
            menuItems.innerHTML = `<p>No menu available for today</p>`;
        } else {
            menuItems.innerHTML = `
                <h3>Today's Menu:</h3>
                <ul class="menu-list">
                    ${menu.courses.map(course => `
                        <li class="menu-item">
                            <div class="dish-name">${course.name}</div>
                            <div class="dish-price">${course.price}</div>
                            ${course.diets ? `<div class="dish-diets">${course.diets}</div>` : ''}
                        </li>
                    `).join('')}
                </ul>
            `;
        }

        modal.showModal();
    }

    closeBtn.addEventListener('click', () => {
        modal.close();
    });

    // Закрытие по клику вне модального окна
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.close();
        }
    });

    async function init() {
        const restaurants = await fetchRestaurants();
        if (restaurants.length) {
            displayRestaurants(restaurants);
        } else {
            restaurantsList.innerHTML = '<p>No restaurants found</p>';
        }
    }

    init();
});