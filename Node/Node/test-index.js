// const http = require('http');
// const date = require('./custom_module');
// const url = require('url');
// const fs = require('fs');
// const events = require('events');
// const formidable = require('formidable');
// const os = require('os');
// const path = require('path');

// // Path to the Desktop directory
// const desktopPath = path.join(os.homedir(), 'Desktop');

// http.createServer((req, res) => {
//     if (req.url === '/fileupload' && req.method.toLowerCase() === 'post') {
//         // Configure Formidable to upload files directly to the Desktop
//         const form = new formidable.IncomingForm({
//             uploadDir: desktopPath, // Set the upload directory to the Desktop
//             keepExtensions: true,   // Preserve the file extension
//             // maxFileSize: 10 * 1024 * 1024 // Optional: Set a maximum file size limit (10 MB in this case)
//         });

//         form.parse(req, (err, fields, files) => {
//             if (err) {
//                 console.error('Form parsing error:', err);
//                 res.writeHead(500, { 'Content-Type': 'text/plain' });
//                 res.write('Server error during form parsing');
//                 res.end();
//                 return;
//             }

//             console.log('Fields:', fields);
//             console.log('Files:', files);

//             // File paths and details
//             const file = files.filetoupload;
//             if (!file) {
//                 res.writeHead(400, { 'Content-Type': 'text/plain' });
//                 res.write('No file uploaded');
//                 res.end();
//                 return;
//             }

//             const oldpath = file.filepath;
//             const originalFilename = file.originalFilename;

//             if (!oldpath || !originalFilename) {
//                 res.writeHead(400, { 'Content-Type': 'text/plain' });
//                 res.write('File upload failed');
//                 res.end();
//                 return;
//             }

//             // The new file path on the Desktop
//             const newpath = path.join(desktopPath, originalFilename);

//             // Rename the file (no need to copy it as it's already in the target location)
//             fs.rename(oldpath, newpath, (err) => {
//                 if (err) {
//                     console.error('File renaming error:', err);
//                     res.writeHead(500, { 'Content-Type': 'text/plain' });
//                     res.write('Error renaming file');
//                     res.end();
//                     return;
//                 }

//                 res.writeHead(200, { 'Content-Type': 'text/plain' });
//                 res.write('File uploaded and moved!');
//                 res.end();
//             });
//         });
//     } else {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<form action="/fileupload" method="post" enctype="multipart/form-data">');
//         res.write('<input type="file" name="filetoupload"><br>');
//         res.write('<input type="submit">');
//         res.write('</form>');
//         res.end();
//     }
// }).listen(8080, () => {
//     console.log('Server listening on port 8080');
// });

// http.createServer((req, res) => {
//     if (req.url == '/fileupload' && req.method.toLowerCase() === 'post') {
//         var form = new formidable.IncomingForm({ multiples: true }); // Ensure it supports multiple files
//         form.parse(req, (err, fields, files) => {
//             if (err) {
//                 console.error('Form parsing error:', err);
//                 res.writeHead(500, { 'Content-Type': 'text/plain' });
//                 res.write('Server error during form parsing');
//                 res.end();
//                 return;
//             }

//             // `filetoupload` is an array, so we need to handle it accordingly
//             const fileArray = files.filetoupload;
//             if (!fileArray || fileArray.length === 0) {
//                 res.writeHead(400, { 'Content-Type': 'text/plain' });
//                 res.write('No file uploaded');
//                 res.end();
//                 return;
//             }

//             // Access the first file in the array
//             const file = fileArray[0];
//             const oldpath = file.filepath;
//             const originalFilename = file.originalFilename;

//             if (!oldpath || !originalFilename) {
//                 res.writeHead(400, { 'Content-Type': 'text/plain' });
//                 res.write('File upload failed');
//                 res.end();
//                 return;
//             }

//             // Construct the new path on the user's Desktop
//             const newpath = path.join(os.homedir(), 'Desktop', originalFilename);

//             // Copy the file to the new location
//             fs.copyFile(oldpath, newpath, (err) => {
//                 if (err) {
//                     console.error('File copying error:', err);
//                     res.writeHead(500, { 'Content-Type': 'text/plain' });
//                     res.write('Error copying file');
//                     res.end();
//                     return;
//                 }

//                 // Optionally delete the original file
//                 fs.unlink(oldpath, (err) => {
//                     if (err) {
//                         console.error('Error deleting temporary file:', err);
//                     }
//                 });

//                 res.writeHead(200, { 'Content-Type': 'text/plain' });
//                 res.write('File uploaded and moved!');
//                 res.end();
//             });
//         });
//     } else {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<form action="/fileupload" method="post" enctype="multipart/form-data">');
//         res.write('<input type="file" name="filetoupload"><br>');
//         res.write('<input type="submit">');
//         res.write('</form>');
//         res.end();
//     }
// }).listen(8080, () => {
//     console.log('Server listening on port 8080');
// });


// var eventEmitter = new events.EventEmitter();
// var myEventHandler = function () {
//     console.log('I hear a scream!');
// }
// eventEmitter.on('scream', myEventHandler);
// eventEmitter.emit('scream');

// var readStream = fs.createReadStream('./myrenamedfile.txt');
// readStream.on("open", () => {
//     console.log('the file is open');
// })

// http.createServer(function (req, res) {
//     // var q = url.parse(req.url, true)
//     // // console.log(q)
//     // var filename = "." + q.pathname;
//     // // console.log(filename)
//     // fs.readFile(filename, function (err, data) {
//     //     if (err) {
//     //         res.writeHead(404, { 'Content-Type': 'text/html' });
//     //         return res.end('file not found');
//     //     }
//     //     res.writeHead(200, { 'Content-Type': 'text/html' });
//     //     res.write(data);
//     //     return res.end();
//     // });
//     // 
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('Hello World'.toUpperCase());
//     res.end();
// }).listen(8080);


// var address = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(address, true);

// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// var qdata = q.query;
// console.log(qdata);
// console.log(qdata.month);

// http.createServer(function (req, res) {
// res.writeHead(200, { 'Content-Type': 'text/html' });
// var query = url.parse(req.url, true).query;
// var text = query.year + ' ' + query.month;
// res.write('The date and time are currently: ' + date.myDateTime() + req.url + text);
// res.end(text);

// method appends specified content to a file. If the file does not exist, the file will be created
// fs.appendFile('index.html', '<u>Some Appended Content</u>', function (err) {
//     if (err) throw err;
//     console.log('saved!');
// })

// method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created
// fs.open('index.html', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
// });

//  method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created
// fs.writeFile('mynewfile1.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// fs.readFile('index.html', function (err, data) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(data);
//     return res.end();
// });

// method deletes the specified file:
// fs.unlink('mynewfile2.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
// });

// fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
// });
// }).listen(8080);