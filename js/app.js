class ProductCard extends HTMLElement {
    constructor() {
      super();
  

      const shadow = this.attachShadow({ mode: 'open' });
      
      const template = document.createElement('template');

      const title = this.getAttribute('title');
      const description = this.getAttribute('description');
      const price = this.getAttribute('price');
      const image = this.getAttribute('image');

      const cardContainer = document.createElement('div');
      cardContainer.classList.add('product-card');
      const contentContainer = document.createElement('div');
      contentContainer.classList.add('product-content');

  
      const imageElement = document.createElement('img');
      imageElement.src = image;
      imageElement.alt = 'Producto';
      cardContainer.appendChild(imageElement);
  
      const titleElement = document.createElement('h3');
      titleElement.classList.add('product-title');
      titleElement.textContent = title;
      cardContainer.appendChild(titleElement);
  
      const descriptionElement = document.createElement('p');
      descriptionElement.classList.add('product-description');
      descriptionElement.textContent = description;
      cardContainer.appendChild(descriptionElement);
  
      const priceElement = document.createElement('p');
      priceElement.classList.add('product-price');
      priceElement.textContent = price;
      cardContainer.appendChild(priceElement);

      cardContainer.appendChild(contentContainer);

      shadow.appendChild(cardContainer);
      const link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', 'bebidas.css');
      shadow.appendChild(link); 
    }
  }
  
  customElements.define('product-card', ProductCard);





