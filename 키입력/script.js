const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class="key">
  ${e.key}
  <small>event.key</small>
</div>

<div class="key">
  ${e.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${e.code}
  <small>event.code</small>
</div>`;
});

window.addEventListener('click', (e) => {
  console.log(`클릭한 좌표 : (${e.clientX}px, ${e.clientY}px)`);
});
