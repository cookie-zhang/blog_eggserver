import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.post('/articleList', controller.article.articlelist);
  router.get('/articleDetail', controller.article.detail);
};
