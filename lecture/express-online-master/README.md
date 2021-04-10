# Node express online 강의

1. express 시작
    http 상태코드
        1xx 조건부응답
        2xx 응답성공
        3xx 리다이렉션
        4xx 요청오류( ex 404 Not Found )
        5xx 서버오류
    nodemon
        sudo npm install -g nodemon
2. Routing
   1. GET /admin
   2. GET /admin/products
   3. GET /contacts
   4. GET /contacts/list

3. View Engine - Nunjucks
   1. npm install nunjucks
   2. autoescape : true // 태그 무효화
   3. { message | safe } // 태그 활성화

4. 템플릿 상속
   1. {% block content %}{% endblock %}

5. 미들웨어
   1. npm install morgan // 사용자 요청 url 확인
   2. app.use( logger('dev') );

6. form ( body-parser )
   1. app.use( bodyParser.json() );
   2. app.use( bodyParser.urlencoded({ extended : false }));
   3. REST API
      1. GET /users => 사용자 정보
      2. POST /users => 사용자 추가
      3. GET /users/(ID) => 한명만 볼때
      4. PUT /users/(ID) => 한명 수정하기
      5. DELETE /users/(ID) => 삭제

7. 정적파일
   1. app.use( '/uploads', express.static('uploads') );

8. Global View Variable
   1. app.use( (req, res, next) => {
        app.locals.isLogin = true;
         next();
      })

9. 404, 500 error handling
   1. app.use( (req, res, _ ) => {
         res.status(400).render('common/ex-404.html');
      })

10. nunjucks macro

11. Express 권장 구조