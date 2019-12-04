import { Controller } from 'egg';
import { fs } = from 'fs' 
import {path }= from 'path' 

export default class booksController extends Controller {
  public async booksData() {
    const { ctx } = this;
    const info = await ctx.service.books.booksData(); // 调用Service层传参



    this.ctx.body = {
      code: 200,
      data: info,
    };// 返回体
    this.ctx.status = 200;
  }
}


