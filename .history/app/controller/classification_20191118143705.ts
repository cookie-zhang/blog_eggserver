
import { Controller } from 'egg';

export default class classificationController extends Controller {
  public async creatclassification() {
    const { ctx } = this;
   const {words}= ctx.request.body;
    let info = await ctx.service.classification.creatclassification(words);
      this.ctx.body = {
        code: 200,
        data: info
      }
  }

  public async classificationlist() {
    const { ctx } = this;
    let info = await ctx.service.classification.classificationlist();
      this.ctx.body = {
        code: 200,
        data: info
      }
  }

}
