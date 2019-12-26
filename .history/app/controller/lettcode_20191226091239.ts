import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async lettcodelist() {
    const { ctx } = this;
    const info = await ctx.service.lettcode.getlist(); // 调用Service层传参
    this.ctx.body = {
      code: 200,
      data: info,
    };// 返回体
    this.ctx.status = 200;
  }
  public async lettcodedetail(){
    const { ctx } = this;
    const id = ctx.query.id;
    const info = await ctx.service.lettcode.lettcodedetail(id);
    this.ctx.body = {
      code: 200,
      data: info
    }
  }
  public async createLettcode(){
    const { ctx } = this;
    const data = ctx.request.body;
    const info = await ctx.service.lettcode.createarticle(data);
    const dianzanData = {
      id: info.insertId,
      like: 0 
    }
    await ctx.service.lettcode.insertdianzan(dianzanData);
    this.ctx.body = {
      code: 200,
      data: info
    }
  }
  public async updateLettcode(){
    const { ctx } = this;
    const data = ctx.request.body;
    const info = await ctx.service.lettcode.updatearticle(data);
    this.ctx.body = {
      code: 200,
      data: info
    }
  }
  public async deleteLettcode(){
    const { ctx } = this;
    const data = ctx.request.body;
    const info = await ctx.service.lettcode.deletearticle(data);
    this.ctx.body = {
      code: 200,
      data: info
    }
  }
  /**
   * dianzan
   */
//   public async dianzan(){
//     const { ctx } = this;
//     const data = ctx.request.body;
//     const info = await ctx.service.article.dianzan(data);
//     this.ctx.body = {
//       code: 200,
//       data: info
//     }
//   }
//   public async dianzanupdate(){
//     const { ctx } = this;
//     const data = ctx.request.body;
//     const info = await ctx.service.article.dianzanupdate(data);
//     this.ctx.body = {
//       code: 200,
//       data: info
//     }
//   }
}
