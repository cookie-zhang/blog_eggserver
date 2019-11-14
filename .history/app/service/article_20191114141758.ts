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
  public async getdetail(){
    const results = await this.app['mysql'].select()
  }
}
