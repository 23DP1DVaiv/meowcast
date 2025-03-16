document.addEventListener("DOMContentLoaded", () => {
    function getCatFact() {
        fetch('https://catfact.ninja/fact')
            .then(res => res.json())
            .then(data => document.getElementById('fact').textContent = data.fact)
            .catch(() => document.getElementById('fact').textContent = "Kļūda!");
    }
    document.getElementById('factButton').onclick = getCatFact;
    getCatFact(); 
});