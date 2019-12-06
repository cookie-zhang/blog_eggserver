import { Service } from 'egg';

/**
 * article Service
 */
export default class Test extends Service {

  /**
   * 文章列表
   */
  public async getlist() {
    const results = await this.app['mysql'].select('article',{orders: [ ['id', 'desc'] ]});
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
  public async createarticle(data:Object){
    const results = await this.app['mysql'].insert('article',{
      sort: data['sort'],
      sortName:data['sortName'],
      type: data['type'],
      typeName:data['typeName'],
      coverImg: data['coverImg'],
      author: data['author'],
      title: data['title'],
      introduce: data['introduce'],
      content: data['content'],
      createDaTe: data['createDate'],
      updateDaTe: data['updateDate'],
      like: data['like'],
      looks: data['looks']
    })
    return results;
  }
  /**
   * 更新文章
   */
  public async updatearticle(data:Object){
    const results = await this.app['mysql'].update('article',data)
    return results;
  }


  /**
   * dian'zai
   */
  public async dianzanupdate(data:Object){
    const results = await this.app['mysql'].update('article',data)
    return results;
  }
}
