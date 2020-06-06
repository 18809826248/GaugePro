/* globals gauge*/
"use strict";
const fetch = require('node-fetch')
const assert = require('assert')

step("Open Url <url> userName <username>",async(url,username)=>{
    await fetch(url)
    .then(res=>res.json())
    .then(json=>{
        console.log(json)
        assert.equal(json.username,username,"用户名错误")
    })
})


