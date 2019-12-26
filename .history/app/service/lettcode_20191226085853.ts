import { Service } from 'egg';

/**
 * article Service
 */
export default class Test extends Service {

  /**
   * 力扣列表
   */
  public async getlist() {
    const results = await this.app['mysql'].select('lettcode',{orders: [ ['id', 'desc'] ]});
    return results;
  }
  /**
   * 力扣详情
   */
  public async articledetail(id:String){
    const results = await this.app['mysql'].get('lettcode', {id:id})
    return results;
  }
  /**
   * 创建力扣
   */
  public async createarticle(data:Object){
    const results = await this.app['mysql'].insert('lettcode',{
      sort: data['sort'],
      sortName:data['sortName'],
      type: data['type'],
      typeName:data['typeName'],
      coverImg: data['coverImg'],
      author: data['author'],
      title: data['title'],
      introduce: data['introduce'],
      content: data['content'],
      createDate: data['createDate'],
      updateDate: data['updateDate'],
      like: data['like'],
      looks: data['looks']
    })
    return results;
  }
  /**
   * 更新力扣
   */
  public async updatearticle(data:Object){
    const results = await this.app['mysql'].update('lettcode',data)
    return results;
  }
  public async deletearticle(data:Object){
    const results = await this.app['mysql'].delete('lettcode', data)
    return results;
  }
  // public async insertdianzan(data:Object){
  //   const results = await this.app['mysql'].insert('lettcode',{
  //     id: data['id'],
  //     like:data['like'],
  //   })
  //   return results;
  // }
  // public async dianzan(id:Number){
  //   const results = await this.app['mysql'].get('lettcode', id)
  //   return results;
  // }
  /**
   * 点赞更新
   */
  // public async dianzanupdate(data:Object){
  //   const results = await this.app['mysql'].update('dianzan',data)
  //   return results;
  // }
}
