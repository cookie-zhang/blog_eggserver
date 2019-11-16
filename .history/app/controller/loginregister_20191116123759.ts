import { Controller } from 'egg';

export default class LoginRegisterController extends Controller {

  public async login() {
    const { ctx } = this;
    const info = await ctx.service.loginregister.login();
    this.ctx.body = {
      code: 200,
      data: info
    }
  }

  public async register() {
    const { ctx } = this;
    const info = await ctx.service.loginregister.register();
    this.ctx.body = {
      code: 200,
      data: info
    }
  }

  public async get
}
