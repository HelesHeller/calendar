function generateCalendar() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let firstDay = new Date(year, month, 1);
    let lastDay = new Date(year, month + 1, 0);

    let calendarTable = document.getElementById("calendar");
    let headerRow = calendarTable.insertRow();
    let daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

    if(daysOfWeek.length === "Сб"|| daysOfWeek === "Вс"){
        cell.classList.add("weekend");
    }

    for (let i = 0; i < 7; i++) {
        let headerCell = headerRow.insertCell();
        headerCell.textContent = daysOfWeek[i];
    }

    let currentDate = new Date(firstDay);
    let currentRow = calendarTable.insertRow();
    let dayOfWeek = firstDay.getDay(); // День недели первого дня месяца


    for (let i = 0; i < dayOfWeek; i++)
    {
        let cell = currentRow.insertCell();
        cell.textContent = "";
    }

    while (currentDate <= lastDay) {
        let cell = currentRow.insertCell();
        cell.textContent = currentDate.getDate();
        if (currentDate.getMonth() !== month) {
            cell.style.color = "gray";
        }
        if (dayOfWeek === 5 || dayOfWeek === 6) { // Если текущий день суббота или воскресенье
            cell.classList.add("weekend"); // Добавляем класс 'weekend'
        }

        dayOfWeek++;
        if (dayOfWeek === 7) { // Если текущий день воскресенье, создаем новую строку
            currentRow = calendarTable.insertRow();
            dayOfWeek = 0; // Сбросить счетчик дней недели
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }
}
