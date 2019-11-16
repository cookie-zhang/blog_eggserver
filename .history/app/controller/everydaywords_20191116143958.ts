
import { Controller } from 'egg';

export default class WordsController extends Controller {
  public async creatwords() {
    const { ctx } = this;
    const words = ctx.query.body;
    console.log('-----------------')
    console.log(ctx.query)

    await ctx.service.everydaywords.creatwords(words);
      this.ctx.body = {
        code: 200,
        data: {message:'创建成功'}
      }
  }

}
