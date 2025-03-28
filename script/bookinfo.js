const more = document.getElementsByClassName('more');
const less = document.getElementsByClassName('less');
const hidden = document.getElementsByClassName('hidden');
const follow = document.getElementById('followingMenu');
const number = document.getElementsByClassName('number');
const price = document.getElementsByClassName('price');
const miniBtn = document.querySelectorAll('.miniBtn');
let productPrice = Number(13500);
let topValue;
if(window.innerWidth >= 1200) topValue = 1700;
else topValue = 1100;
window.addEventListener('resize', ()=> {
    if(window.innerWidth >= 1200) topValue = 1700;
    else topValue = 1100;
});
for(let i=0;i<hidden.length;i++){
    more[0].addEventListener('click', () => {
        hidden[i].style.display='block';
        more[0].style.display='none';
    });
}
for(let i=0;i<hidden.length;i++){
    less[0].addEventListener('click', () => {
        hidden[i].style.display='none';
        less[0].style.display='none';
        more[0].style.display='block';
    });
}
window.addEventListener('scroll', function(){
    if(document.documentElement.scrollTop>topValue){
        follow.style.top = document.documentElement.scrollTop - topValue + 'px';
    }
});
miniBtn.forEach((element) =>{
    element.addEventListener('click', () =>{
        let op = element.innerHTML;
        if(op == '+' && Number(number[0].innerText)<999){
            for(let i=0; i<number.length; i++){
                number[i].innerText = Number(number[i].innerHTML) + 1;
            }
        }else if(op == '-' && Number(number[0].innerText)>1){
            for(let i=0; i<number.length; i++){
                number[i].innerText = Number(number[i].innerHTML) - 1;
            }
        }
        for(let i=0; i<price.length; i++){
            price[i].innerText = Number(Number(number[0].innerHTML) * productPrice).toLocaleString('ko-KO');
        }
    });
});