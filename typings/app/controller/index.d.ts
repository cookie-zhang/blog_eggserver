// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/controller/article';
import ExportEverydaywords from '../../../app/controller/everydaywords';
import ExportLoginregister from '../../../app/controller/loginregister';

declare module 'egg' {
  interface IController {
    article: ExportArticle;
    everydaywords: ExportEverydaywords;
    loginregister: ExportLoginregister;
  }
}
