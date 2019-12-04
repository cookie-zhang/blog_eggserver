import { Controller } from 'egg';
const fs = require('fs');
const path = require('path');
const mineType = require('mime-types');

export default class booksController extends Controller {
  public async booksData() {
    const { ctx } = this;
    const info = await ctx.service.books.booksData(); // 调用Service层传参
    let book = fs.readFile('../public/tujieHttp.pdf')  //读取文档流
    console.log(book)
    this.ctx.body = {
      code: 200,
      data: info,
    };// 返回体
    this.ctx.status = 200;
  }

}


