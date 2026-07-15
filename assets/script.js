const toggle=document.querySelector('[data-lang-toggle]');
const menu=document.querySelector('.menu-button');
const nav=document.querySelector('.nav');
let lang='ja';
toggle.addEventListener('click',()=>{
  lang=lang==='ja'?'zh':'ja';
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-ja]').forEach(el=>el.innerHTML=el.dataset[lang]);
  toggle.textContent=lang==='ja'?'中文':'日本語';
  document.title=lang==='ja'?'君吉株式会社｜日中ビジネスをつなぐ':'日本君吉株式会社｜连接中日商业合作';
});
menu.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menu.setAttribute('aria-expanded',String(open));
});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
