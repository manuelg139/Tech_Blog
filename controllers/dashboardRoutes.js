const router = require('express').Router();
const { Posts, Users, Comments } = require('../models');
const withAuth = require('../utils/auth');

//? DASHBOARD DISPLAYS MULTIPLE USERS' POSTS //

//render dashboard
router.get('/', async (req, res) => {
    try {
        // Get all posts and JOIN with user data
        const postData = await Posts.findAll({
          include: [
            {
              model: Comments,
              attributes: ['id', 'comment_content', 'posts_id', 'users_id',],
            },
            {
              model: Users,
              attributes: ['username', 'name', 'github']
            },
          ],
        });
        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));
        // Pass serialized data and session flag into template I will create
        res.render('dashboard', { 
          posts, 
          logged_in: req.session.logged_in 
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
  });



// CREATE Post on Dashboard
router.get('/create', withAuth, async (req, res) => {
    try {
        // Get all posts and JOIN with user data
        const postData = await Posts.findAll({
            where: {
                user_id: req.session.user_id
              },
          include: [
            {
              model: Comments,
              attributes: ['id', 'comment_content', 'posts_id', 'users_id',],
            },
            {
              model: Users,
              attributes: ['username', 'name', 'github']
            },
          ],
        });
        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));
        // Pass serialized data and session flag into template I will create
        res.render('dashboard', { 
          posts, 
          logged_in: req.session.logged_in 
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
  });


module.exports = router;