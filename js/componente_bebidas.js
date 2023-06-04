customElements.define('my-component', class extends HTMLElement {
    connectedCallback() {
      const products = [
        {
          image: 'img/cocacola.png',
          title: 'Coca Cola',
          description: 'Descripción',
          price: 'Bs.10.00'
        },
        {
          image: 'img/fanta.png',
          title: 'Fanta',
          description: 'Descripción',
          price: 'Bs.10.00'
        },
        {
          image: 'img/sprite.png',
          title: 'Sprite',
          description: 'Descripcion',
          price: 'Bs.10.00'
        },
        {
          image: 'img/cocacola.png',
          title: 'Coca Cola',
          description: 'Descripción',
          price: 'Bs.10.00'
        },
        {
          image: 'img/fanta.png',
          title: 'Fanta',
          description: 'Descripción',
          price: 'Bs.10.00'
        },
        {
          image: 'img/sprite.png',
          title: 'Sprite',
          description: 'Descripcion',
          price: 'Bs.10.00'
        }
      ];
  
      // Dividir los productos en grupos de 3
      const productGroups = [];
      for (let i = 0; i < products.length; i += 3) {
        productGroups.push(products.slice(i, i + 3));
      }
  
      // Genera el HTML del carrusel
      const carouselHTML = `
        <div id="productCarousel" class="carousel slide" data-bs-ride="carousel ">
          <div class="carousel-inner">
            ${productGroups.map((group, index) => `
              <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <div class="container">
                  <div class="row">
                    ${group.map(product => `
                      <div class="col-md-4">
                        <div class="product">
                          <img src="${product.image}" alt="Imagen del producto" class="product-image img-fluid">
                          <div class="product-background" data-bs-toggle="modal" data-bs-target="#productModal"></div>
                          <div class="fondo"></div>
                          <div class="product-details">
                            <h6 class="text-white product-title">${product.title}</h6>
                            <p class="text-white product-description">${product.description}</p>
                            <p class="text-white product-price">${product.price}</p>
                          </div>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
          </button>
        </div>
      `;
  
      // Agrega el carrusel al componente
      this.innerHTML = carouselHTML;
              // Agrega el evento de clic al hacer clic en el fondo transparente del producto
              const productBackgrounds = this.querySelectorAll('.product-background');
            productBackgrounds.forEach(background => {
            background.addEventListener('click', () => {
            const product = background.closest('.product');
            const imageSrc = product.querySelector('.product-image').src;
            const title = product.querySelector('.text-white').textContent;
            const description = product.querySelector('.text-white:nth-child(2)').textContent;
            const price = product.querySelector('.text-white:nth-child(3)').textContent;
  
            document.getElementById('modalImage').src = imageSrc;
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalDescription').textContent = description;
            document.getElementById('modalPrice').textContent = price;
            });
          });
    }
  });