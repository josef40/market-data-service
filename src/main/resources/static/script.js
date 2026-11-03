document.getElementById('fetchButton').addEventListener('click', async (event) => {
    const button = event.currentTarget;
    const input = document.getElementById('tickerInput');
    const ticker = input.value.trim().toUpperCase();
    const display = document.getElementById('priceDisplay');

    if (!ticker) {
        display.textContent = "Please enter a ticker symbol.";
        display.className = "status-error"; // Handled in CSS
        return;
    }

    button.disabled = true;
    input.disabled = true;
    button.textContent = "Loading...";
    display.textContent = "Fetching...";
    display.className = "status-loading";

    try {
        const res = await fetch(`/stock?symbol=${ticker}`);

        if (!res.ok) {
            throw new Error(`Server error: ${res.status}`);
        }

        const data = await res.json();

        if (data && typeof data.c === 'number' && data.t !== 0) {
            display.textContent = `$${data.c.toFixed(2)}`;
            display.className = "status-success";
        } else {
            display.textContent = "Invalid ticker or data unavailable.";
            display.className = "status-error";
        }

    } catch (err) {
        display.textContent = "Error fetching data.";
        display.className = "status-error";
    } finally {
        button.disabled = false;
        input.disabled = false;
        button.textContent = "Fetch";
    }
});