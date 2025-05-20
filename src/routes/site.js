const express = require('express');
const router = express.Router();
const siteContronller = require('../app/contronllers/SiteContronller');

router.use('/search', siteContronller.search);
router.use('/', siteContronller.index);

module.exports = router;