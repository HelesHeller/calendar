function setSeasonalBackground() {
    let today = new Date();
    let month = today.getMonth();

    let backgrounds = [
        "1.jpg", // Зима
        "2.jpg", // Весна
        "3.jpg", // Лето
        "4.jpg"  // Осень
    ];

    let season;
    if (month >= 2 && month <= 4) {
        season = 1; // Весна
    } else if (month >= 5 && month <= 7) {
        season = 2; // Лето
    } else if (month >= 8 && month <= 10) {
        season = 3; // Осень
    } else {
        season = 0; // Зима
    }

    document.body.style.backgroundImage = "url('" + backgrounds[season] + "')";}