const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

// 로딩 숫자
let load = 0;

let interval = setInterval(blurring, 30); // 0.03초 시간마다 반복해서 함수 실행

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(interval); // 위의 반복인터벌을 중지한다.
  }
  loadText.textContent = `${load}%`; // 벡틱 문자열 `

  loadText.style.opactiy = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
