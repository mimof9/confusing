function sleep(ms) {
	for(var t = Date.now(); Date.now() - t <= ms;);
}

// 脚本执行2秒
sleep(2000);

console.log('Hello 1!');