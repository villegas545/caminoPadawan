/** Example model */
const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    nombre: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    celular: {
      type: DataTypes.STRING
    },
    pais: {
      type: DataTypes.STRING
    },
    ciudad: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    ocupacion: {
      type: DataTypes.STRING
    },
    githubUser: {
      type: DataTypes.STRING
    }
  });
  User.findByLogin = async login => {
    let user = await User.findOne({
      where: { email, login }
    });

    return user;
  };

  return User;
};

export default user;
