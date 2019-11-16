// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/service/article';
import ExportEverydaywords from '../../../app/service/everydaywords';
import ExportLoginregister from '../../../app/service/loginregister';

declare module 'egg' {
  interface IService {
    article: ExportArticle;
    everydaywords: ExportEverydaywords;
    loginregister: ExportLoginregister;
  }
}
