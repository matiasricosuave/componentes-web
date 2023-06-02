const products = [
    {
        "title": "titulo",
        "description": "Descripcion",
        "price": "Bs.10.00",
        "image" : "img/cocacola.png"
    },
    {
        "title": "titulo",
        "description": "Descripcion",
        "price": "Bs.10.00",
        "image" : "img/sprite.png"
    },
    {
        "title": "titulo",
        "description": "Descripcion",
        "price": "Bs.10.00",
        "image" : "img/fanta.png"
    }
] 
const productGallerry = document.getElementById('product-gallery');
for(const product of products){
    const productCard = document.createElement('product-card');
    productCard.setAttribute('title', product.title);
    productCard.setAttribute('description', product.description);
    productCard.setAttribute('price', product.price);
    productCard.setAttribute('image', product.image);
    productGallerry.appendChild(productCard);
}