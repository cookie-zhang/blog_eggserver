import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  /**
   * 登录、注册
   */
  router.get('/data/login', controller.loginregister.login);
  router.get('/register', controller.loginregister.register);
  /**
  * 文章
  */
  router.post('/data/articleList', controller.article.articlelist);
  router.get('/data/articleDetail', controller.article.detail);
  router.post('/data/createarticle', controller.article.createarticle);
  router.post('/data/updatearticle', controller.article.updatearticle);
  router.post('/data/deletearticle', controller.article.deletearticle);

  /**
   * 点赞
   */
  router.post('/data/dianzan', controller.article.dianzan);
  router.post('/data/dianzanUpdate', controller.article.dianzanupdate);

  /**
   * 力扣
   */
  router.post('/data/lettcodeList', controller.lettcode.lettcodelist);
  router.get('/data/lettcodeDetail', controller.lettcode.lettcodedetail);
  router.post('/data/createLettcode', controller.lettcode.createlettcode);
  router.post('/data/updateLettcode', controller.lettcode.updatearticle);
  router.post('/data/deleteLettcode', controller.lettcode.deletearticle);

 

  /**
   * 每日一语
   */
  router.post('/data/createwords', controller.everydaywords.creatwords);
  router.post('/data/getwordsList', controller.everydaywords.getwordslist);

  /**
   * 分类管理
   */
  router.post('/data/creatclassification', controller.classification.creatclass);
  router.post('/data/classificationList', controller.classification.classlist);

  /**
   * 个人简介
   */
  // router.post('/profile');

  /**
   * 个人简历
   */
  // router.post('/resume');


  /**
   * 小程序
   * 
   */
  router.post('/data/books', controller.books.booksData);

};
