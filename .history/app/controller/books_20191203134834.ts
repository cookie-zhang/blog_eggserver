import { Controller } from 'egg';
const fs = require('fs');
// import path = require('path');

export default class booksController extends Controller {
  public async booksData() {
    const { ctx } = this;
    const info = await ctx.service.books.booksData(); // 调用Service层传参
    //let a = fs.createReadStream('https://cookiezhang.com/books/tujiehttp.pdf')  //读取文档流
       
    fs.readFile('./bokk.txt',function(error,data){
        if(error){
            console.log('错误信息：');
            throw error;
            return console.log('内容读取失败！');
        }
        console.log('文件内容如下：');
        console.log(data);
        return console.log('内容读取成功！');
    
    ————————————————
    版权声明：本文为CSDN博主「笨笨熊咦」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
    原文链接：https://blog.csdn.net/qq_41307443/article/details/79825432
    })
    this.ctx.body = {
      code: 200,
      data: info,
    };// 返回体
    this.ctx.status = 200;
  }
}


