import { Service } from 'egg';
/**
 * login  rregister
 * 
 */
export default class classification extends Service{
    
  public async creatclassification(words:String){
    const results = await this.app['mysql'].insert('classification',{words:words});
    return results;
  }

  public async classificationlist(){
    const results = await this.app['mysql'].select('classification');
    return results;
  }
}


