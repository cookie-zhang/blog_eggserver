import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1573710736015_9114';

  // add your egg config in here
  config.middleware = [];
  // mysql
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '.',
      // 数据库名
      database: 'xiaofei',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  // config.sequelize = {
  //   dialect: 'mysql',
  //   host: ',
  //   port: 3306,
  //   database: 'xiaofei', // 数据库名称
  //   username: 'root', //账号
  //   password: '.', //密码
  // };
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
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
