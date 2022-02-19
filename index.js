const Koa = require("Koa");
const app = new Koa();

app.use(ctx => {
    const url = ctx.request.url;

    if(url == "/" || url == "/index"){
        ctx.body = "<h1>Index sayfasina hos geldiniz.</h1>"
    }
    else if(url == "/hakkimizda"){
        ctx.body = "<h1>Hakkimizda sayfasina hos geldiniz.</h1>"
    }
    else if(url == "/iletisim"){
        ctx.body = "<h1>Iletisim sayfasina hos geldiniz.</h1>"
    }
    else{
        ctx.body = "404 SAYFA BULUNAMADI"
    }
})

const port = 3000;

app.listen(port, () => {
    console.log(`Sunucu port ${port} de çalışmaktadır.`)
})