import { Service } from 'egg';
/**
 * login  rregister
 * 
 */
export default class loginRegister extends Service{

  public async login() {
    const results = await this.app['mysql'].select('admin');
    return results;
  }
  public async register(){
    const results = await this.app['mysql'].select('admin');
    return results;
  }

  public async getuserinfo(name:String,pass:String){
    const results = await this.app['mysql'].select('admin',{name:});
    return results;
  }
}



