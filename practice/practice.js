const http = require('http');
const fs = require('fs');
const url = require('url');

const app = http.createServer(function(request,response){
    let _url = request.url;
    let queryData = url.parse(_url,true).query;
    let path_name = url.parse(_url,true).pathname;
    let title = queryData.id;
    if(path_name == '/'){
        if(title == undefined){
            fs.readdir('./data', ((err, files) => {
                console.log(files);
                title = 'welCome';
                data = 'Hello, Node.js'
                let filesList = '<ul>';
                for(let i=0; i<files.length; i++){
                    filesList += `<li><a href="/?id=${files[i]}">${files[i]}</a></li>`;
                }
                filesList += '</ul>';

                let template = `
            <!doctype html>
            <html>
            <head>
              <title>WEB1 - ${title}</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1><a href="/">WEB</a></h1>
              ${filesList}
              <h2>${title}</h2>
              <p>
                ${data}
              </p>
            </body>
            </html>
        
            `;
                response.writeHead(200);

                response.end(template);
            }))

        }else{
            fs.readdir('./data', ((err, files) => {
                let filesList = '<ul>';
                for (let i = 0; i < files.length; i++) {
                    filesList += `<li><a href="/?id=${files[i]}">${files[i]}</a></li>`;
                }
                filesList += '</ul>';

                fs.readFile(`data/${title}`, 'UTF-8', ((err, data) => {
                    let template = `
            <!doctype html>
            <html>
            <head>
              <title>WEB1 - ${title}</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1><a href="/">WEB</a></h1>
              ${filesList}
              <h2>${title}</h2>
              <p>
                ${data}
              </p>
            </body>
            </html>
        
            `;
                    response.writeHead(200);

                    response.end(template);
                }));
            }));
        }

    }else{
        response.writeHead(404);
        response.end("NOT FOUND");
    }
    console.log();




});
app.listen(1010);