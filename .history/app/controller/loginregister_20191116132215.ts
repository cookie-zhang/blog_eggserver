import { Controller } from 'egg';

export default class LoginRegisterController extends Controller {

  public async login() {
    const { ctx } = this;
    const { name } = ctx.query;
    const info = await ctx.service.loginregister.login(name);
    this.ctx.body = {
      code: 200,
      data: info
    }
  }

  public async register() {
    const { ctx } = this;
    const { name, pass } = ctx.query;
    const info = await ctx.service.loginregister.getuserinfo(name);
    if(name ==   info[0].name){
      this.ctx.body = {
        code: 401,
        data: {message:'用户已经存在!'}
      }
      return;
    }else{
      await ctx.service.loginregister.register(name,pass);
      this.ctx.body = {
        code: 200,
        data: {
          message:'注册成功!'
        }
      }
    }

    
  }

  public async getuserinfo() {
    const { ctx } = this;
    const { name } = ctx.query;
    const info = await ctx.service.loginregister.getuserinfo(name);
    this.ctx.body = {
      code: 200,
      data: info
    }
  }
}
