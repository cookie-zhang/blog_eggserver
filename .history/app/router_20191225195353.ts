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
  router.post('/data/articleList', controller.lettcode.articlelist);
  router.get('/data/articleDetail', controller.lettcode.detail);
  router.post('/data/createarticle', controller.lettcode.createarticle);
  router.post('/data/updatearticle', controller.lettcode.updatearticle);
  router.post('/data/deletearticle', controller.lettcode.deletearticle);

  /**
   * 力扣
   */
  router.post('/data/lettcodeList', controller.article.articlelist);
  router.get('/data/lettcodeDetail', controller.article.detail);
  router.post('/data/createLettcode', controller.article.createarticle);
  router.post('/data/updateLettcode', controller.article.updatearticle);
  router.post('/data/deleteLettcode', controller.article.deletearticle);

  router.post('/data/dianzan', controller.article.dianzan);
  router.post('/data/dianzanUpdate', controller.article.dianzanupdate);

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
