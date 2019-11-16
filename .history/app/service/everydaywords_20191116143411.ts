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
}



