import { Service } from 'egg';
/**
 * login  rregister
 * 
 */
export default class classification extends Service{
    
  public async creatclassification(words:String){
    const results = await this.app['mysql'].insert('everydaywords',{words:words});
    return results;
  }

  public async classificationlist(){
    const results = await this.app['mysql'].select('everydaywords');
    return results;
  }
}


