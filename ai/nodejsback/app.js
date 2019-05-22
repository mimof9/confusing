// node入口文件

const express = require('express')

const app = express()

app.use('/public', express.static('public'))

app.use('/api', require('./routers/api'))

app.listen(18081, () => {
    console.log('启动服务器，监听18081端口')
})
