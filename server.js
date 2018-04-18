var static = require('node-static');

 
const port = 8000;
// const file = new static.Server('./public');

const file = new static.Server('./public',{
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Headers': 'Content-Type'
  }
});


 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(port, () => {
  console.log(`Listening on port ${port}`)
});