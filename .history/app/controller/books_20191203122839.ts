import { Controller } from 'egg';
// import fs = require('fs');
// import path = require('path');

export default class booksController extends Controller {
  public async booksData() {
    const { ctx } = this;
    // const info = await ctx.service.books.booksData(); // 调用Service层传参
    // info.path = fs.createReadStream(info.bookUrl)  //创建文档流
    // console.log(info)
    
    this.ctx.body = {
      code: 200,
      data: {},
    };// 返回体
    this.ctx.status = 200;
  }
}


