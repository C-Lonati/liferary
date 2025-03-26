const header = document.getElementById('header');
const footer = document.getElementById('footer');
const body = document.getElementsByTagName('body');
const login = document.getElementsByClassName('login');
const register = document.getElementsByClassName('register');
let upBtn = document.createElement('div');
let modal = document.createElement('div');
let loginForm = document.createElement('div');
let registerForm = document.createElement('div');
let slideMenu = document.createElement('div');
upBtn.id = 'upBtn'; //upBtn에 #upBtn부여
upBtn.innerHTML = '<img src="images/upBtn.svg" alt="위로가기" title="위로가기">'; //upBtn에 내부에 up텍스트 작성
loginForm.id = 'loginForm'; //loginForm에 #loginForm부여
registerForm.id = 'registerForm';
slideMenu.id = 'slideMenu';
modal.id = 'modal'; //modal에 #modal부여
body[0].prepend(modal); //body내부 제일 앞쪽에 div#modal객체 생성
body[0].prepend(loginForm); //body내부 제일 앞쪽에 div#loginForm객체 생성
body[0].prepend(registerForm);
body[0].appendChild(upBtn); //body내부 제일 뒤쪽에 div#upBtn객체 생성
body[0].appendChild(slideMenu); //body내부 제일 뒤쪽에 div#slideMenu객체 생성
upBtn.style.display = 'none'; //div#upBtn안보이게 설정
header.innerHTML='<div class="headerMain"><div class="hamburger"><img src="images/hamburger.svg" alt="햄버거 메뉴"></div><h1><a href="index.html"><img src="images/logo.svg" alt="로고"></a></h1><form method="post"><input type="text" id="search"><label for="search">서치</label><input type="image" src="images/search.svg" alt="돋보기 이미지"></form><ul><li class="login">로그인</li><li class="register">회원가입</a></li><li><a href="#">고객센터</a></li></ul></div><nav class="headerNav"><ul class="gnb"><li><a href="category.html">카테고리</a><ul class="headerSub"><li><a href="#">소설</a></li><li><a href="#">시</a></li><li><a href="#">고전문학</a></li><li><a href="#">전문서적</a></li></ul></li><li><a href="recommend.html">추천도서</a></li><li><a href="#">베스트셀러</a><ul class="headerSub"><li><a href="#">온라인(E북)</a></li><li><a href="#">오프라인</a></li><li><a href="#">해외서적</a></li></ul></li><li><a href="#">신간</a><ul class="headerSub"><li><a href="#">온라인(E북)</a></li><li><a href="#">오프라인</a></li></ul></li><li><a href="writerIntro.html">작가소개</a><ul class="headerSub"><li><a href="#">화제의 인물</a></li><li><a href="#">화제 도서</a></li></ul></li><li><a href="#">이벤트</a><ul class="headerSub"><li><a href="#">진행중인 이벤트</a></li><li><a href="#">종료된 이벤트</a></li></ul></li><li><a href="bbs.html">커뮤니티</a></li></ul></nav>'; //header#header 내용 입력
footer.innerHTML='<div class="footerLogo"><img src="images/graylogo.svg" alt="라이프러리 로고"></div><div class="footerInfo"><span>회사명 : 라이프러리</span><span>대표이사 : 엄우진, 조해용</span><span>E-mail : liferary_cs@gmail.com</span><span>소재지 : (08290)서울특별시 구로구 공원로 83 4층</span><span>사업자 등록번호 : 102-81-00000</span><span>서울특별시 통신판매업신고번호 : 제 000호</span></div>'; //footer#footer 내용 입력
loginForm.innerHTML='<form method="post"><div class="logo"><a href="index.html"><img src="images/logo.svg" alt="로고"></a></div><div class=underLine><label for="userId">ID : </label><input type="text" placeholder="ID" id="userId"></div><div class=underLine><label for="userPass">Password : </label><input type="password" placeholder="Password" id="userPass"></div><button type="submit">로그인</button><p class="loginHelp"><span class="register">회원가입</span><a href="#">아이디 찾기</a><a href="#">비밀번호 찾기</a></p><div class="loginSns"><i class="circle"><img src="images/twitter.svg" alt="트위터"></i><i class="circle"><img src="images/facebook.svg" alt="페이스북"></i><i class="circle"><img src="images/google.svg" alt="구글"></i></div></form>'; //div#loginForm 내용 입력
registerForm.innerHTML='<form><div class="logo"><img src="images/logo.svg" alt="로고"></div><div class="underLine"><label for="uId">아이디 :</label><input id="uId" type="text" placeholder="ID" required></div><div class="underLine"><label for="uPass">비밀번호 :</label><input id="uPass" type="password" placeholder="Password" required></div><div class="underLine"><label for="uName">이름 : </label><input id="uName" type="text" placeholder="Name" required></div><div class="underLine"><label for="uEmail">이메일 :</label><input id="uEmail" type="email" placeholder="liferary@life.com"></div><p class="formInfo">이메일 작성시 매주 신간 정보를 받아 보실 수 있습니다.</p><button type="submit">가입완료</button><p>이미 계정이 있으신가요? <span class="login">로그인</span></p></form>';
slideMenu.innerHTML='<ul class="underLine"><li class="login">로그인</li><li class="register">회원가입</a></li><li><a href="#">고객센터</a></li></ul><ul class="gnb"><li><a href="category.html">카테고리</a><span class="arrowBtn"></span><ul class="slideSub"><li><a href="#">소설</a></li><li><a href="#">시</a></li><li><a href="#">고전문학</a></li><li><a href="#">전문서적</a></li></ul></li><li><a href="recommend.html">추천도서</a></li><li><a href="#">베스트셀러</a><span class="arrowBtn"></span><ul class="slideSub"><li><a href="#">온라인(E북)</a></li><li><a href="#">오프라인</a></li><li><a href="#">해외서적</a></li></ul></li><li><a href="#">신간</a><span class="arrowBtn"></span><ul class="slideSub"><li><a href="#">온라인(E북)</a></li><li><a href="#">오프라인</a></li></ul></li><li><a href="writerIntro.html">작가소개</a><span class="arrowBtn"></span><ul class="slideSub"><li><a href="#">화제의 인물</a></li><li><a href="#">화제 도서</a></li></ul></li><li><a href="#">이벤트</a><span class="arrowBtn"></span><ul class="slideSub"><li><a href="#">진행중인 이벤트</a></li><li><a href="#">종료된 이벤트</a></li></ul></li><li><a href="bbs.html">커뮤니티</a></li></ul>';
upBtn.addEventListener('click', ()=>{
  document.documentElement.scrollTop = 0; //#upBtn클릭하면 스크롤탑을 0으로 설정(맨위로 이동)
});
window.addEventListener('scroll', () =>{
  if(document.documentElement.scrollTop>200){ //조건문 : 스크롤이 200px이상 내려오면
    upBtn.style.display = 'block'; //#upBtn보이게 설정
  }else upBtn.style.display = 'none'; //#upBtn안보이게 설정
});
for(let i=0; i<login.length; i++){
  login[i].addEventListener('click', () => {
    registerForm.style.display='none'; //#registerForm 안보이게 설정
    loginForm.style.display='block'; //#loginForm 보이게 설정
    modal.style.display='block'; //#modal 보이게 설정
  });
}
for(let i=0; i<register.length; i++){
  register[i].addEventListener('click', ()=>{
    registerForm.style.display='block'; //#registerForm 보이게 설정
    loginForm.style.display='none'; //#loginForm 안보이게 설정
    modal.style.display='block'; //#modal 보이게 설정
  });
}
modal.addEventListener('click', () => {
  loginForm.style.display='none'; //#loginForm 안보이게 설정
  registerForm.style.display='none'; //#registerForm 안보이게 설정
  slideMenu.classList.remove('slideActive');
  modal.style.display='none'; //#modal 안보이게 설정
});
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', ()=>{
  const slide = document.getElementById('slideMenu');
  slide.classList.add('slideActive');
  modal.style.display='block'; //#modal 보이게 설정
});
let arrowBtn = document.querySelectorAll('.arrowBtn');
let slideSub = document.querySelectorAll('.slideSub');
for(let i = 0; i<arrowBtn.length; i++){
  arrowBtn[i].addEventListener('click', () => {
    if(slideSub[i].classList.contains('subActive')){
      slideSub[i].classList.remove('subActive');
      arrowBtn[i].classList.remove('arrowAngle');
    }else {
      slideSub[i].classList.add('subActive');
      arrowBtn[i].classList.add('arrowAngle');
    }
  });
}