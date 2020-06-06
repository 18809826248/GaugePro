const Koa = require('Koa')
const app = new Koa()
const router = require('@koa/router')()

app.use(router.routes(),router.allowedMethods())

router.get('/json',async (ctx,next)=>{
    returnJson(ctx)
})

let returnJson =ctx=>{
    ctx.body ='{"username":"liuboyuan"}'
}
// app.use(async (ctx,next)=>{
//     ctx.body='{"name":"liuboyuan"}'
//     return ctx.body
    
// })

app.listen(5000,()=>{
    console.log('http://127.0.0.1:5000')
})