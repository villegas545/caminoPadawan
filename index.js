import server from './server';
import db from './server/config/database';
import models from './server/models';

import * as usuario from './server/seeder';

const PORT = process.env.PORT || 5000;

/** ERASE DATABASE WHEN THE SERVER STARTS */
const activarSeeder = false;

db.sync({ force: activarSeeder }).then(async () => {
  if (activarSeeder) {
    usuario.crearUsuarios();
  }

  server.listen(PORT, () =>
    console.log(`Tu servidor ta jalando chido en ${PORT}`)
  );
});
