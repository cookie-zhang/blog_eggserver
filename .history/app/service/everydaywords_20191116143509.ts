import { Service } from 'egg';
/**
 * login  rregister
 * 
 */
export default class createWords extends Service{

  public async creatwords(name:String){
    const results = await this.app['mysql'].select('everydaywords',{words:words});
    return results;
  }
}



