import { Service } from 'egg';
/**
 * login  rregister
 * 
 */
export default class loginRegister extends Service{

  public async login() {
    const results = await this.app['mysql'].select('article');
    return results;
  }
  public async register(){
    const results = await this.app['mysql'].select('article');
    return results;
  }

}




/**
 * article Service
 */
export default class Test extends Service {

    /**
     * 文章列表
     */
    public async getlist() {
      const results = await this.app['mysql'].select('article');
      return results;
    }
    /**
     * 文章详情
     */
    public async articledetail(id:String){
      const results = await this.app['mysql'].get('article', {id:id})
      return results;
    }
  }
  