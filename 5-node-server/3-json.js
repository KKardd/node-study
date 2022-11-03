const { resolveSoa } = require('dns');
const http = require('http');

const courses = [
    {name : 'Jinseong'},
    {name : 'Yewon'},
    {name : 'Incheon'},
    {name : 'Seongwoo'},
    {name : 'Gojaeng'},
];


const server = http.createServer((req, res) => {
    console.log("...들어가는 중...");
    const url = req.url;
    const method = req.method;
    
    if(url === '/courses'){
        if(method === 'GET'){
            res.writeHead(200, {'Content-Type' : 'application/json'})
            res.end(JSON.stringify(courses));
        }else if(method === 'POST'){
            const body = []; 
            req.on('data', (chunk) => {
                console.log(chunk);
                body.push(chunk);
            })
            req.on('end', () => {
                const bodystr = Buffer.concat(body).toString();
                const course = JSON.parse(bodystr);
                courses.push(course);
                console.log(course);
                res.writeHead(201);
                res.end();
            })
        }
    }
})

server.listen(8080);