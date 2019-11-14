import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
  public async articlelist() {
    const { ctx } = this;
    const info = await ctx.service.article.getlist(); // 调用Service层传参
    this.ctx.body = {
      code: 200,
      data: info,
    };// 返回体
    this.ctx.status = 200;
  }
}
