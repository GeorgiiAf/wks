async function getUser() {
    try {
        const response = await fetch('https://reqres.in/api/users/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("the result : ", data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

getUser(); 
