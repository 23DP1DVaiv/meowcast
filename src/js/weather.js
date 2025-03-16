document.addEventListener("DOMContentLoaded", () => {
    const weatherElement = document.getElementById("weather");

    fetch("https://wttr.in/Riga?format=j1&lang=lv")
        .then(response => response.json())
        .then(data => {
            const current = data.current_condition[0];
            weatherElement.textContent = `${current.lang_lv[0].value}, ${current.temp_C}°C`;
            weatherIcon.src = current.weatherIconUrl[0].value;
            weatherIcon.alt = current.lang_lv[0].value;
        });
});