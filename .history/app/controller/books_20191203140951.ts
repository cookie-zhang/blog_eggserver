import { Controller } from 'egg';
const fs = require('fs');
// import path = require('path');

export default class booksController extends Controller {
  public async booksData() {
    const { ctx } = this;
    const info = await ctx.service.books.booksData(); // 调用Service层传参
    //let a = fs.createReadStream('https://cookiezhang.com/books/tujiehttp.pdf')  //读取文档流
    
    this.ctx.body = {
      code: 200,
      data: info,
    };// 返回体
    this.ctx.status = 200;
  }
}


