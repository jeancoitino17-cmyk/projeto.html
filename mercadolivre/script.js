const products = [
    {
        id: 1,
        title: "Smartphone Samsung Galaxy S21",
        price: 2999.99,
        discount: 10,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500"
    },
    {
        id: 2,
        title: "Notebook Dell Inspiron 15",
        price: 3999.99,
        discount: 15,
        image: "https://i.dell.com/sites/csimages/Video_Imagery/all/inspiron-15-3000-laptop.jpg"
    },
    {
        id: 3,
        title: "Fone de Ouvido Bluetooth JBL",
        price: 199.99,
        discount: 5,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500"
    },
    {
        id: 4,
        title: "Smartwatch Apple Watch Series 6",
        price: 2499.99,
        discount: 20,
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500"
    },
    {
        id: 5,
        title: "Câmera Digital Canon EOS Rebel T7",
        price: 2999.99,
        discount: 10,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
    },
    {
        id: 6,
        title: "Console de Videogame PlayStation 5",
        price: 4999.99,
        discount: 25,
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500"
    },
    {
        id: 7,
        title: "Tablet Apple iPad Pro",
        price: 5999.99,
        discount: 15,
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-11-select-202104_GEO_BR?wid=940&hei=1112&fmt=png-alpha&.v=1617864667000"
    },
    {
        id: 8,
        title: "Smart TV LG OLED 55''",
        price: 7999.99,
        discount: 20,
        image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500"
    },
    {
        id: 9,
        title: "Caixa de Som Bluetooth Bose SoundLink",
        price: 499.99,
        discount: 10,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500"
    },
    {
        id: 10,
        title: "Câmera de Ação GoPro HERO9 Black",
        price: 2499.99,
        discount: 15,
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500"
    },
    {
        id: 11,
        title: "Impressora Multifuncional HP DeskJet 3755",
        price: 599.99,
        discount: 5,
        image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500"
    },
    {
        id: 12,
        title: "Roteador Wi-Fi TP-Link Archer C6",
        price: 199.99,
        discount: 10,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
    }
];

function formatPrice(price) {
    return price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function createProductCard(product) {
    return `
    <div class="product-card">
        <img class="product-image" src="${product.image}" alt="${product.title}" style="object-fit: contain;">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-price">${formatPrice(product.price)}</p>
        <span class="product-discount" style="color: #00a650; font-weight: bold; font-size: 14px;">${product.discount}% OFF</span>
    </div>
    `;
}

function renderProducts(products) {
    const grid = document.getElementById("productsGrid");
    grid.innerHTML = products.map(createProductCard).join("");
}


function searchProducts(searchTerm) {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchInput));
    renderProducts(filteredProducts);
}


    


document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products);


    document.getElementById("searchBtn").addEventListener("click", searchProducts);

});