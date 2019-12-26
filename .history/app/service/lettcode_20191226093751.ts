import { Service } from 'egg';

/**
 * lettcode Service
 */
export default class Test extends Service {

  /**
   * 力扣列表
   */
  public async getlist() {
    const results = await this.app['mysql'].select('lettCode',{orders: [ ['id', 'desc'] ]});
    return results;
  }
  /**
   * 力扣详情
   */
  public async lettcodedetail(id:String){
    const results = await this.app['mysql'].get('lettCode', {id:id})
    console.log(results)
    return results;
  }
  /**
   * 创建力扣
   */
  public async createLettcode(data:Object){
    const results = await this.app['mysql'].insert('lettCode',{
      sort: data['sort'],
      sortName:data['sortName'],
      type: data['type'],
      typeName:data['typeName'],
      coverImg: data['coverImg'],
      author: data['author'],
      title: data['title'],
      introduce: data['introduce'],
      content: data['content'],
      isOriginal: data['isOriginal'],
      createDate: data['createDate'],
      updateDate: data['updateDate'],
    })
    return results;
  }
  /**
   * 更新力扣
   */
  public async updateLettcode(data:Object){
    const results = await this.app['mysql'].update('lettCode',data)
    return results;
  }
  public async deleteLettcode(data:Object){
    const results = await this.app['mysql'].delete('lettCode', data)
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
