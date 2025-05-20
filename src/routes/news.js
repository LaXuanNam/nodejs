const express = require('express');
const router = express.Router();
const newsContronller = require('../app/contronllers/NewsContronller');

router.use('/:slug', newsContronller.show);
router.use('/', newsContronller.index);

module.exports = router;