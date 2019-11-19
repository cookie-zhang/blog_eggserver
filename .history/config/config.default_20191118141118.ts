import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1573710736015_9114';

  // add your egg config in here
  config.middleware = [];
  // mysql
  // config.mysql = {
  //   // 单数据库信息配置
  //   client: {
  //     // host
  //     host: '47.104.191.170',
  //     // 端口号
  //     port: '3306',
  //     // 用户名
  //     user: 'root',
  //     // 密码
  //     password: 'xiaofei1993.',
  //     // 数据库名
  //     database: 'xiaofei',
  //   },
  //   // 是否加载到 app 上，默认开启
  //   app: true,
  //   // 是否加载到 agent 上，默认关闭
  //   agent: false,
  // };
  config.sequelize = {
    dialect: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        database: 'databaseName', // 数据库名称
        username: 'root', //账号
        password: '123456', //密码
————————————————
版权声明：本文为CSDN博主「microcosm1994」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_39081974/article/details/93515025
  };
  config.security = {
    csrf: {
　　　　enable: false,
       ignoreJSON: true
　　},
　　domainWhiteList: ['*'],
  };
  config.cors = {
    origin: '*',// 匹配规则  域名+端口  *则为全匹配
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  // add your special config in here
  const bizConfig = {
    sourceUrl: '*',
  };
  exports.cluster = {
    listen: {
      port: 7002,
      hostname: 'http://cookiezhang.com',
    }
  };
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
