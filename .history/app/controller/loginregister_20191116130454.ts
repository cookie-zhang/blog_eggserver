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
    if(name === info.name){

    }else{

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
