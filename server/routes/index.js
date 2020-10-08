import { Router } from 'express';

import { user } from '../controllers';

const router = Router();
/** Example route */

router.get('/', (req, res) => res.send('Q roio vato!'));
/** Example route */
router.get('/users', user.getUsers);
/** Example route */
router.get('/users/:userId', user.getUserById);
/** Example route */
router.post('/add', user.add);

export default router;
