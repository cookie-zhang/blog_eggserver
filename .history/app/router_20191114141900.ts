import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.get('/articleList', controller.article.articlelist);
  router.get('/articleList', controller.article.articlelist);
};
