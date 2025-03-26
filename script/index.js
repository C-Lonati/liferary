const viewer = document.getElementsByClassName('viewer');
const photoBack = document.querySelector('#eventPhoto');
const photo = document.querySelectorAll('#eventPhoto>img');
let leftBtn = document.createElement('div');
let rightBtn = document.createElement('div');
let dis = 'min(5%, 30px)';
let photoNum=0, photoNumMax = photo.length-1;
let winWidth = window.innerWidth;
if(winWidth >= 1200){
    viewer[0].addEventListener('click', ()=>{
        event.preventDefault();
        window.open('foreign.html', 'bookPage', 'width = 1400px, height = 850px, scrollbars=no location = no, toolbar = no, statusbar = no'); 
        //.viewer클릭시 foreign.html을 팝업창으로 열기
    });
}
photoBack.prepend(leftBtn);
photoBack.appendChild(rightBtn);
leftBtn.id = 'leftBtn';
rightBtn.id = 'rightBtn';
leftBtn.style.left = dis;
rightBtn.style.right = dis;
leftBtn.innerHTML = '<img src="images/singleLeft.svg" alt="왼쪽 버튼">';
rightBtn.innerHTML = '<img src="images/singleRight.svg" alt="오른쪽 버튼">';
function leftSlide(indexNum){
    photo[indexNum].animate([
        // keyframes
        { left: '0px', zIndex: '1' },
        { left: '-100%', zIndex: '1'  },
        { left: '-100%', zIndex: '-1' },
        ], {
        // timing options
        duration: 2000
    });
    photo[indexNum].style.zIndex=-1;
}
function leftSlideReverse(indexNum){
    photo[indexNum].animate([
        // keyframes
        { left: '0px', zIndex: '1' },
        { left: '100%', zIndex: '1'  },
        { left: '100%', zIndex: '-1' },
        ], {
        // timing options
        duration: 2000
    });
    photo[indexNum].style.zIndex=-1;
}
function centerSlide(indexNum){
    photo[indexNum].animate([
        // keyframes
        { left: '100%', zIndex: '1' },
        { left: '0px', zIndex: '1' },
        { left: '0px', zIndex: '1' }
        ], {
        // timing options
        duration: 2000
    });
    photo[indexNum].style.zIndex=2;
}
function centerSlideReverse(indexNum){
    photo[indexNum].animate([
        // keyframes
        { left: '-100%', zIndex: '1' },
        { left: '0px', zIndex: '1' },
        { left: '0px', zIndex: '1' },
        ], {
        // timing options
        duration: 2000
    });
    photo[indexNum].style.zIndex=2;
}

//button clickEvent
rightBtn.addEventListener('click', () => {
    if(photoNum>=photoNumMax)
        centerSlide(0);
    else centerSlide(photoNum+1);
        leftSlide(photoNum);
    if(photoNum>=photoNumMax)
        photoNum=0;
    else photoNum++;
});
leftBtn.addEventListener('click', () => {
    if(photoNum == 0)
        centerSlideReverse(photoNumMax);
    else centerSlideReverse(photoNum-1);
    leftSlideReverse(photoNum);
    if(photoNum==0)
        photoNum=photoNumMax;
    else photoNum--;
});