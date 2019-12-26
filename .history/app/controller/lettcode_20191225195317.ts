import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async lettcodelist() {
    const { ctx } = this;
    const info = await ctx.service.article.getlist(); // 调用Service层传参
    this.ctx.body = {
      code: 200,
      data: info,
    };// 返回体
    this.ctx.status = 200;
  }
  public async lettcodedetail(){
    const { ctx } = this;
    const id = ctx.query.id;
    const info = await ctx.service.article.articledetail(id);
    this.ctx.body = {
      code: 200,
      data: info
    }
  }
  public async createLettcode(){
    const { ctx } = this;
    const data = ctx.request.body;
    const info = await ctx.service.article.createarticle(data);
    const dianzanData = {
      id: info.insertId,
      like: 0 
    }
    await ctx.service.article.insertdianzan(dianzanData);
    this.ctx.body = {
      code: 200,
      data: info
    }
  }
  public async updatelettcode(){
    const { ctx } = this;
    const data = ctx.request.body;
    const info = await ctx.service.article.updatearticle(data);
    this.ctx.body = {
      code: 200,
      data: info
    }
  }
  public async deletearticle(){
    const { ctx } = this;
    const data = ctx.request.body;
    const info = await ctx.service.article.deletearticle(data);
    this.ctx.body = {
      code: 200,
      data: info
    }
  }
  /**
   * dianzan
   */
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
