const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const name = "kkardd";
const courses = [
    {name : 'Jinseong'},
    {name : 'Yewon'},
    {name : 'Incheon'},
    {name : 'Seongwoo'},
    {name : 'Gojaeng'},
];


const server = http.createServer((req, res) => {
    console.log("...들어가는 중...");
    console.log(req.url);
    const url = req.url;
    res.setHeader('Content-Type', 'text/html');
    if(url === '/'){
        ejs.renderFile('./template/index.ejs', {name}).then((data) => res.end(data));
    } else if(url === '/courses'){
        ejs.renderFile('./template/courses.ejs', {courses}).then((data) => res.end(data));
    } else{
        ejs.renderFile('./template/not-found.ejs', {name}).then((data) => res.end(data));
    }
})

server.listen(8080);