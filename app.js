let allProducts = [];

async function fetchData() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        allProducts = data; 
        displayCard(data);
    } catch (error) {
        document.getElementById("content").innerHTML = `
            <div class="alert alert-danger mt-2" role="alert">
                An error occurred while fetching the data. Please try again later.
            </div>`;
    }
}

function displayCard(data) {
    let card = "";
    data.forEach((item) => {
        card += `
            <div class="col-md-4 pb-3">
                <div class="card product-card">
                    <div class="images-container">
                         <img src="${item?.image}" alt="${item?.title}" 
                            class="product-image">
                    </div>        
                    <div class="card-body product-details">
                         <h5 class="card-title product-title">${item?.title}</h5>
                         <p class="card-text product-description">${item?.description}</p>
                        <div class="product-price">$${item?.price}</div>
                        <button class="btn buy-now-btn w-100">Buy Now</button>
                    </div>
                </div>
            </div>
        `;
    });
    document.getElementById("cards").innerHTML = card;
    document.getElementById("content").style.display = "none";
}

function menClothing() {
    // Filter products where category is "men's clothing"
    const menProducts = allProducts.filter(product => product.category === "men's clothing");
    displayCard(menProducts);
}

function jewelry(){
    // Filter products where category is "jewelry"
    const jewelryProducts = allProducts.filter(product => product.category === "jewelery");
    displayCard(jewelryProducts);
}

function electronics(){
    // Filter products where category is "electronics"
    const electronicsProducts = allProducts.filter(product => product.category === "electronics");
    displayCard(electronicsProducts);
}

function women(){
    // Filter products where category is "women"
    const womenProducts = allProducts.filter(product => product.category === "women's clothing");
    displayCard(womenProducts);
}

fetchData();
