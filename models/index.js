const User = require('./User');
const Posts = require('./Posts');
const Comments = require('./Comments');

User.hasMany (Posts, {
    foreignKey: 'users_id',
    onDelete: 'CASCADE'
});

Posts.belongsTo(Users, {
    foreignKey: 'users_id'
});


User.hasMany (Comments, {
    foreignKey: 'users_id',
    onDelete: 'CASCADE'
});

Comments.belongsTo(User, {
    foreignKey: 'users_id',
});


Posts.hasMany(Comments, {
    foreignKey: 'posts_id',
    onDelete: 'CASCADE'
});


Comments.belongsTo(Posts, {
    foreignKey: 'posts_id'
});




module.exports = { Users, Posts, Comments };