<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Indian Pickles & Traditional Foods</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f0f4f0;
            color: #333;
        }

        header {
            background: linear-gradient(135deg, #2d5016 0%, #4a7c2c 100%);
            color: white;
            padding: 15px 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .header-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo h1 {
            font-size: 24px;
            font-weight: 600;
        }

        .logo p {
            font-size: 12px;
            opacity: 0.9;
        }

        .cart-btn {
            background: white;
            color: #2d5016;
            padding: 10px 20px;
            border-radius: 25px;
            border: none;
            cursor: pointer;
            font-weight: 600;
            position: relative;
            transition: transform 0.2s;
        }

        .cart-btn:hover {
            transform: scale(1.05);
        }

        .cart-count {
            position: absolute;
            top: -8px;
            right: -8px;
            background: #e74c3c;
            color: white;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: bold;
        }

        .banner-carousel {
            max-width: 1200px;
            margin: 20px auto;
            position: relative;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .banner-slides {
            display: flex;
            transition: transform 0.5s ease;
        }

        .banner-slide {
            min-width: 100%;
            height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            font-weight: bold;
            color: white;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .banner-nav {
            position: absolute;
            bottom: 15px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 8px;
        }

        .banner-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(255,255,255,0.5);
            cursor: pointer;
            transition: background 0.3s;
        }

        .banner-dot.active {
            background: white;
        }

        .filters {
            max-width: 1200px;
            margin: 20px auto;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .filter-row {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            align-items: center;
        }

        .filter-group {
            flex: 1;
            min-width: 150px;
        }

        .filter-group label {
            display: block;
            font-size: 13px;
            font-weight: 600;
            margin-bottom: 5px;
            color: #2d5016;
        }

        .filter-group select,
        .filter-group input {
            width: 100%;
            padding: 8px 12px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
        }

        .price-inputs {
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .price-inputs input {
            width: 80px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
        }

        .product-card {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 20px rgba(0,0,0,0.12);
        }

        .product-images {
            position: relative;
            height: 200px;
            overflow: hidden;
            background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
        }

        .product-slider {
            display: flex;
            transition: transform 0.3s ease;
            height: 100%;
        }

        .product-image {
            min-width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 80px;
        }

        .slider-dots {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 5px;
        }

        .slider-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: rgba(255,255,255,0.6);
            cursor: pointer;
        }

        .slider-dot.active {
            background: white;
        }

        .product-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background: #4a7c2c;
            color: white;
            padding: 4px 10px;
            border-radius: 12px;
            font-size: 11px;
            font-weight: 600;
        }

        .product-badge.nonveg {
            background: #d32f2f;
        }

        .product-info {
            padding: 15px;
        }

        .product-name {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 5px;
            color: #2d5016;
        }

        .product-desc {
            font-size: 13px;
            color: #666;
            margin-bottom: 10px;
        }

        .product-sizes {
            display: flex;
            gap: 8px;
            margin-bottom: 10px;
        }

        .size-btn {
            padding: 4px 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            background: white;
            cursor: pointer;
            font-size: 12px;
            transition: all 0.2s;
        }

        .size-btn:hover {
            border-color: #4a7c2c;
        }

        .size-btn.active {
            background: #4a7c2c;
            color: white;
            border-color: #4a7c2c;
        }

        .product-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .price {
            font-size: 20px;
            font-weight: bold;
            color: #2d5016;
        }

        .add-btn {
            background: #4a7c2c;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: 600;
            transition: background 0.2s;
        }

        .add-btn:hover {
            background: #2d5016;
        }

        .cart-sidebar {
            position: fixed;
            right: -400px;
            top: 0;
            width: 400px;
            height: 100vh;
            background: white;
            box-shadow: -2px 0 10px rgba(0,0,0,0.1);
            transition: right 0.3s;
            z-index: 1000;
            display: flex;
            flex-direction: column;
        }

        .cart-sidebar.open {
            right: 0;
        }

        .cart-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.5);
            z-index: 999;
            display: none;
        }

        .cart-overlay.show {
            display: block;
        }

        .cart-header {
            background: #2d5016;
            color: white;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .cart-header h2 {
            font-size: 20px;
        }

        .close-cart {
            background: none;
            border: none;
            color: white;
            font-size: 28px;
            cursor: pointer;
            line-height: 1;
        }

        .cart-items {
            flex: 1;
            overflow-y: auto;
            padding: 20px;
        }

        .cart-item {
            display: flex;
            gap: 15px;
            padding: 15px;
            background: #f9f9f9;
            border-radius: 8px;
            margin-bottom: 15px;
        }

        .cart-item-image {
            font-size: 40px;
        }

        .cart-item-details {
            flex: 1;
        }

        .cart-item-name {
            font-weight: 600;
            margin-bottom: 5px;
        }

        .cart-item-size {
            font-size: 12px;
            color: #666;
            margin-bottom: 8px;
        }

        .quantity-controls {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .qty-btn {
            width: 28px;
            height: 28px;
            border: 1px solid #ddd;
            background: white;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
        }

        .qty-btn:hover {
            background: #f0f0f0;
        }

        .cart-item-price {
            font-weight: bold;
            color: #2d5016;
        }

        .remove-item {
            background: #e74c3c;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
        }

        .cart-footer {
            padding: 20px;
            border-top: 2px solid #eee;
        }

        .cart-total {
            display: flex;
            justify-content: space-between;
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 15px;
            color: #2d5016;
        }

        .checkout-btn {
            width: 100%;
            background: #25D366;
            color: white;
            border: none;
            padding: 15px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }

        .checkout-btn:hover {
            background: #1da851;
        }

        .clear-cart {
            width: 100%;
            background: #666;
            color: white;
            border: none;
            padding: 12px;
            border-radius: 8px;
            font-size: 14px;
            cursor: pointer;
            margin-top: 10px;
        }

        .empty-cart {
            text-align: center;
            padding: 40px 20px;
            color: #999;
        }

        @media (max-width: 768px) {
            .cart-sidebar {
                width: 100%;
                right: -100%;
            }

            .products-grid {
                grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                gap: 15px;
            }

            .filter-row {
                flex-direction: column;
            }

            .filter-group {
                width: 100%;
            }

            .banner-slide {
                height: 200px;
                font-size: 24px;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="header-content">
            <div class="logo">
                <h1>🌿 Green Harvest Foods</h1>
                <p>Authentic Indian Pickles & Traditional Foods</p>
            </div>
            <button class="cart-btn" onclick="toggleCart()">
                🛒 Cart
                <span class="cart-count" id="cartCount">0</span>
            </button>
        </div>
    </header>

    <div class="banner-carousel">
        <div class="banner-slides" id="bannerSlides">
            <div class="banner-slide" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
                🥭 Fresh Homemade Pickles - 20% OFF
            </div>
            <div class="banner-slide" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)">
                🌰 Traditional Podis - Buy 2 Get 1 Free
            </div>
            <div class="banner-slide" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)">
                🍬 Sweet Delights - New Arrivals
            </div>
        </div>
        <div class="banner-nav" id="bannerNav"></div>
    </div>

    <div class="filters">
        <div class="filter-row">
            <div class="filter-group">
                <label>Category</label>
                <select id="categoryFilter" onchange="applyFilters()">
                    <option value="all">All Products</option>
                    <option value="pickles">Pickles</option>
                    <option value="podis">Podis</option>
                    <option value="sweets">Sweets</option>
                </select>
            </div>
            <div class="filter-group">
                <label>Type</label>
                <select id="typeFilter" onchange="applyFilters()">
                    <option value="all">All</option>
                    <option value="veg">Veg</option>
                    <option value="nonveg">Non-Veg</option>
                </select>
            </div>
            <div class="filter-group">
                <label>Price Range</label>
                <div class="price-inputs">
                    <input type="number" id="minPrice" placeholder="Min" onchange="applyFilters()">
                    <span>-</span>
                    <input type="number" id="maxPrice" placeholder="Max" onchange="applyFilters()">
                </div>
            </div>
            <div class="filter-group">
                <label>Sort By</label>
                <select id="sortFilter" onchange="applyFilters()">
                    <option value="name">Name</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                </select>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="products-grid" id="productsGrid"></div>
    </div>

    <div class="cart-overlay" id="cartOverlay" onclick="toggleCart()"></div>

    <div class="cart-sidebar" id="cartSidebar">
        <div class="cart-header">
            <h2>Your Cart</h2>
            <button class="close-cart" onclick="toggleCart()">×</button>
        </div>
        <div class="cart-items" id="cartItems"></div>
        <div class="cart-footer">
            <div class="cart-total">
                <span>Total:</span>
                <span id="cartTotal">₹0</span>
            </div>
            <button class="checkout-btn" onclick="checkout()">
                📱 Checkout on WhatsApp
            </button>
            <button class="clear-cart" onclick="clearCart()">Clear Cart</button>
        </div>
    </div>

    <script>
        const products = [
            { id: 1, name: 'Avaakaya Mango Pickle', category: 'pickles', type: 'veg', images: ['🥭', '🌶️', '🫙'], desc: 'Andhra style spicy mango pickle', sizes: [{size: '250g', price: 199}, {size: '500g', price: 349}, {size: '1kg', price: 599}] },
            { id: 2, name: 'Lemon Pickle', category: 'pickles', type: 'veg', images: ['🍋', '🌿', '🫙'], desc: 'Tangy citrus pickle', sizes: [{size: '250g', price: 179}, {size: '500g', price: 299}] },
            { id: 3, name: 'Gongura Pickle', category: 'pickles', type: 'veg', images: ['🌿', '🌶️', '🫙'], desc: 'Sorrel leaves pickle', sizes: [{size: '250g', price: 199}, {size: '500g', price: 359}] },
            { id: 4, name: 'Chicken Pickle', category: 'pickles', type: 'nonveg', images: ['🍗', '🌶️', '🫙'], desc: 'Spicy chicken pickle', sizes: [{size: '250g', price: 299}, {size: '500g', price: 549}] },
            { id: 5, name: 'Prawn Pickle', category: 'pickles', type: 'nonveg', images: ['🦐', '🌶️', '🫙'], desc: 'Coastal style prawn pickle', sizes: [{size: '250g', price: 349}, {size: '500g', price: 649}] },
            { id: 6, name: 'Garlic Pickle', category: 'pickles', type: 'veg', images: ['🧄', '🌶️', '🫙'], desc: 'Pungent garlic pickle', sizes: [{size: '250g', price: 189}, {size: '500g', price: 329}] },
            { id: 7, name: 'Idli Podi', category: 'podis', type: 'veg', images: ['🌰', '🌶️', '🥄'], desc: 'Classic gunpowder', sizes: [{size: '100g', price: 99}, {size: '250g', price: 199}, {size: '500g', price: 349}] },
            { id: 8, name: 'Curry Leaf Podi', category: 'podis', type: 'veg', images: ['🍃', '🌰', '🥄'], desc: 'Aromatic curry leaf powder', sizes: [{size: '100g', price: 89}, {size: '250g', price: 179}] },
            { id: 9, name: 'Garlic Podi', category: 'podis', type: 'veg', images: ['🧄', '🌰', '🥄'], desc: 'Garlic flavored podi', sizes: [{size: '100g', price: 109}, {size: '250g', price: 219}] },
            { id: 10, name: 'Flax Seed Podi', category: 'podis', type: 'veg', images: ['🌾', '🌰', '🥄'], desc: 'Healthy flax podi', sizes: [{size: '100g', price: 129}, {size: '250g', price: 249}] },
            { id: 11, name: 'Mysore Pak', category: 'sweets', type: 'veg', images: ['🟨', '🍯', '🎁'], desc: 'Classic ghee sweet', sizes: [{size: '250g', price: 199}, {size: '500g', price: 379}] },
            { id: 12, name: 'Ladoo', category: 'sweets', type: 'veg', images: ['🟡', '🥥', '🎁'], desc: 'Traditional ladoo', sizes: [{size: '250g', price: 149}, {size: '500g', price: 279}, {size: '1kg', price: 499}] },
            { id: 13, name: 'Kaju Katli', category: 'sweets', type: 'veg', images: ['🔶', '🌰', '🎁'], desc: 'Cashew sweet', sizes: [{size: '250g', price: 299}, {size: '500g', price: 569}] },
            { id: 14, name: 'Jaggery Sweets', category: 'sweets', type: 'veg', images: ['🟤', '🍯', '🎁'], desc: 'Healthy jaggery treats', sizes: [{size: '250g', price: 159}, {size: '500g', price: 299}] },
        ];

        let cart = [];
        let currentBanner = 0;

        window.onload = function() {
            loadCart();
            renderProducts(products);
            initBanner();
            updateCartUI();
        };

        function initBanner() {
            const nav = document.getElementById('bannerNav');
            for (let i = 0; i < 3; i++) {
                const dot = document.createElement('div');
                dot.className = 'banner-dot' + (i === 0 ? ' active' : '');
                dot.onclick = () => setBanner(i);
                nav.appendChild(dot);
            }
            setInterval(() => {
                currentBanner = (currentBanner + 1) % 3;
                setBanner(currentBanner);
            }, 4000);
        }

        function setBanner(index) {
            currentBanner = index;
            document.getElementById('bannerSlides').style.transform = 'translateX(-' + (index * 100) + '%)';
            document.querySelectorAll('.banner-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }

        function renderProducts(productList) {
            const grid = document.getElementById('productsGrid');
            grid.innerHTML = '';
            
            productList.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card';
                
                let imagesHtml = '';
                product.images.forEach(img => {
                    imagesHtml += '<div class="product-image">' + img + '</div>';
                });
                
                let dotsHtml = '';
                product.images.forEach((_, i) => {
                    dotsHtml += '<div class="slider-dot ' + (i === 0 ? 'active' : '') + '" onclick="setProductImage(' + product.id + ', ' + i + ')"></div>';
                });
                
                let sizesHtml = '';
                product.sizes.forEach((s, i) => {
                    sizesHtml += '<button class="size-btn ' + (i === 0 ? 'active' : '') + '" onclick="selectSize(' + product.id + ', ' + i + ')">' + s.size + '</button>';
                });
                
                card.innerHTML = '<div class="product-images">' +
                    '<div class="product-slider" id="slider-' + product.id + '">' + imagesHtml + '</div>' +
                    '<div class="slider-dots" id="dots-' + product.id + '">' + dotsHtml + '</div>' +
                    '<div class="product-badge ' + product.type + '">' + (product.type === 'veg' ? '🟢 VEG' : '🔴 NON-VEG') + '</div>' +
                    '</div>' +
                    '<div class="product-info">' +
                    '<div class="product-name">' + product.name + '</div>' +
                    '<div class="product-desc">' + product.desc + '</div>' +
                    '<div class="product-sizes" id="sizes-' + product.id + '">' + sizesHtml + '</div>' +
                    '<div class="product-footer">' +
                    '<div class="price" id="price-' + product.id + '">₹' + product.sizes[0].price + '</div>' +
                    '<button class="add-btn" onclick="addToCart(' + product.id + ')">Add to Cart</button>' +
                    '</div></div>';
                
                grid.appendChild(card);
            });
        }

        function setProductImage(productId, index) {
            const slider = document.getElementById('slider-' + productId);
            slider.style.transform = 'translateX(-' + (index * 100) + '%)';
            document.querySelectorAll('#dots-' + productId + ' .slider-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }

        function selectSize(productId, sizeIndex) {
            const product = products.find(p => p.id === productId);
            document.querySelectorAll('#sizes-' + productId + ' .size-btn').forEach((btn, i) => {
                btn.classList.toggle('active', i === sizeIndex);
            });
            document.getElementById('price-' + productId).textContent = '₹' + product.sizes[sizeIndex].price;
        }

        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const sizeButtons = document.querySelectorAll('#sizes-' + productId + ' .size-btn');
            let selectedSizeIndex = 0;
            sizeButtons.forEach((btn, i) => {
                if (btn.classList.contains('active')) selectedSizeIndex = i;
            });
            
            const selectedSize = product.sizes[selectedSizeIndex];
            const cartItemId = productId + '-' + selectedSizeIndex;
            
            const existingItem = cart.find(item => item.cartId === cartItemId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({
                    cartId: cartItemId,
                    productId: productId,
                    name: product.name,
                    image: product.images[0],
                    size: selectedSize.size,
                    price: selectedSize.price,
                    quantity: 1
                });
            }
            
            saveCart();
            updateCartUI();
        }

        function updateQuantity(cartId, delta) {
            const item = cart.find(i => i.cartId === cartId);
            if (item) {
                item.quantity += delta;
                if (item.quantity <= 0) {
                    cart = cart.filter(i => i.cartId !== cartId);
                }
                saveCart();
                updateCartUI();
            }
        }

        function removeFromCart(cartId) {
            cart = cart.filter(i => i.cartId !== cartId);
            saveCart();
            updateCartUI();
        }

        function clearCart() {
            if (confirm('Clear all items from cart?')) {
                cart = [];
                saveCart();
                updateCartUI();
            }
        }

        function updateCartUI() {
            const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
            const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            document.getElementById('cartCount').textContent = cartCount;
            document.getElementById('cartTotal').textContent = '₹' + cartTotal;
            
            const cartItems = document.getElementById('cartItems');
            if (cart.length === 0) {
                cartItems.innerHTML = '<div class="empty-cart">🛒<br>Your cart is empty</div>';
            } else {
                let itemsHtml = '';
                cart.forEach(item => {
                    itemsHtml += '<div class="cart-item">' +
                        '<div class="cart-item-image">' + item.image + '</div>' +
                        '<div class="cart-item-details">' +
                        '<div class="cart-item-name">' + item.name + '</div>' +
                        '<div class="cart-item-size">' + item.size + '</div>' +
                        '<div class="quantity-controls">' +
                        '<button class="qty-btn" onclick="updateQuantity(\'' + item.cartId + '\', -1)">-</button>' +
                        '<span>' + item.quantity + '</span>' +
                        '<button class="qty-btn" onclick="updateQuantity(\'' + item.cartId + '\', 1)">+</button>' +
                        '<span class="cart-item-price">₹' + (item.price * item.quantity) + '</span>' +
                        '</div></div>' +
                        '<button class="remove-item" onclick="removeFromCart(\'' + item.cartId + '\')">Remove</button>' +
                        '</div>';
                });
                cartItems.innerHTML = itemsHtml;
            }
        }

        function toggleCart() {
            document.getElementById('cartSidebar').classList.toggle('open');
            document.getElementById('cartOverlay').classList.toggle('show');
        }

        function checkout() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }

            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            let message = '🛒 *Order from Green Harvest Foods*\n\n';
            
            cart.forEach(item => {
                message += item.image + ' *' + item.name + '*\n';
                message += 'Size: ' + item.size + '\n';
                message += 'Qty: ' + item.quantity + ' x ₹' + item.price + ' = ₹' + (item.price * item.quantity) + '\n\n';
            });
            
            message += '--------------------------------\n';
            message += '*Total: ₹' + total + '*';
            
            const phoneNumber = '15184332488';
            const whatsappUrl = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
            window.open(whatsappUrl, '_blank');
        }

        function applyFilters() {
            const category = document.getElementById('categoryFilter').value;
            const type = document.getElementById('typeFilter').value;
            const minPrice = parseInt(document.getElementById('minPrice').value) || 0;
            const maxPrice = parseInt(document.getElementById('maxPrice').value) || 999999;
            const sort = document.getElementById('sortFilter').value;
            
            let filtered = products.filter(p => {
                const categoryMatch = category === 'all' || p.category === category;
                const typeMatch = type === 'all' || p.type === type;
                const priceMatch = p.sizes[0].price >= minPrice && p.sizes[0].price <= maxPrice;
                return categoryMatch && typeMatch && priceMatch;
            });
            
            if (sort === 'name') {
                filtered.sort((a, b) => a.name.localeCompare(b.name));
            } else if (sort === 'price-low') {
                filtered.sort((a, b) => a.sizes[0].price - b.sizes[0].price);
            } else if (sort === 'price-high') {
                filtered.sort((a, b) => b.sizes[0].price - a.sizes[0].price);
            }
            
            renderProducts(filtered);
        }

        function saveCart() {
            localStorage.setItem('greenHarvestCart', JSON.stringify(cart));
        }

        function loadCart() {
            const saved = localStorage.getItem('greenHarvestCart');
            if (saved) {
                cart = JSON.parse(saved);
            }
        }
    </script>
</body>
</html>