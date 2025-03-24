async function createUser() {
    try {
        const userData = {
            name: "Iron Man",
            job: "Superhero"
        };

        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("response from server :", data);

    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

createUser(); 
