var express = require('express')
var multer = require('multer')

// 创建web应用
var app = express()

// 跨域
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method === 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
});

// 设置路由
var router = express.Router()
// 简单的文件上传，需要注意，multer只会处理multipart/form-data 
// 因此 前端一定要保证文件上传时使用multipart/form-data
var upload = multer({ dest: 'upload/'})
// 单文件上传
router.post('/upload', upload.single('file'), function(req, res, next) {
	console.log(req.file)
	console.log(req.body)
	res.end('单文件上传')
})
// 多文件上传
router.post('/uploads', upload.array('files', 5), function(req, res, next) {
	console.log(req.files)
	console.log(req.body)
	res.end('多文件上传')
})
app.use('/', router)

// 监听端口
app.listen(8020)