function showCategory(category) {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.querySelector(`button[onclick="showCategory('${category}')"]`).classList.add('active');
    
    fetch(`menu.php?category=${category}`)
        .then(response => response.json())
        .then(data => {
            let menuContent = document.getElementById("menu-content");
            menuContent.innerHTML = `<h1>Menu</h1><div class='menu-category'><h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2><hr></div>`;
            
            data.forEach(item => {
                menuContent.innerHTML += `
                    <div class='menu-item'>
                        <img src='${item.toLowerCase().replace(/ /g, "_")}.png' alt='${item}'>
                        <p>${item}</p>
                    </div>`;
            });
        })
        .catch(error => console.error('Error:', error));
}
