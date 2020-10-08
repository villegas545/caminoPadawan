import Sequelize from 'sequelize';
import db from '../config/database';

const models = {
  User: db.import('./user')
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export default models;
