import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  cors: {
	  enable: true,
	  package: 'egg-cors'
  },
  sequelize = {
    enable: true,
    package: 'egg-sequelize',
  };
};

export default plugin;
