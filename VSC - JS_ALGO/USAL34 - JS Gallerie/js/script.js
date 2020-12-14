/*const mainImg = document.querySelector('#mainImg');

const subsImg = document.getElementsByClassName('thumbs');

for(let i = 0; i < link.length ; i++) {
    link[i].onclick = function() {
        mainImg.src = element.getAttribute(); 
  }}

addEventListener('click');
*/

const links = document.getElementsByClassName('Thumbs');
const link = document.getElementsByClassName('Thumb');
const mainimg = document.querySelector('#mainImg');


for(let i = 0; i < link.length ; i++) {
    link[i].onclick = function() {
        mainimg.src = link[i].querySelector('img').getAttribute("src");
  }}


