import { Service } from 'egg';
/**
 * books
 * 
 */
export default class books extends Service{
    
  public async creatclassification(type:String){
    const results = await this.app['mysql'].insert('books',{type:type});
    return results;
  }

}


