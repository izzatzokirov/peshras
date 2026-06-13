function renderMenu(items) {
    const container = document.getElementById('menu-container');
    container.innerHTML = ''; 

    items.forEach(item => {
        container.innerHTML += `
            <div class="bg-slate-900 p-4 rounded-2xl border border-slate-800">
                <img src="${item.image_url}" class="w-full h-32 object-cover rounded-xl mb-2">
                <h3 class="font-bold text-sm">${item.name}</h3>
                <p class="text-orange-500 font-bold mb-3">${item.price} с.</p>
                <button 
                    onclick='addToCart(${JSON.stringify(item)})' 
                    class="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 rounded-xl transition">
                    Заказать
                </button>
            </div>
        `;
    });
}

function addToCart(item) {
    // Получаем текущую корзину
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Правило: один ресторан
    if (cart.length > 0 && cart[0].restaurant_id !== item.restaurant_id) {
        alert("У вас в корзине товары из другого ресторана. Сначала очистите корзину.");
        return;
    }

    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(item.name + " добавлен в корзину!");
}
