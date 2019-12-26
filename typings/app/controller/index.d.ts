// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/controller/article';
import ExportBooks from '../../../app/controller/books';
import ExportClassification from '../../../app/controller/classification';
import ExportEverydaywords from '../../../app/controller/everydaywords';
import ExportLettcode from '../../../app/controller/lettcode';
import ExportLoginregister from '../../../app/controller/loginregister';

declare module 'egg' {
  interface IController {
    article: ExportArticle;
    books: ExportBooks;
    classification: ExportClassification;
    everydaywords: ExportEverydaywords;
    lettcode: ExportLettcode;
    loginregister: ExportLoginregister;
  }
}
