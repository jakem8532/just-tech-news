const User = require('./Users')
const Post = require('./Post')

// Create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
})

Post.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Post }