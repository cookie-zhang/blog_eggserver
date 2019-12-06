import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async articlelist() {
    const { ctx } = this;
    const info = await ctx.service.article.getlist(); // 调用Service层传参
    this.ctx.body = {
      code: 200,
      data: info,
    };// 返回体
    this.ctx.status = 200;
  }
  public async detail(){
    const { ctx } = this;
    const id = ctx.query.id;
    const info = await ctx.service.article.articledetail(id);
    this.ctx.body = {
      code: 200,
      data: info
    }
  }
  public async createarticle(){
    const { ctx } = this;
    const data = ctx.request.body;
    const info = await ctx.service.article.createarticle(data);
    const dianzanData = {
      id: info.insertId,
      like: 0 
    }

   const aa =  await ctx.service.article.insertdianzan(dianzanData);
   console.log(aa)
    this.ctx.body = {
      code: 200,
      data: info
    }
  }
  public async updatearticle(){
    const { ctx } = this;
    const data = ctx.request.body;
    const info = await ctx.service.article.updatearticle(data);
    this.ctx.body = {
      code: 200,
      data: info
    }
  }
  public async dianzan(){
    const { ctx } = this;
    const data = ctx.request.body;
    const info = await ctx.service.article.dianzan(data);
    this.ctx.body = {
      code: 200,
      data: info
    }
  }
  public async dianzanupdate(){
    const { ctx } = this;
    const data = ctx.request.body;
    const info = await ctx.service.article.dianzanupdate(data);
    this.ctx.body = {
      code: 200,
      data: info
    }
  }
}
