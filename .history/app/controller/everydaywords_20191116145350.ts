
import { Controller } from 'egg';

export default class WordsController extends Controller {
  public async creatwords() {
    const { ctx } = this;
   const {words}= ctx.request.body;
    let info = await ctx.service.everydaywords.creatwords(data.words);
      this.ctx.body = {
        code: 200,
        data: info
      }
  }

}
