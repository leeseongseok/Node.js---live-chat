// 설치한 express 모듈 불러오기
const express = require('express');
// 설치한 socket.io 모듈 불러오기
const socket = require('socket.io');
// Node.js 기본 내장 모듈 불러오기
const http = require('http');
const { fstat } = require('fs');
// express 객체 생성
const app = express();
// express http 서버 생성
const server = http.createServer(app)
// 생성된 서버를 socket.io에 바인딩
const io = socket(server)
// Get 방식으로 / 경로에 접속하는 것 허용
// 이것을 해주지 않으면 localhost:8080으로 접속했을 때 " Cannot GET / " Error 발생
app.get('/', function (request, response) {
    console.log('유저가 / 으로 접속하였습니다.')
    response.send('Hello, Express Server!')
})
// 서버를 8080 포트로 listen
// cmd -> netstat -anb로 확인가능
server.listen(8080, function () {
    console.log('서버 실행 중 ');
})

// // Node.js 기본 내장 모듈 불러오기
// const fs = require('fs')
// // express 객체 생성
// const app = express()
// // express http 서버 생성
// const server = http.createServer(app)
// // 생성된 서버를 socket.io에 바인딩
// const io = socket(server)
// // 정적파일을 제공하기 위해 미들웨어를 사용
// app.use('/css', express.static('./static/css'))
// app.use('/js', express.static('./static/js'))
// // Get 방식으로 / 경로에 접속하면 실행 됨
// app.get('/', function (request, response) {
//     fstat.readFile('./static/index.html', function (err, data) {
//         if(err){
//             response.send('Error')
//         } else {
//             response.writeHead(200, { 'Content-Type': 'text/html' })
//             response.write(data)
//             response.end()
//         }
//     })
// })