const router = require('express').Router();

const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;