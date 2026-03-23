async function testEndpoints() {
    try {
        console.log("Testing POST /api/contact...");
        const res1 = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: "Test User",
                email: "test@example.com",
                subject: "Testing API",
                message: "This is a test message from native fetch."
            })
        });
        const data1 = await res1.json();
        console.log("Contact Response:", data1);

        console.log("Testing GET /api/portfolio/projects...");
        const res2 = await fetch('http://localhost:5000/api/portfolio/projects');
        const data2 = await res2.json();
        console.log("Projects Response:", data2);
    } catch (error) {
        console.error("Test Failed. Is the backend server running?", error);
    }
}
testEndpoints();
