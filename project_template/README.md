# 패캠이츠 코드

# ch01 메뉴작성 페이지 만들기
    1. 수업준비 및 템플릿 소스 설명
       1. npm install <> nodejs 설치
       2. database 생성
          1. mysql.server start 
          2. mysql -u root -p
          3. create database facameats;
       3. npm run dev
    2. 모델간의 관계도
       1. OneToOne
          1. 1:1로 맵핑
          2. (ex) 사용자모델, 회사모델
       2. OneToMany
          1. 1:N
          2. (ex) 제품에 달린 댓글들
          3. 외부키 제품ID
       3. ManyToOne
          1. OneToMany와 반대
          2. 좌측은 1번만 가능
          3. (ex) a는 1번자동차, b와c는 2번자동차
       4. ManyToMany
          1. N:M
          2. 좌측 우측 여러번 선택 가능
          3. 태그를 구현하는 경우 많이 쓰임
          4. (ex) 인스타그램
             1. 게시물에 걸린 태그 확인
             2. #서울 을 태그한 게시물들
    3. 메뉴 모델 작성
       1. ShopsMenu.js 작성
       2. Shops.js
          1. associate 추가 <> OneToMany
    4. 메뉴 추가
       1. 템플릿 만들기
          1. detail.html
       2. router 추가
          1. POST /admin/shops/detail/:id
          2. GET /admin/shops/delete/:shop_id/:menu_id
       3. controller 추가
          1. add_menu
    5. 메뉴 출력
    6. 메뉴 삭제

# ch02 제품 썸네일 만들기
   1. 파일업로드 개요
      1. 모듈 설치
         1. npm install multer
      2. 템플릿에서 enctype=multipart/form-data 추가
      3. Shops 모델 필드명 추가
      4. 미들웨어 작성
   2. multer를 이용한 파일 업로드
   3. 글 수정시 적용
