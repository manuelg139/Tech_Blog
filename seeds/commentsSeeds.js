const { Comments } = require('../models');

const commentData = [
    {
        user_id: 2,
        post_id: 1,
        comment_text: "I have a feeling I should not attend this!!!"
    },
    {
        user_id: 5,
        post_id: 2,
        comment_text: "This would not have happened if I was in charge!"
    },
    {
        user_id: 3,
        post_id: 3,
        comment_text: "If you do not go you will be fired!"
    },
    
]

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;