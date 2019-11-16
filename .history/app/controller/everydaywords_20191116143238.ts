

import { Controller } from 'egg';

export default class WordsController extends Controller {

  public async creatwords() {
    const { ctx } = this;
    const { name,pass } = ctx.query;
    const info = await ctx.service.loginregister.login(name);
    if(info.length > 0 && (name == info[0].name) && (pass == info[0].pass)){
      this.ctx.body = {
        code: 200,
        data: {message:'登录成功！'}
      }
    }else{
      this.ctx.body = {
        code: 401,
        data: {message:'用户名错误或密码错误！'}
      }
    }
   
  }

}
