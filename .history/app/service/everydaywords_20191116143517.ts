import { Service } from 'egg';
/**
 * login  rregister
 * 
 */
export default class createWords extends Service{

  public async creatwords(words:String){
    const results = await this.app['mysql'].insert('everydaywords',{words:words});
    return results;
  }
}



