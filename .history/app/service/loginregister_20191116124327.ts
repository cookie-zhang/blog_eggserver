import { Service } from 'egg';
/**
 * login  rregister
 * 
 */
export default class loginRegister extends Service{

  public async login(name:String,pass:String){
    const results = await this.app['mysql'].select('admin',{name:name,pass:pass});
    return results;
  }
  public async register(name:String,pass:String){
    const results = await this.app['mysql'].select('admin',{name:name,pass:pass});
    return results;
  }

  public async getuserinfo(name:String,pass:String){
    const results = await this.app['mysql'].select('admin',{name:name,pass:pass});
    return results;
  }
}



