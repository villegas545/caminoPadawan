import bcrypt from 'bcrypt';
import models from '../models';
const crearUsuarios = async () => {
  let pass = await bcrypt.hash('password', 10);
  console.log(pass);
  await models.User.create({
    nombre: 'Julio Villegas',
    email: 'villegas545@gmail.com',
    celular: '6366934592',
    pais: 'mexico',
    ciudad: 'NCG',
    password: pass,
    ocupacion: 'estudiante',
    githubUser: 'https://github.com/villegas545'
  });
};
export { crearUsuarios };
