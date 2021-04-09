const { Posts } = require('../models');

const postData = [
    {
        title: "Sales Meeeting",
        post_content: "Everybody in the Sales team meet me in the warehouse, do not tell Pam!",
        user_id: 3
    },
    {
        title: "Party Commitie Meeting",
        post_content: "We forgot Kelly's birthday. Emergency meeting in 15mts",
        user_id: 2
    },
    {
        title: "Big Picture Meeting",
        post_content: "It's done. It is happening. THREAT LEVEL MIDNIGHT Screening in the conference room ASAP!!!",
        user_id: 1
    },
    
]

const seedPosts = () => Posts.bulkCreate(postData);

module.exports = seedPosts;