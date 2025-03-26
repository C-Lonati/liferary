const review = document.getElementsByClassName('review');
const reviewBody = document.getElementsByClassName('reviewBody');
const reviewBodySelect = document.getElementsByClassName('reviewBodySelect');
const reviewImg = document.querySelectorAll('.review>.book');
const imgSelect = document.getElementsByClassName('selectImg')
const pageN = document.querySelectorAll('.pageN>a');
const pageNSelect = document.getElementsByClassName('pageNSelect');
for(let i=0;i<review.length;i++){ //반복문 .reveiw의 개수만큼 실행
    review[i].addEventListener('click', () => { 
        if(reviewBody[i].classList.contains('reviewBodySelect')){
            reviewBody[i].classList.remove('reviewBodySelect'); //클릭한 reviewBody에 reviewBodySelect클래스를 삭제
            reviewImg[i].classList.remove('selectImg');
        }else{
            if (reviewBodySelect[0]) {//조건문 .reviewBodySelect가 있으면
                reviewBodySelect[0].classList.remove('reviewBodySelect'); //.reviewBodySelect의 reviewBodySelect클래스를 삭제
                imgSelect[0].classList.remove('selectImg');
            }
            reviewBody[i].classList.add('reviewBodySelect'); //클릭한 reviewBody에 reviewBodySelect클래스를 부여
            reviewImg[i].classList.add('selectImg');
        }
    });
}
pageN.forEach((element) => { //forEach(반복문의 일종) : 배열을 쪼개서 배열 개수만큼 실행시킴 배열 내부의 각 값은 ()내부의 값인 element로 호출가능
    element.addEventListener('click', ()=> {
        pageNSelect[0].classList.remove('pageNSelect'); //.pageNSelect의 pageNSelect클래스를 삭제
        element.classList.add('pageNSelect'); //클릭한 .pageN>a에 pageNSelect클래스를 부여
    });
});