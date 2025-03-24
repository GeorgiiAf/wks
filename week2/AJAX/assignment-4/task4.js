async function fetchData(url, options) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error during request:", error.message);
        throw error;
    }
}

async function createUser() {
    const user = {
        name: 'John Doe',
        job: 'Developer'
    };

    const url = 'https://reqres.in/api/users';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };

    try {
        const userData = await fetchData(url, options);
        console.log('Server response:', userData);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

createUser();
