import { Controller } from 'egg';

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



const fs = require('fs')
const path = require('path')

class file extends Controller{
    // 保存文件
    async save () {
        let {ctx} = this
        const parts = ctx.multipart();
        let part;
        let result = []
        // parts() 返回 promise 对象
        while ((part = await parts()) != null) {
            let length = 0
            if (part.length) {
                length = part[1]
                // 获取其他参数
            } else {
                if (!part.filename) return
                // 处理文件流
                let file = {}
                file.name = part.filename
                file.type = part.mimeType
                let filePath = path.join('/home/web/public/upload', part.filename) // 保存地址
                let writable = fs.createWriteStream(filePath)// 创建写入流
                await part.pipe(writable) // 开始写入
                file.path = 'https://www.xxx.xxx/public/upload/' + part.filename
                result.push(file)
            }
        }
        ctx.status = 200
        ctx.body = {
            data: result
        }
    }
}
module.exports = file
————————————————
版权声明：本文为CSDN博主「microcosm1994」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_39081974/article/details/93610622