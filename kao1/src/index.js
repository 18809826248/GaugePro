const fetch = require('node-fetch')
fetch("http://127.0.0.1:5000/json")
.then(res=>res.json())
.then(json=>console.log(json))