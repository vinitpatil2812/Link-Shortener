async function generateShortURL() {
    const urlInput = document.getElementById("urlInput").value;

    if (!urlInput) {
        alert("Please enter a valid URL");
        return;
    }

    try {
        const response = await fetch("http://localhost:8001/url", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: urlInput }),
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById("shortUrl").innerText = `Short URL: http://localhost:8001/url/${data.id}`;
        } else {
            alert(`Error: ${data.error}`);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

async function getAnalytics() {
    const shortIDInput = document.getElementById("urlInput");
    // const shortID = shortIDInput.value;

    if (!shortID) {
        alert("Please enter a Short ID");
        return;
    }

    try {
        const response = await fetch(`http://localhost:8001/url/analytics/${shortID}`);
        const data = await response.json();

        if (response.ok) {
            document.getElementById("analyticsResult").innerText = `Clicks: ${data.clicks}`;
        } else {
            alert(`Error: ${data.error}`);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}
