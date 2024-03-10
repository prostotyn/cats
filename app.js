const url = `https://api.thecatapi.com/v1/images/search?limit=12`;
const api_key = "live_okPvldFNKaPGfy6a8lO1zMn0oMBXY3QC3FE2EWrZdLiCCGX43p3FMP5ezbkDpEYE";

const refreshButton = document.getElementById('refreshButton');
const grid = document.getElementById('grid');

function fetchCats() {
  fetch(url, { headers: { 'x-api-key': api_key } })
    .then(response => response.json())
    .then(data => {
      const imagesData = data;
      grid.innerHTML = ''; // Clear existing images

      imagesData.forEach(imageData => {
        const image = document.createElement('img');
        image.src = imageData.url;

        const gridCell = document.createElement('div');
        gridCell.classList.add('col', 'col-lg');
        gridCell.appendChild(image);

        grid.appendChild(gridCell);
      });
    })
}

refreshButton.addEventListener('click', fetchCats);
function goBack() {
      window.history.back();
    }


fetchCats();

function getCatImages(breedId) {
  const apiBreedUrl = `${url}&breed_ids=${breedId}&api_key=${api_key}`;

  fetch(apiBreedUrl)
    .then(response => response.json())
    .then(data => {
      const imagesData = data;
      const breedImages = document.getElementById('breedImages');
      breedImages.innerHTML = ''; 

      imagesData.forEach(imageData => {
        const image = document.createElement('img');
        image.src = imageData.url;

        const gridCell = document.createElement('div');
        gridCell.classList.add('col', 'col-lg');
        gridCell.appendChild(image);

        breedImages.appendChild(gridCell);
      });
    })
}