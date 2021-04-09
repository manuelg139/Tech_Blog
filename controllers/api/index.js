const router = require('express').Router();
const homeRoutes = require('./userRoutes');
const commentsRoutes = require('./commentsRoutes');


router.use('/posts', homeRoutes);
router.use('/comments', commentsRoutes);


module.exports = router;