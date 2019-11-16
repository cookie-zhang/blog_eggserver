import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  /**
   * 登录，注册
   */
  router.get('/login', controller.loginregister.login);
  router.get('/register', controller.loginregister.register);
  /**
  * 文章
  */
  router.post('/articleList', controller.article.articlelist);
  router.get('/articleDetail', controller.article.detail);
  router.post('/createarticle', controller.article.createarticle);

  /**
   * 每日一语
   */
  router.post('/createwords', controller.everydaywords.creatwords);
  router.post('/createwords', controller.everydaywords.creatwords);

};
