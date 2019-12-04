import { Controller } from 'egg';
const fs = require('fs');
const path = require('path');
const mineType = require('mime-types');

export default class booksController extends Controller {
  public async booksData() {
    const { ctx } = this;
    const info = await ctx.service.books.booksData(); // 调用Service层传参
    let book = fs.readFile('../public/tujieHttp.pdf')  //读取文档流
    let filePath = path.resolve('../public/tujieHttp.pdf');  // 如果是本地文件
    let data = fs.readFileSync(filePath);
    let bufferData = new Buffer(data,'base64'); 
    let base64 = 'data:' + mineType.lookup(filePath) + ';base64,' + data; 
fs.writeFileSync(path.resolve('your/save/file/path'), base64, err => {...});


    console.log(book)
    this.ctx.body = {
      code: 200,
      data: info,
    };// 返回体
    this.ctx.status = 200;
  }

}


