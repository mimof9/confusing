// restful风格api

const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    console.log('/')
    res.send('node服务器api请求根地址')
})

router.get('/hello', (req, res, next) => {
    console.log('/hello')
    const obj = {
        'msg': 'hello webpack'
    }
    res.json(obj)
})

module.exports = router
