import { Service } from 'egg';

/**
 * article Service
 */
export default class Test extends Service {

  /**
   * 
   */
  public async getlist() {
    const results = await this.app['mysql'].select('article');
    return results;
  }
}
