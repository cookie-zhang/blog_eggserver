import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  /**
   * 登录，注册
   */
  router.post('/login', controller.login.index);
  router.get('/register', controller.loginregister)



  /**
  * 文章
  */
  router.post('/articleList', controller.article.articlelist);
  router.get('/articleDetail', controller.article.detail);
};
