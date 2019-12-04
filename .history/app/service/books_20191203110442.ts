import { Service } from 'egg';
/**
 * books
 * 
 */
export default class books extends Service{
    
  public async creatclassification(type:String){
    const results = await this.app['mysql'].insert('classification',{type:type});
    return results;
  }

  public async classificationlist(){
    const results = await this.app['mysql'].select('classification');
    return results;
  }
}


