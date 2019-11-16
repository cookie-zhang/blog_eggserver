

import { Controller } from 'egg';

export default class WordsController extends Controller {

  public async creatwords() {
    const { ctx } = this;
    const { name,pass } = ctx.query;
      this.ctx.body = {
        code: 200,
        data: {message:'登录成功！'}
      }
  
  }

}
