const {spawn} = require('child_process');

const childPython = spawn('python3', ['--version']);
// const childPython = spawn('python3', ['parser.py', 
// "Rhonda has 12 marbles more than Douglas. Douglas has 6 marbles more than Bertha. Rhonda has twice as many marbles as Bertha has. How many marbles does Douglas have?"
// ]);

const http = require('http');

const hostname = '127.0.0.1';
const port = 9000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  childPython.stdout.on('data', (data) => {
    res.write(data);
  })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
