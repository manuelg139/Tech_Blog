const router = require('express').Router();
const { Posts} = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE new post
router.post('/', withAuth, async  (req, res) => {
    try  {
        //collects the post data
      const postData = await Posts.create({
        title: req.body.title,
        post_content: req.body.post_content,
        user_id: req.session.user_id
      });
  
        res.status(200).json(postData);

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


// UPDATE new post
  router.put('/:id', async (req, res) => {
    // update a post by its `id` value
    try {
      const postData = await Posts.update({
        title: req.body.title,
        post_content: req.body.post_content,
      }, {
        where: {
          id: req.params.id,
        },
      });
      if (!postData[0]) {
        res.status(404).json({ message: 'No information was sent, try again' });
        return;
      }
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


// DELETE POST 
  router.delete('/:id', async (req, res) => {
    // delete a post by its `id` value
    try {
      const postData = await Posts.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with that id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;