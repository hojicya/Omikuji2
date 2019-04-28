'use strict'

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click',()=>{
    const result = ['大吉','中吉','小吉','凶'];
    const n = Math.floor(Math.random() * result.length);
    btn.textContent = result[n];
  });
  btn.addEventListener('mousedown',()=>{
    btn.classList.add('pressed');
  });
  btn.addEventListener('mouseup',()=>{
    btn.classList.remove('pressed');
  });
}
