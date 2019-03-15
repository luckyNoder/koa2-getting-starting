const Koa = require('koa')

let app = new Koa();

app.use(async (ctx,next) =>{
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
})
// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');