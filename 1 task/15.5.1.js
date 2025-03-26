const btn = document.querySelector ('.j-btn-test');
const icon = document.querySelector('.btn-icon');
const nextIcon = document.querySelector('.btn-next');
let count = 0;

 btn.addEventListener ('click', () => {
    count++;

  if (count % 2 ==0) {
    icon.classList.remove('hidden');
    nextIcon.classList.add('hidden');
   }
   else{
    nextIcon.classList.remove('hidden')
    icon.classList.add('hidden')
   }
 });

