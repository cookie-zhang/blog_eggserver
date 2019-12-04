import { Controller } from 'egg';
const fs = require('fs')
const path = require('path')

export default class booksController extends Controller {
  public async booksData() {
    const { ctx } = this;
    const info = await ctx.service.books.booksData(); // 调用Service层传参


    let writable = fs.createWriteStream(filePath)// 创建写入流
                 await part.pipe(writable) // 开始写入



    this.ctx.body = {
      code: 200,
      data: info,
    };// 返回体
    this.ctx.status = 200;
  }
}


