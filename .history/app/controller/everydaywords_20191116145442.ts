
import { Controller } from 'egg';

export default class WordsController extends Controller {
  public async creatwords() {
    const { ctx } = this;
   const {words}= ctx.request.body;
    let info = await ctx.service.everydaywords.creatwords(words);
      this.ctx.body = {
        code: 200,
        data: info
      }
  }

  public async getwordslist() {
    const { ctx } = this;
   const {words}= ctx.request.body;
    let info = await ctx.service.everydaywords.getlist(words);
      this.ctx.body = {
        code: 200,
        data: info
      }
  }

}
