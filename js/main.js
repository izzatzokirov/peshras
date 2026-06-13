function renderMenu(items) {
    const container = document.getElementById('menu-container');
    container.innerHTML = ''; // Очищаем текст "Загрузка..."

    items.forEach(item => {
        container.innerHTML += `
            <div class="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                <img src="${item.image_url}" class="w-full h-32 object-cover rounded-xl mb-2">
                <h3 class="font-bold text-sm">${item.name}</h3>
                <p class="text-orange-500 font-bold">${item.price} с.</p>
            </div>
        `;
    });
}
