const http = require("http");
require("dotenv").config();



http.createServer().listen(3000, ()=> {
    console.log(`Server is running on port 3000 ${process.port}`)
});