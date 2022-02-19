           



// let value;

// let arr = [0, 1, 2, 3, 4, 5, 6, 7];
// value = Math.floor(Math.random() * arr.length);
// console.log(value, arr[value]);

////////////////////////////////////////////////////////////////////////////////////////////

// let firstName = "Aman";
// let lastName = "Toktosunov";
// let value;


 
// value = firstName.toUpperCase();
// value = firstName.toUpperCase().concat("-", lastName.toUpperCase());
// value = lastName.indexOf('o');
// value = lastName.includes('a');

// console.log(firstName.toUpperCase().concat("-", lastName.toUpperCase()););

///////////////////////////////////////////////////////////////////////////////////////////////////


// let firstName = "Aman";
// let lastName = "Toktosunov";
// let age = 30;
// let str;

// str = `
//       <ul>
//            <li> First name: ${firstName}</li>
//            <li> Last name: ${lastName}</li>
//            <li> Age: ${age}</li>
//           `;

// document.body.innerHTML = str;

////////////////////////////////////////////////////////////////////////////////////////////////


// const user = {
//       firstName: 'Aman', 
//       age =30, 
//       isAdmin: true, 
//       email: 'aman.com', 
//       'user-address': {
//             city: 'Bishkek'
//       },
//       skills: ['html', 'css', 'js']

// };
// let value;
// let prop = 'skills';
// value = user.firstName;
// value = user['user-address']['city'];
// value = user[prop][1];

// user.info = 'Some info';
// value = user.info;

// user['user-address'].city = 'karakul';
// user['user-address'].country = 'Kyrgyzstan';

// console.log(value);

/////////////////////////////////////////////////////////////////////////////////////////////


// let a = 1;
// let b = 0;
// b = a < 0 ? a : b + 3;
// console.log(b);


////////////////////////////////////////////////////////////////////////////////////////////
new WOW().init();
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    grid: {
      rows: 2,
    },
    spaceBetween: 0,
    keyboard: {
        enabled: true,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper2 = new Swiper(".wrapper-7", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  let menu = document.querySelector('.menu-bar');
  let line1 = document.querySelector('#line-1');
  let line2 = document.querySelector('#line-2');
  let menuPhone = document.querySelector('#menu-phone');
  menu.addEventListener('click', () => {
      line1.classList.toggle('line-active-1');
      line1.classList.toggle('menu-bar-line-1');
      line2.classList.toggle('line-active-2');
      line2.classList.toggle('menu-bar-line-2');
      menuPhone.classList.toggle('menu-phone-active');
      menuPhone.classList.toggle('menu-phone');
  })