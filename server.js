const http = require('http');

http
  .createServer((request, response) => {
    request.on('error', err => {
      console.log(err);
      response.statusCode = 400;
      response.end();
    });

    response.on('error', err => {
      console.log(err);
    });

    if(request.method === 'GET' && request.url === '/echo') {
      request.pipe(response);
    } else {
      response.status = 404;
      response.end();
    }
  })
  .listen(8080, () => console.log('Echo listening on 8080'));


// const http = require('http');
//
// http.createServer((request, response) => {
//   if(request.method === 'GET' && request.url === '/echo'){
//   let body = [];
//   request.on('data', chunk => {
//     body.push(chunk);
//   }).on('end', () => {
//     body = Buffer.concat(body).toString();
//     console.log(body);
//     response.end(body);
//   });
// } else {
//   response.statusCode = 404;
//   response.end();
// }}).listen(8080, () => console.log('Listening on 8080'));
