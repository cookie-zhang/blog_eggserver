import { Service } from 'egg';
/**
 * books
 * 
 */
export default class books extends Service{
    
  public async books(){
    const results = await this.app['mysql'].select('books');
    return results;
  }

}


