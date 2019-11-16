import { Service } from 'egg';

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
  /**
   * 创建文章
   */
  public async createarticle(data:String){
    console.log(1)
    const results = await this.app['mysql'].insert('article',{
      sort:data.sort,
      
    })
    return results;
  }
}
