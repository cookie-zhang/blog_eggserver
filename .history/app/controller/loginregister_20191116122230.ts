import { Controller } from 'egg';

export default class LoginRegisterController extends Controller {

    public async login() { 
        const { ctx } = this;
        const info = await ctx.service.loginrigister.login();
        this.ctx.body = {
            code: 200,
            data:info
        }
    }

    public async register() {
        
    }

}




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
  }