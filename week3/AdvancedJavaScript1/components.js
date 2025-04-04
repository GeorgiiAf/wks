// components.js
export const restaurantRow = ({ name, address }) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${address}</td>
    `;
    return row;
};

export const restaurantModal = ({ name, address, postalCode, city, phone, company }, { courses }) => {
    const menuHtml = courses?.length ? `
        <ul>
            ${courses.map(({ name, price, diets }) => `<li>${name}, ${price || '?€'}. ${diets || ''}</li>`).join('')}
        </ul>
    ` : '<p>No menu available</p>';

    return `
        <h1>${name}</h1>
        <p>${address}</p>
        <p>${postalCode}, ${city}</p>
        <p>${phone}</p>
        <p>${company}</p>
        ${menuHtml}
    `;
};
