// Вставьте сюда вашу ссылку, которую вы получили после развертывания
const API_URL = "https://script.google.com/macros/s/AKfycbwXFUyVhoXinO47G6v2wOnM9C5CexepC8cY3XRezgZJ8WkKJS0qJPtm2cBrjL_LI5pahw/exec";

async function fetchMenu() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        renderMenu(data); // Отправляем данные в функцию отрисовки
    } catch (error) {
        console.error("Ошибка загрузки:", error);
    }
}

fetchMenu();
