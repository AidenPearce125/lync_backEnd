const router = require('express').Router();
const auth = require('../middleware/auth');
const ctrl = require('../controllers/serviceController');

router.post('/', auth, ctrl.create);
router.get('/mine', auth, ctrl.listMy);

module.exports = router;
