import { Service } from 'egg';
/**
 * login  rregister
 * 
 */
export default class loginRegister extends Service{

  public async login() {
    const results = await this.app['mysql'].select('article');
    return results;
  }
  public async regist(){
    const results = await this.app['mysql'].select('article');
    return results;
  }

}



