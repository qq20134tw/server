let Service = require('node-windows').Service;

let svc = new Service({
	name: 'self_server',//服務名稱
	description: '自用伺服器',//描述
	script: './server.js',//nodejs項目要啟動的文件路徑
	wait: '1',//程序崩潰後重啟的時間間隔
	grow: '0.25',//重啟等待時間成長值,比如第一次1秒，第二次1.25秒
	maxRestarts: '40'//60秒內最大重啟次數
});

//監聽安裝事件
svc.on('install', () => {
	svc.start();
	console.log('install complete.');
});
//監聽卸載事件
svc.on('uninstall', () => {
	console.log('Uninstall complete.');
	consoe.log('The service exist:',svc.exists);
});
//防止程序執行2次
svc.on('alreadyinstalled', () => {
	console.log('This service is already installed');
});
//如果存在就卸載
if (svc.exists) return svc.uninstall();
//不存在安裝
svc.install();