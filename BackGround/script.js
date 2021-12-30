// 사용할 객체를 상수로
const h1 = document.querySelector('h1');
const h3 = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const button = document.querySelector('button');

// id 선택시 getElementByID 사용('id') 그 외 querySelector
const body = document.getElementById('grandient');

// 이벤트 리스너 달기
// button.addEventListener('click', set);

function set() {
  body.style.background =
    'linear-gradient(45deg, ' + color1.value + ',' + color2.value + ')';
}

color1.addEventListener('input', set);
color2.addEventListener('input', set);
