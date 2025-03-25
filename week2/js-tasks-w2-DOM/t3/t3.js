const targetElement = document.getElementById('target')
const browserName = navigator.userAgentData?.brands[0]?.brand || 'Unknown Browser'
const browserVersion = navigator.userAgentData?.brands[0]?.version || 'Unknown Version'
const browserInfo = `${browserName} ${browserVersion}`


const p1 = document.createElement('p')
p1.textContent = browserInfo
targetElement.appendChild(p1)

const osName = navigator.userAgentData?.platform || 'Unknown OS'
const p2 = document.createElement('p')
p2.textContent = osName
targetElement.appendChild(p2)

const screenWidth = screen.width
const screenHeight = screen.height
const p3 = document.createElement('p')
p3.textContent = `Screen width : ${screenWidth}, Screen height : ${screenHeight}`
targetElement.appendChild(p3)


const availWidth = screen.availWidth;
const availHeight = screen.availHeight;
const p4 = document.createElement('p');
p4.textContent = `Available Screen Space: ${availWidth}x${availHeight}`;
targetElement.appendChild(p4);

const now = new Date()
const optionsDate = { day: 'numeric', month: 'long', year: 'numeric' };
const optionsTime = { hour: '2-digit', minute: '2-digit' };

const finnishDate = now.toLocaleDateString('fi-FI', optionsDate);
const finnishTime = now.toLocaleTimeString('fi-FI', optionsTime);

const p5 = document.createElement('p');
p5.textContent = `Current Date: ${finnishDate}`;
targetElement.appendChild(p5);

const p6 = document.createElement('p');
p6.textContent = `Current Time: ${finnishTime}`;
targetElement.appendChild(p6);