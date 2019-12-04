import { Controller } from 'egg';
const fs = require('fs');
// import path = require('path');

export default class booksController extends Controller {
  public async booksData() {
    const { ctx } = this;
    const info = await ctx.service.books.booksData(); // 调用Service层传参
    // let a = fs.createReadStream('https://cookiezhang.com/books/tujiehttp.pdf')  //创建文档流
    let a = fs.createReadStream('book.txt', { start: 90, end: 99 });
    console.log(a)
    setTimeout(() => {
        a.close(); // 这可能不会关闭流。
        // 人工标记流的结束，就像底层的资源自身已表明文件的结束一样，允许流进行关闭。
        // 这不会取消挂起中的读取操作，如果存在此类操作，则过程可能仍无法成功地退出，直到完成。
        stream.push(null);
        stream.read(0);
      }, 100);
    this.ctx.body = {
      code: 200,
      data: info,
    };// 返回体
    this.ctx.status = 200;
  }
}


