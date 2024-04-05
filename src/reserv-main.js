// import { pixabayAPI } from './js/pixabay-api.js';
// import { renderImages } from './js/render-functions.js';

// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// const form = document.querySelector('.search-form');
// const searchInput = document.querySelector('.search-images');

// form.addEventListener('submit', function (event) {
//   event.preventDefault();
//   const value = searchInput.value.trim();
//   if (value === '') {
//     alert('Please enter a search term!');
//     return;
//   }

//   pixabayAPI(value)
//     .then(data => {
//       if (data.hits.length === 0) {
//         iziToast.error({
//           title: 'Error!',
//           message:
//             'Sorry, there are no images matching your search query. Please try again!',
//           position: 'topRight',
//         });
//       }
//       return data;
//     })
//     .catch(error => {
//       console.error('Error fetching images:', error);
//       throw error;
//     });
// renderImages(data.hits);
// });



// SECOND VARIANT 
// import { pixabayAPI } from './js/pixabay-api.js';
// import { renderImages } from './js/render-functions.js';


// const form = document.querySelector('.search-form');
// const searchInput = document.querySelector('.search-images');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const value = searchInput.value.trim();
//     if (value === '') {
//         alert('Please enter a search term!');
//         return;
//     }

//     pixabayAPI(value)
//         .then(data => {
//             if (data.hits.length === 0) {
//                 alert('Sorry, there are no images matching your search query. Please try again!');
//                 return;
//             }
//             renderImages(data.hits);
//         })
//         .catch(error => console.error('Error fetching images:', error));
// });