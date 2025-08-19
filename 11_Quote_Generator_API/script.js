document.addEventListener("DOMContentLoaded", () => {
    const showQuote = document.getElementById("Quotes");
    const author = document.getElementById("author");
    const copy = document.getElementById("copy-quote");

    async function getQuote() {
        const url = "https://api.quotable.io/random";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            showQuote.textContent = result.content;
            author.textContent = result.author;
        } catch (error) {
            console.log("Error : ", error);
        }
    }

    getQuote();

    copy.addEventListener('click', () => {
        navigator.clipboard.writeText(showQuote.innerText);
    });

    document.getElementById("new-quote").addEventListener('click', getQuote);
});
