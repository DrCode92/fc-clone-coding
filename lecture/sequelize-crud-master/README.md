# sequelize crud

1. Sequelize
   1. ORM(Object-Relational-Mapping)
   2. Nodejs로 mysql 또는 postgresql를 제어할 수 있게 해 줌

2. 프로젝트 설정
   1. npm install <- Nodejs 설치
   2. mysql 설치
      1. brew install mysql
      2. brew list
      3. mysql.server start
      4. mysql_secure_installation
         1. root password : 0910dlr0

3. dotenv 설정
   1. npm install dotenv

4. database 생성
   1. mysql -u root -p
   2. create database exercise
   3. ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '0910dlr0'

5. DB 접속(mysql)
   1. npm install mysql2
   2. npm install sequelize@4.42.0

6. 모델 작성
   1. models > index.js : sync 역할
   2. models > Products.js : crud table

7. DB 입력 
   1. SQL : insert into Products
   2. GET /admin/products/write -> POST /admin/products/write
   3. models.TABLE.create(데이터)

8. DB 조회
   1. models.TABLE.findAll(조회조건)
   2. models.TABLE.findByPk(primary key)
   3. models.TABLE.findOne(조회조건)

9.  moment.js 적용
    1.  npm install moment

10. 상세페이지 보기

11. DB 수정
   4. models.TABLE.update(데이터, 조회조건)

12. DB 삭제
   5. models.TABLE.destroy(조회조건)

