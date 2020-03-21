const MENU = document.getElementById('menu');
const MESSAGE_BLOCK = document.getElementById('message-block');
const BUTTON = document.getElementById('contactSubmit');
const CLOSE_BUTTON = document.getElementById('closeMessageBlock');
const PORTFOLIO_BUTTONS = document.getElementById('portfolio-buttons');
const PORTFOLIO_IMG = document.getElementById('portfolio-img');
const SLIDER_ARR_LEFT = document.getElementById('left-arrow');
const SLIDER_ARR_RIGHT = document.getElementById('right-arrow');
const VERTICAL_PHONE = document.getElementById('vertical-phone');
const HORIZONTAL_PHONE = document.getElementById('horizontal-phone');


MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('span').forEach((element) => {
    element.classList.remove('active');
  });
  event.target.classList.add('active');
});

SLIDER_ARR_LEFT.addEventListener('click', () => {
  changeSlideLeft();
  // changeSlide();
  //document.getElementById("slide1").animate("leaveLeft");
  //document.getElementById("slide2").animate("comeLeft");


});

SLIDER_ARR_RIGHT.addEventListener('click', () => {
  changeSlideRight();
  //document.getElementById("slide2").style.display = "block";
  //document.getElementById("slide2").style.animation="comeRight 3s forwards";
});


function changeSlideRight() {
  const slide1style = document.getElementById("slide1").style.display;
  if (slide1style != 'none') {
    document.getElementById("slide2").style.display = "block";
    VERTICAL_PHONE.style.animation = "leaveRight 1s forwards";
    HORIZONTAL_PHONE.style.animation = "leaveRight 1s forwards";
    document.getElementById("slide2").style.animation = "comeRight 1s forwards";
    setTimeout(() => {document.getElementById("slide1").style.display = "none"},1000);
  } else {
    document.getElementById("slide1").style.display = "block";
    VERTICAL_PHONE.style.animation = "comeRight 1s forwards";
    HORIZONTAL_PHONE.style.animation = "comeRight 1s forwards";
    document.getElementById("slide2").style.animation = "leaveRight 1s forwards";
    setTimeout(() => {document.getElementById("slide2").style.display = "none"},1000);
  }
}

function changeSlideLeft() {
  const slide1style = document.getElementById("slide1").style.display;
  if (slide1style != 'none') {
    document.getElementById("slide2").style.display = "block";
    VERTICAL_PHONE.style.animation = "leaveLeft 1s forwards";
    HORIZONTAL_PHONE.style.animation = "leaveLeft 1s forwards";
    document.getElementById("slide2").style.animation = "comeLeft 1s forwards";
    setTimeout(() => {document.getElementById("slide1").style.display = "none"},1000);
  } else {
    document.getElementById("slide1").style.display = "block";
    VERTICAL_PHONE.style.animation = "comeLeft 1s forwards";
    HORIZONTAL_PHONE.style.animation = "comeLeft 1s forwards";
    document.getElementById("slide2").style.animation = "leaveLeft 1s forwards";
    setTimeout(() => {document.getElementById("slide2").style.display = "none"},1000);
  }
}

VERTICAL_PHONE.addEventListener('click', () => {
  blackPhoneVertical();
});

HORIZONTAL_PHONE.addEventListener('click', () => {
  blackPhoneHorizontal();
});

function blackPhoneVertical() {
  if (VERTICAL_PHONE.src.includes('Black')) {
    document.getElementById("vertical-phone").src = `./assets/img/iPhoneVertical.png`;
  } else {
    document.getElementById("vertical-phone").src = `./assets/img/iPhoneVerticalBlack.png`;
  }
}

function blackPhoneHorizontal() {
  if (HORIZONTAL_PHONE.src.includes('Black')) {
    document.getElementById("horizontal-phone").src = `./assets/img/iPhoneHorizontal.png`;
  } else {
    document.getElementById("horizontal-phone").src = `./assets/img/iPhoneHorizontalBlack.png`;
  }
}

PORTFOLIO_BUTTONS.addEventListener('click', (event) => {
  PORTFOLIO_BUTTONS.querySelectorAll('.portfolio-button').forEach((element) => {
    element.classList.remove('active');
  });
  event.target.classList.add('active');
  randomImg();
});

function randomImg() {
  const images = [
    './assets/img/img1.jpg',
    './assets/img/img2.jpg',
    './assets/img/img3.jpg',
    './assets/img/img4.jpg',
    './assets/img/img5.jpg',
    './assets/img/img6.jpg',
    './assets/img/img7.jpg',
    './assets/img/img8.jpg',
    './assets/img/img9.jpg',
    './assets/img/img10.jpg',
    './assets/img/img11.jpg',
    './assets/img/img12.jpg'
  ];
  images.sort(function() {
    return Math.random() - 0.5;
  });
  PORTFOLIO_IMG.innerHTML = '';
  images.forEach((img) => {
    PORTFOLIO_IMG.innerHTML += `<div><img src="${img}" alt="img"></div>`;
  });
};

PORTFOLIO_IMG.addEventListener('click', (event) => {
  PORTFOLIO_IMG.querySelectorAll('div').forEach((element) => {
    element.classList.remove('active');
  });
  event.target.parentElement.classList.add('active');
});

BUTTON.addEventListener('click', (event) => {
  event.preventDefault();
  const contactName = document.getElementById('contactName').value.toString();
  const contactMail = document.getElementById('contactMail').value.toString();
  const contactSubject = document.getElementById('contactSubject').value.toString();
  const contactComment = document.getElementById('contactComment').value.toString();
  const message = document.getElementById('message');

  if (contactMail !== '' && contactMail.includes('@')) {
    MESSAGE_BLOCK.classList.remove('hidden');
    message.innerText = `
      Письмо отправлено

      ${contactName ? ('Тема:'+contactName) : 'Без темы'}
      ${contactSubject ? ('Описание:'+ contactSubject) : 'Без описания'}
      `;
  }
});

CLOSE_BUTTON.addEventListener('click', (event) => {
  message.innerText = '';
  MESSAGE_BLOCK.classList.add('hidden');
});
