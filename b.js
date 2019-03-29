// 字符串的length和Buffer类的length的区别？
// 字符串的length获取的是字符数，Buffer类的length获取的才是字节数

// 对英文来说没区别，因为一个英文字符就是一个字节
var str1 = 'mimof';
var bf1 = new Buffer.from(str1);
console.log(str1.length);
console.log(bf1.length);

// 对中文来说，一个中文字符要用三个字节
var str2 = '中国';
var bf2 = new Buffer.from(str2);
console.log(str2.length);
console.log(bf2.length);