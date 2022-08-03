const router = require('express').Router()

const userRoutes = require('./user-routes')
const PostRoutes = require('./post-routes')
const commentRoutes = require('./comment-routes')

router.use('/users', userRoutes)
router.use('/posts', PostRoutes)
router.use('/comments', commentRoutes)

module.exports = router