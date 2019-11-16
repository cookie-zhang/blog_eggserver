import { Service } from 'egg';
/**
 * login  rregister
 * 
 */
export default class createWords extends Service{

  public async login(name:String){
    const results = await this.app['mysql'].select('admin',{name:name});
    return results;
  }
  public async register(name:String,pass:String){
    const results = await this.app['mysql'].insert('admin',{name:name,pass:pass});
    return results;
  }

  public async getuserinfo(name:String){
    const results = await this.app['mysql'].select('admin',{name:name});
    return results;
  }
}



