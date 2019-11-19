import { Service } from 'egg';
/**
 * login  rregister
 * 
 */
export default class classification extends Service{
    
  public async creatclassification(type:String){
    const results = await this.app['mysql'].insert('classification',{type:type});
    return results;
  }

  public async classificationlist(){
    const results = await this.app['mysql'].select('classification');
    return results;
  }
}


