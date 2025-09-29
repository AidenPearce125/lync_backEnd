const router = require('express').Router();
const ctrl = require('../controllers/interestController');
router.get('/', ctrl.list);
router.post('/', ctrl.create);
module.exports = router;
