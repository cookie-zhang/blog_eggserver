
import { Controller } from 'egg';

export default class WordsController extends Controller {
  public async creatwords() {
    const { ctx } = this;
    const {words} = ctx.requery.body;
    let info = await ctx.service.everydaywords.creatwords(words);
      this.ctx.body = {
        code: 200,
        data: info
      }
  }

}
