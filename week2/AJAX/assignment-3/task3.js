
// function to fetch data from the server

async function fetchData(method, url, body = null) {
    try {
        const options = {
            method,
            headers: { "Content-Type": "application/json" }
        };

        if (body) {
            options.body = JSON.stringify(body);
        }

        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`error  ${response.status}: ${response.statusText}`);
        }

        let data = null;
        const contentLength = response.headers.get("Content-Length");
        if (contentLength && contentLength !== "0") {
            data = await response.json();
        }

        console.log(`success ${method}-request:`, data);
    } catch (error) {
        console.error(`error ${method}-request:`, error.message);
    }
}

// Test cases

// first with error 
fetchData("GET", "https://reqres.in/api/unknown/23");
fetchData("POST", "https://reqres.in/api/unknown/23", { name: "Iron Man", job: "Superhero" });
fetchData("PUT", "https://reqres.in/api/unknown/23", { name: "Tony Stark", job: "Lead" });
fetchData("DELETE", "https://reqres.in/api/unknown/23");