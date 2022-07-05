const express = require('express')

const app = express()

app.set("view engine", "ejs")


app.get("/", function (req, res) {
    const itens =[
        {
            title: "D",
            message: "esemvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message: "JS usa Javascript para renderizar HTML"
        },
        {
            title: "M",
            message: "uito fácil de usar"
        },
        {
            title: "A",
            message: "lto nível"
        },
        {
            title: "I",
            message: "nstall ejs"
        },
        {
            title: "S",
            message: "intaxe simples"
        },

    ]
    const subtitle = "Uma linguagem de modelagem para criação de página HTML utilizando JavaScript"
    res.render("pages/index", {
        qualitys: itens,
        subtitle: subtitle
    })
})

app.get("/sobre", function (req, res) {
    res.render("pages/about")
})

app.listen(8080)

console.log("Servidor iniciado")