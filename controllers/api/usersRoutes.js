const router = require('express').Router();
const { Users} = require('../../models');
const withAuth = require('../../utils/auth');


// CREATE new user
router.post('/', async (req, res) => {
    try {
        //collects the user data
      const userData = await Users.create({
        name: req.body.name,
        username: req.body.username,
        github: req.body.github,
        email: req.body.email,
        password: req.body.password,
      });
  
      //sets up  session
      req.session.save(() => {
        req.session.loggedIn = true
        res.status(200).json(userData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });



  // LOGIN
router.post('/login', async (req, res) => {
    try {
      // Find the user who matches email address
      const userData = await Users.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      // Match password with database
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      // New session with new user
      req.session.save(() => {
        req.session.users_id = usersData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      // Removes the session variables
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;