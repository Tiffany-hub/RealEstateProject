fetch('http://localhost:3000/Houses')
  .then(response => response.json())
  .then(data => {
    const housesContainer = document.querySelector('.houses-grid');

    data.forEach(house => {
      const houseCard = document.createElement('div');
      houseCard.classList.add('house-card');

      // Check if the house is sold
      if (house.sold) {
        houseCard.classList.add('sold');
      }

      const image = document.createElement('img');
      image.src = house.image;
      image.alt = house.name;

      const title = document.createElement('h3');
      title.textContent = house.name;

      const price = document.createElement('p');
      price.textContent = `Price: ${house.Price}`;

      const description = document.createElement('p');
      description.textContent = `Description: ${house.Description}`;

      const location = document.createElement('p');
      location.textContent = `Location: ${house.Location}`;

      const contact = document.createElement('p');
      contact.textContent = `Contact: ${house.Contact}`;

      const likeButton = document.createElement('button');
      likeButton.textContent = 'Like';

      // Add event listener to the like button
      likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('liked');
      });

      const buyButton = document.createElement('button');
      buyButton.textContent = 'Buy';

      houseCard.appendChild(image);
      houseCard.appendChild(title);
      houseCard.appendChild(price);
      houseCard.appendChild(description);
      houseCard.appendChild(location);
      houseCard.appendChild(contact);
      houseCard.appendChild(likeButton);
      houseCard.appendChild(buyButton);

      housesContainer.appendChild(houseCard);
    });
  })
  .catch(error => console.error(error));
