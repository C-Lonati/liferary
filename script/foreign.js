const toggleT = document.getElementById('toggleTrans');
const toggleB = document.getElementById('toggleBlack');
const toggleD = document.getElementById('toggleDrag');
const transSize = document.getElementById('transSize');
const foreignBefore = document.getElementById('foreignBefore');
const foreignAfter = document.getElementById('foreignAfter');
const toggle = document.getElementsByClassName('toggle');
const sizeBtn = document.querySelectorAll('.transSize>li');
const sizeT = document.getElementsByClassName('transSize');
const foreignText = document.getElementsByClassName('foreignText');
const krText = document.querySelectorAll('.krText');
const krTextRight = document.querySelector('#foreignAfter .krText')
const sizeSelect = document.getElementsByClassName('sizeSelected');
const backBtn = document.getElementsByClassName('backBtn');
let draged = document.createElement('div');
if(window.innerWidth>=1200) sizeBtn[2].classList.add('sizeSelected');
else sizeBtn[1].classList.add('sizeSelected');
//토글키 온오프 제어
for(var i=0; i<toggle.length; i++){ 
    toggle[i].addEventListener('click', function(){
        if(this.classList.contains('toggleOn')){
            this.classList.remove('toggleOn');
        }else this.classList.add('toggleOn');
    });
}
//크기변경 토글키 제어
transSize.addEventListener('click', function(){
    if(this.classList.contains('toggleOn')){
        sizeT[0].style.display = 'flex';
    }else sizeT[0].style.display = 'none';
});
//크기변경 실적용
sizeBtn.forEach(element => {
    let i = Number(element.innerHTML) + 'px'; //sizeBtn의 내부값을 Number데이터형으로 변경한 후 px를 붙여서 i에 저장 ex) 16->16(숫자)->16px
    element.style.fontSize = i;
    element.addEventListener('click', () => {
        foreignBefore.style.fontSize = i;
        foreignAfter.style.fontSize = i;
        sizeSelect[0].classList.remove('sizeSelected')
        element.classList.add('sizeSelected');
    });
});
//야간모드 토글키 제어
toggleB.addEventListener('click', function(){
    if(this.classList.contains('toggleOn')){
        foreignBefore.classList.add('nightMod');
        foreignAfter.classList.add('nightMod');
        draged.classList.add('nightMod');
        foreignBefore.classList.remove('dayMod');
        foreignAfter.classList.remove('dayMod');
        draged.classList.remove('dayMod');
    }else {
        foreignBefore.classList.add('dayMod');
        foreignAfter.classList.add('dayMod');
        draged.classList.add('dayMod');
        foreignBefore.classList.remove('nightMod');
        foreignAfter.classList.remove('nightMod');
        draged.classList.remove('nightMod');
    }
});
//드래그번역 토글키 제어
for(let i=0;i<foreignText.length;i++){
    foreignText[i].addEventListener('selectstart', () => {
        draged.remove(); //생성된 div.draged 지우기
        foreignText[i].addEventListener('mouseup', (e) => { 
            let innerString = window.getSelection().toString(); //선택한부분의 내용을 불러와서 문자로 변환해 innerString에 대입
            if (innerString.length > 0 && toggleD.classList.contains("toggleOn")) { //조건문 : 토글키 확인되고 드래그한 글자수가 0을 넘으면
                foreignText[i].appendChild(draged); //원문 전체 div의(왼쪽 드래그하면 왼쪽, 오른쪽 드래그하면 오른쪽) 가장 앞쪽에 div생성
                draged.classList.add('draged'); //방금 생성한 div에 .draged부여
                draged.style.top = e.clientY + 30 + "px"; //div.draged 위치 지정
                draged.style.left = e.clientX - 30 + "px"; //div.draged 위치 지정
                //e.clientX, e.clientY : 팝업창 + 마우스 이벤트니까 창을 기준으로 마우스 위치 잡아옴
                draged.innerText = innerString; //div.draged내부에 innerString값을 넣음
            }
        });
    });
}
//자동번역 토글키 제어
toggleT.addEventListener('click', function(){
    if(toggleT.classList.contains('toggleOn')){
        if(window.innerWidth >= 1200){
            foreignText[2].style.display = 'none';
            krTextRight.style.display = 'block';
        } else {
            foreignText[1].style.display = 'none';
            krText.forEach((el) => {
                el.style.display = 'block';
            });
        }
    }else{
        if(window.innerWidth >= 1200){
            foreignText[2].style.display = 'block';
            krTextRight.style.display = 'none';
        } else {
            foreignText[1].style.display = 'block';
            krText.forEach((el) => {
                el.style.display = 'none';
            });
        }
    }
});
backBtn[0].addEventListener('click', () => window.open("about:blank","_self").close()); //닫기버튼 제어