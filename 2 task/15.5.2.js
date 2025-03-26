const btn  = document.querySelector ('button');

btn.addEventListener('click', () =>{
    let screenWidht = window.screen.width;
    let screenHeight = window.screen.height;
  alert(`Ширина: ${screenWidht} Высота: ${screenHeight}`);
});
